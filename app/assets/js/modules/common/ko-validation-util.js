define(['knockout', 'knockout-validation', 'jquery'],

    /*
     * this module overload the knockout.validation to add ability
     * to disable/enable validation on demand
     */
    function(ko, kv, $) {

        ko.validation.init({insertMessages: true,
            errorsAsTitle: false,
            decorateInputElement: true,
            errorElementClass: 'validationErrorInput',
            errorMessageClass: 'validationErrorMessage'});


        /*
         * Ensures a field has the same value as another field (E.g. "Confirm Password" same as "Password"
         * Parameter: otherField: the field to compare to
         * Example
         *
         * viewModel = {
         *   var vm = this;
         *   vm.password = ko.observable();
         *   vm.confirmPassword = ko.observable();
         * }
         * viewModel.confirmPassword.extend( areSame: { params: viewModel.password, message: "Confirm password must match password" });
         */
        kv.rules['areSame'] = {
            getValue: function (o) {
                return (typeof o === 'function' ? o() : o);
            },
            validator: function (val, otherField) {
                return val === this.getValue(otherField);
            },
            message: 'The fields must have the same value'
        };

        /*
         * Ensures a field matches a regex rule - in this case a password field has some complexity
         */
        kv.rules['passwordComplexity'] = {
            validator: function (val) {
                return /(?=^[^\s]{6,32}$)((?=.*?\d)(?=.*?[A-Z])(?=.*?[a-z])|(?=.*?\d)(?=.*?[^\w\d\s])(?=.*?[a-z])|(?=.*?[^\w\d\s])(?=.*?[A-Z])(?=.*?[a-z])|(?=.*?\d)(?=.*?[A-Z])(?=.*?[^\w\d\s]))^.*/.test('' + val + '');
            },
            message: 'Password must be between 6 and 32 characters long and contain three of the following 4 items: upper case letter, lower case letter, a symbol, a number'
        };

        ko.validation.registerExtenders();

        /*
         * Disable the knockout validation, any change to any observables
         * afterwards will not cause any message being displayed
         */
        ko.validation.disableValidation = function() {
            ko.validation.configuration.validationDisabled = true;
            $('span.' + ko.validation.configuration.errorMessageClass).hide();
        };

        /*
         * Enable the knockout validation if it's disabled
         */
        ko.validation.enableValidation = function() {
            ko.validation.configuration.validationDisabled = false;
            ko.validation.configuration.messagesOnModified = true;
        };


        var oldGroup = ko.validation.group;


        /*
         * Extend the group() to allow re-run of validation rules on observables
         * before collecting all the error msgs for properties in obj.
         *
         * @param obj the container object which has observable inside
         * @param options when has property {evaluate: true}, all the
         *        observables will be evaluated
         */
        ko.validation.group = function group(obj, options) {
            if (options && options.evaluate) {
                ko.validation.reEvaluate(obj);
            }
            oldGroup(obj, options);
        };

        var oldValidateObservable = ko.validation.validateObservable;

        /*
         * Extend the validateObservable() to honor
         * the validationDisabled switch
         */
        ko.validation.validateObservable = function(observable) {
            if (!ko.validation.configuration.validationDisabled) {
                return oldValidateObservable(observable);
            } else {
                observable.clearError();
                return true;
            }
        };


        /*
         * Run the validation rules for all the observables in the obj
         * @param obj the container object which has observable inside
         */
        ko.validation.reEvaluate = function(obj) {

            for (var key in obj) {
                if (obj.hasOwnProperty(key) &&
                    ko.isObservable(obj[key]) &&
                    ko.validation.utils.isValidatable(obj[key])) {
                        ko.validation.validateObservable(obj[key]);
                }
            }

        };

        /*
         * Adding the error msg popover
         */
        var oldValidationElementHandler = ko.bindingHandlers['validationElement'];
        ko.bindingHandlers['validationElement'] = {
            update: function (element, valueAccessor, allBindingsAccessor) {

                oldValidationElementHandler.update(element, valueAccessor, allBindingsAccessor);

                var obsv = valueAccessor(),
                    config = kv.utils.getConfigOptions(element),
                    isModified = false,
                    isValid = false;

                isModified = obsv.isModified();
                isValid = obsv.isValid();

                var shouldShow = ((!ko.validation.configuration.decorateElementOnModified || isModified) ? !isValid : false);

                var showPopover = function () {
                        $(this).popover({
                            trigger: 'manual',
                            container: '#mainContent',
                            html: true,
                            placement: 'auto',
                            title: 'Error',
                            content: obsv.error,
                            template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content fa fa-exclamation-triangle error-alert-icon"> <p></p></div></div></div>'
                        });
                        $(this).popover('show');
                    },
                    hidePopover = function () {
                        if (!$(this).is(":focus"))
                            $(this).popover('destroy');
                    };

                if (shouldShow) {
                    $(element).focus(showPopover)
                      .blur(hidePopover)
                      .hover(showPopover, hidePopover);
                } else {
                    $(element).popover('destroy');
                    $(element).off('focus')
                        .off('mouseenter mouseleave')
                        .off('blur');
                }
            }
        };

        /*
         * Adding required asterisk * to label of input field
         */
        var oldValidationCoreHandler = ko.bindingHandlers['validationCore'];
        ko.bindingHandlers['validationCore'] = (function () {
            return {
                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                    oldValidationCoreHandler.init(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext);

                    var observable = valueAccessor();
                    if (observable.rules) {
                        var label = $('label[for=' + element.id + ']');
                        if (label && label.text() &&
                                label.text().charAt(label.text().length - 1) != '*') {
                            $.each(observable.rules(), function(idx, item) {
                                if (item.rule == 'required') {
                                    label.text(label.text() + ' *');
                                    return false;
                                }
                            });
                        }
                    }
                }
            };

        }());


        /* nothing to return */
        return {};
    }
);
