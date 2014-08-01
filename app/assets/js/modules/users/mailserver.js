define(['jquery', 'knockout', 'modules/common/dialog-utils'],

    function ($, ko, dialog) {

        console.log("defining mail server configuration view model...");

        function MailServerViewModel() {
            var self = this;

            self.id = ko.observable(0);
            self.smtp_host = ko.observable().extend({ required: true });
            self.smtp_port = ko.observable().extend({ required: true, number: true, min: 1, max: 1000000});
            self.smtp_security = ko.observable("SSL");
            self.smtp_auth = ko.observable(false);
            self.smtp_user = ko.observable();
            self.smtp_password = ko.observable();
            self.changed = ko.observable(false);
            self.smtp_host.subscribe(function() {
                self.changed(true);
            });
            self.smtp_port.subscribe(function() {
                self.changed(true);
            });
            self.smtp_security.subscribe(function() {
                self.changed(true);
            });
            self.smtp_auth.subscribe(function() {
                self.changed(true);
            });
            self.smtp_user.subscribe(function() {
                self.changed(true);
            });
            self.smtp_password.subscribe(function() {
                self.changed(true);
            });

            self.beforeRoutingAction = function() {
                if (!self.id()) {
                    $.ajax({
                        type: 'GET',
                        url: "rest/usermgmtservice/get_mail_server",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        success: function (data, textStatus, jqXHR) {
                            if (data.id) {
                                self.id(data.id);
                                self.smtp_host(data.smtpHost);
                                self.smtp_port(data.smtpPort);
                                self.smtp_security(data.smtpSecurity);
                                self.smtp_auth(data.smtpAuthentication);
                                self.smtp_user(data.smtpUser);
                                self.smtp_password(data.smtpPassword);
                                self.changed(self.smtp_host() && self.smtp_port() ? false : true);
                            } else {
                                self.changed(true);
                            }
                        }
                    });
                }
            };

            self.saveMailServerSetting = function () {
                var mailObj = {
                    id: self.id,
                    smtpHost: self.smtp_host,
                    smtpPort: self.smtp_port,
                    smtpSecurity: self.smtp_security,
                    smtpAuthentication: self.smtp_auth,
                    smtpUser: self.smtp_user,
                    smtpPassword: self.smtp_password
                };

                ko.validation.group(mailObj, {evaluate: true});

                if (mailObj.errors().length > 0) {
                    dialog.alertError('Data validation failed, please see the error message with the failed input field!');
                    return;
                }

                //transform from ko observable to pure java object
                delete mailObj.errors;
                var mailData = ko.toJS(mailObj);

                $.ajax({
                    type: 'POST',
                    url: "rest/usermgmtservice/set_mail_server",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(mailData),
                    success: function (data, textStatus, jqXHR) {
                        dialog.notifySuccess('Operation Succeeded', 'SMTP server configuration is saved.');
                        self.changed(false);
                    }
                });
            };

            self.sendTestMail = function () {
                $.ajax({
                    type: 'GET',
                    url: "rest/usermgmtservice/test_mail_server",
                    dataType: "text", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function (data, textStatus, jqXHR) {
                        dialog.notifySuccess('Operation Succeeded', 'A test email has been sent to your email address: ' + data + ', please check your mailbox.');
                    }
                });
            };
        }

        return new MailServerViewModel();
    }
);
