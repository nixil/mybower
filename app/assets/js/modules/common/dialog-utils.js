define(['jquery', 'pnotify'],

    function($, pnotify) {

        var self = this;

        self.notify = function(title, message) {
            self.showNotification(title, message);
        };

        self.notifySuccess = function(title, message) {
            self.showNotification(title, message, 'success');
        };

        self.notifyInfo = function(title, message) {
            self.showNotification(title, message, 'info');
        };

        self.notifyError = function(title, message) {
            self.showNotification(title, message, 'error');
        };

        self.showNotification = function(title, message, type) {
            $(function(){
                new PNotify({
                    title: title,
                    text: message,
                    nonblock: {
                        nonblock: true,
                        nonblock_opacity: 0.2
                    },
                    styling: 'fontawesome',
                    shadow: true,
                    opacity: 1,
                    sticker: false,
                    closer_hover: true,
                    addclass: "stack-custom",
                    type: type
                });
            });
        };

        self.confirmationDialog = function(bodyText, callback, cancelCallback, buttons) {
            var yesButton = 'OK', noButton = 'Cancel';
            if (buttons) {
                buttons = buttons.split('|');
                yesButton = buttons[0];
                noButton = buttons[1] ? buttons[1] : noButton;
            }
            self.showModalDialog('Confirmation', bodyText, noButton, yesButton, callback, cancelCallback, 'info');
        };

        self.alertSuccess = function(bodyText) {
            self.showModalDialog('Success', bodyText, 'OK', null, null, null, 'success');
        };

        self.alertError = function(bodyText, callback) {
            self.showModalDialog('Error', bodyText, 'OK', null, null, callback, 'danger');
        };

        self.alertWarning = function(bodyText) {
            self.showModalDialog('Warning', bodyText, 'OK', null, null, null, 'warning');
        };

        self.alertInfo = function(bodyText) {
            self.showModalDialog('Information', bodyText, 'OK', null, null, null, 'info');
        };

        self.showModalDialog = function(heading, bodyText, cancelButtonTxt, okButtonTxt, callback, cancelCallback, iconType) {

            var icon = 'fa-question-circle';
            var iconColor = '#39b3d7';

            iconType = iconType || 'info';
            switch(iconType.toLowerCase())
            {
                case 'success':
                    icon = 'fa-check-circle';
                    iconColor = '#47a447';
                    break;
                case 'info':
                    icon = 'fa-question-circle';
                    iconColor = '#39b3d7';
                    break;
                case 'warning':
                    icon = 'fa-exclamation-circle';
                    iconColor = '#ed9c28';
                    break;
                case 'danger':
                    icon = 'fa-times-circle';
                    iconColor = '#d2322d';
                    break;
            }

            var dialogModal =
                $('<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">' +
                    '<div class="modal-dialog">' +
                    '<div class="modal-content">' +
                    '<div class="modal-header" style="background-color:#428bca;color:white">' +
                    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                    '<h4 class="modal-title" id="myModalLabel">' + heading + '</h4>' +
                    '</div>' +
                    '<div class="modal-body" style="font-size:115%;min-height:80px"><div style="float:left;width:100px;height:80px;margin:-15px 0 0 -20px"><i style="color:' + iconColor + '" class="fa ' + icon +  ' fa-fw icon-80"></i></div> ' + bodyText + '</div>' +
                    '<div class="modal-footer">' +
                    (okButtonTxt ? '<a href="#" id="okButton" class="btn btn-primary">&nbsp;  ' + okButtonTxt + '  &nbsp;</a>' : '') +
                    (cancelButtonTxt ? '<a id="cancelButton" href="#" class="btn btn-default" data-dismiss="modal">&nbsp;  ' + cancelButtonTxt + '  &nbsp;</a>' : '') +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');


            if (cancelCallback) {
                dialogModal.find('#cancelButton').click(function(event) {
                    dialogModal.modal('hide');
                    cancelCallback();
                });
            }

            if (okButtonTxt) {
                dialogModal.find('#okButton').click(function(event) {
                    dialogModal.modal('hide');
                    if (callback) callback();
                });

                dialogModal.triggerAction = function() {
                    dialogModal.find('#okButton').trigger("click");
                };
            }

            /* destroy the dialogbox, preventing it from found by other parts of the code later */
            dialogModal.on('hidden.bs.modal', function () {
                dialogModal.remove();
                dialogModal = $();
            });

            dialogModal.modal('show');

            return dialogModal;
        };

        return self;
    }
);
