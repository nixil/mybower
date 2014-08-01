define(['jquery', 'knockout', 'modules/common/dialog-utils', 'modules/common/user', 'date-util'],

    function ($, ko, dialog, user, dateUtil) {

        console.log("defining user profile view model...");

        function UserProfileViewModel() {
            var self = this;

            self.id = ko.observable();
            self.userId = ko.observable().extend({ required: true , email: true});
            self.firstName = ko.observable().extend({ required: true });
            self.lastName = ko.observable().extend({ required: true });
            self.email = ko.observable().extend({ required: true });
            self.phoneNumber = ko.observable();
            self.dateFormat = ko.observable().extend({ required: true });
            self.timeFormat = ko.observable().extend({ required: true });
            self.timeZone = ko.observable().extend({ required: true });
            self.password = ko.observable().extend({ required: true , passwordComplexity: true });
            self.confirmPassword = ko.observable().extend({ required: true , areSame: self.password});

            self.availableDateFormats = dateUtil.availableDateFormats;
            self.availableTimeFormats = dateUtil.availableTimeFormats;
            self.availableTimeZones = dateUtil.availableTimeZones;

            self.beforeRouting = function() {
                self.id(user.id);
                self.userId(user.userId());
                self.firstName(user.firstName());
                self.lastName(user.lastName());
                self.email(user.email());
                self.phoneNumber(user.phoneNumber());
                self.timeZone(user.timeZone());
                self.dateFormat(user.dateFormat());
                self.timeFormat(user.timeFormat());
            };

            self.saveProfileChanges = function () {
                var userObj = {
                    id: self.id,
                    userID: self.userID,
                    firstName: self.firstName,
                    lastName: self.lastName,
                    email: self.email,
                    phoneNumber: self.phoneNumber,
                    timeZone: self.timeZone,
                    dateFormat: self.dateFormat,
                    timeFormat: self.timeFormat,
                    status: user.status,
                    userType: user.userType,
                    roles: self.roles
                };

                ko.validation.group(userObj, {evaluate: true});

                if (userObj.errors().length > 0) {
                    dialog.alertError('Data validation failed, please see the error message besides the failed input field!');
                    return;
                }

                //transform from ko observable to pure java object
                delete userObj.errors;
                var userData = ko.toJS(userObj);

                $.ajax({
                    type: 'POST',
                    url: "rest/usermgmtservice/saveUser",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(userData),
                    success: function (data, textStatus, jqXHR) {
                        dialog.notifySuccess('Operation Succeeded', 'Profile changes are saved.');
                    }
                });
            };

            self.changePassword = function () {
                var userObj = {
                    password: self.password,
                    confirmPassword: self.confirmPassword
                };

                ko.validation.group(userObj, {evaluate: true});

                if (userObj.errors().length > 0) {
                    //a trick to workaround the ko validation problem of not showing message when there is no user input
                    self.password(null);
                    self.confirmPassword(null);
                    self.password(self.password());
                    self.confirmPassword(self.confirmPassword());
                    dialog.alertError('Data validation failed, please see the error message besides the failed input field!');
                    return;
                }

                //transform from ko observable to pure java object
                delete userObj.errors;

                $.ajax({
                    type: 'POST',
                    url: "rest/usermgmtservice/changePassword",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    data: self.password(),
                    success: function (data, textStatus, jqXHR) {
                        dialog.notifySuccess('Operation Succeeded', 'Password has been changed.');
                        location.hash = '#/users/profile';
                    }
                });

            };


            self.cancelEdit = function () {
                location.hash = '#/lifecycle/commonDashboard';
            };
        }

        return new UserProfileViewModel();
    }
);
