define(['jquery', 'knockout', 'moment-timezone', 'modules/common/user', 'moment-timezone-data', 'date-picker'],
    function ($, ko, moment, user) {
        var DateUtil = function () {
            var self = this;

            self.formatDate = function (date) {
                if (!date) return "";

                return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            };

            // Converts different formats to a moment object
            self.parseDate = function (date) {
                // if it's already a moment object, just return that
                if (moment.isMoment(date)) {
                    return date;
                }

                // if date is a string, assume it's in ISO 8601 format, including timezone
                if (typeof date == "string") {
                    return moment(date, "YYYY-MM-DDTHH:mm:ss.SSS+Z");
                }

                // if date is a number, assume it's an epoch time
                if (typeof date == "number") {
                    return moment(date);
                }

                // if date is a Date object, assume it's already in local timezone
                if (date instanceof Date) {
                    return moment(date);
                }

                console.log("will not parse date, returning null. passed object:", date);

                return null;
            };

            self.getUserDateFormat = function () {
                return (user.dateFormat() ? user.dateFormat() : "YYYY-MM-DD");
            };

            self.getUserTimeFormat = function () {
                return (user.timeFormat() ? user.timeFormat() : "HH:mm:ss Z");
            };

            // Set the global date picker defaults
            $.fn.datetimepicker.defaults = {showToday: true, pickTime: false};

            var pickerUpdate = function (element, valueAccessor, options) {
                $(element).datetimepicker(options).on("dp.change", function (e) {
                    var observable = valueAccessor();
                    observable(e.date);
                });
            };

            var setPickerValue = function (element, valueAccessor) {
                var newValue = ko.utils.unwrapObservable(valueAccessor());
                $(element).data("DateTimePicker").setDate(newValue);
            };

            // Initialize the datePicker binding handler
            if (!ko.bindingHandlers.datePicker) {
                ko.bindingHandlers.datePicker = {
                    init: function (element, valueAccessor, allBindings) {
                        var options = allBindings().dateOptions || {};
                        options.format = user.dateFormat();
                        options.pickTime = false;
                        pickerUpdate(element, valueAccessor, options);
                    },
                    update: setPickerValue
                };
            }

            // Initialize the datePicker binding handler
            if (!ko.bindingHandlers.timePicker) {
                ko.bindingHandlers.timePicker = {
                    init: function (element, valueAccessor, allBindings) {
                        var options = allBindings().dateOptions || {};

                        // Always use a 24 hour clock format for time picker
                        options.format = (options.useSeconds) ? "HH:mm:ss" : "HH:mm";
                        options.pickDate = false;
                        pickerUpdate(element, valueAccessor, options);
                    },
                    update: setPickerValue
                };
            }

            // Initialize the datePicker binding handler
            if (!ko.bindingHandlers.dateTimePicker) {
                ko.bindingHandlers.dateTimePicker = {
                    init: function (element, valueAccessor, allBindings) {
                        var options = allBindings().dateOptions || {};
                        // Always use a 24 hour clock format for time picker
                        var timeFormat = (options.useSeconds) ? "HH:mm:ss" : "HH:mm";
                        options.format = user.dateFormat() + " " + timeFormat;
                        pickerUpdate(element, valueAccessor, options);
                    },
                    update: setPickerValue
                };
            }

            if (!ko.bindingHandlers.dateValue) {
                ko.bindingHandlers.dateValue = {
                    init: function (element, valueAccessor, allBindings, viewModel) {
                        var dateTime = self.parseDate(ko.utils.unwrapObservable(valueAccessor()));
                        element.setAttribute('value', dateTime.format());

                        // this callback will happen when the value changes in the DOM element
                        $(element).change(function () {
                            var observable = valueAccessor();
                            observable(element.getAttribute('value'));
                        });
                    },
                    // update will get called when the observable is updated directly (e.g. observable(newValue))
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                        var newValue = ko.utils.unwrapObservable(valueAccessor());
                        var elementValue = ko.selectExtensions.readValue(element);

                        if (newValue !== elementValue) {
                            ko.selectExtensions.writeValue(element, newValue);
                        }
                    }
                };
            }

            if (!ko.bindingHandlers.dateText) {
                ko.bindingHandlers.dateText = {
                    update: function (element, valueAccessor, allBindings, viewModel) {
                        // convert the date into a moment option for localization and formatting
                        var dateTime = self.parseDate(ko.utils.unwrapObservable(valueAccessor()));
                        if (dateTime) {
                            var formattedDate = "";
                            switch (allBindings.get("include")) {
                                case "time":
//                                    formattedDate = dateTime.tz(user.timeZone()).format(user.timeFormat());
                                    formattedDate = dateTime.format(self.getUserTimeFormat());
                                    break;
                                case "both":
//                                    formattedDate = dateTime.tz(user.timeZone()).format(user.dateFormat() + " " + user.timeFormat());
                                    formattedDate = dateTime.format(self.getUserDateFormat() + " " + self.getUserTimeFormat());
                                    break;
                                default: // covers the "date" option and default option
                                    formattedDate = dateTime.format(self.getUserDateFormat());
                                    break;
                            }

                            $(element).text(formattedDate);
                        }
                    }
                };
            }

            var Choice = function(text, code) {
                this.text = text;
                this.code = code;
            };

            var now = new moment();
            self.availableDateFormats = ko.observableArray();
            $.each(["MM-DD-YYYY", "MM.DD.YYYY", "MM/DD/YYYY", "DD-MM-YYYY", "DD.MM.YYYY",
                "DD/MM/YYYY", "YYYY-MM-DD", "YYYY.MM.DD", "YYYY/MM/DD", "MMMM Do, YYYY", "Do. MMMM YYYY"],
                function(i, v){self.availableDateFormats.push(new Choice(now.format(v), v))});

            self.availableTimeFormats = ko.observableArray();
            $.each(["HH:mm:ss", "HH:mm:ss Z", "hh:mm:ss a", "hh:mm:ss a Z"],
                function(i, v){self.availableTimeFormats.push(new Choice(now.format(v), v))});

            self.availableTimeZones = ko.observableArray();
//            $.each(moment.tz.zones(),
//                function(i, v){self.availableTimeZones.push(v.displayName)});
        };

        return new DateUtil();
    });