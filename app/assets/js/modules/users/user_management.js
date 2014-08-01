define(['jquery', 'knockout', 'date-util', 'moment-timezone', 'modules/common/dialog-utils', 'modules/common/user-validation'],

    function ($, ko, dateUtil, moment, dialog, user_validation) {

        console.log("defining user management view model...");

        function UserManagementViewModel() {
            var self = this;

            var Choice = function(text, code) {
                this.text = text;
                this.code = code;
            };

            self.userList = ko.observableArray(null);

            self.id = ko.observable();
            self.userID = ko.observable().extend({ required: true , email: true});
            self.firstName = ko.observable().extend({ required: true });
            self.lastName = ko.observable().extend({ required: true });
            self.email = ko.observable().extend({ required: true });
            self.phoneNumber = ko.observable();
            self.dateFormat = ko.observable().extend({ required: true });
            self.timeFormat = ko.observable().extend({ required: true });
            self.timeZone = ko.observable().extend({ required: true });
            self.status = ko.observable().extend({ required: true });
            self.userType = ko.observable().extend({ required: true });
            self.createBy = ko.observable();
            self.createDate = ko.observable();
            self.modifiedBy = ko.observable();
            self.modifiedDate = ko.observable();
            self.roles = ko.observableArray();

            self.sortInfo = ko.observable({
                column: { "field": "userID" },
                "direction": "asc"
            });

            self.gridOptions = { data: self.userList,
                                 showFilter: true,
                                 enablePaging: true,
                                 multiSelect: false,
                                 //selectWithCheckboxOnly: true,
                                 canSelectRows: false,
                                 displaySelectionCheckbox: false,
                                 disableTextSelection: false,
                                 sortInfo: self.sortInfo,
                                 fixedViewPortHeight: false,
                                 showToolbar: true,
                                 rightToolbarTemplate: '<button type="button" class="btn btn-sm btn-primary" data-bind="click: createNewUser"><i class="fa fa-plus"></i>&nbsp; &nbsp; Create New User &nbsp; &nbsp;</button>',
                                 columnDefs: [
                                     {field: 'userID', displayName: 'User ID', cellTemplate: '<div class="kgCellText"><a data-bind="click: $parent.$grid.$userViewModel.editUser.bind($data, $parent.entity.id)"><strong data-bind="text: $parent.entity.userID"></strong></a></div>'},
                                     {field: 'userFullName', displayName: 'Name'},
                                     {field: 'status', displayName: 'Status', width: '75px',  cellFormatter: function(data) {return data === 1 ? 'Enabled' : data === 0 ? 'Disabled' : 'Inactive'; }},
                                     {field: 'userType', displayName: 'User Type', width: '115px',  cellFormatter: function(data) {return data == 1 ? 'Service Provider' : 'Customer'; }},
                                     {field: 'email', displayName: 'Email'},
                                     {field: 'phone', displayName: 'Phone'},
                                     {field: 'roles', displayName: 'User Role', cellFormatter: function(data) {var arr = $.map(data, function(n, i) {return (n.name);});return arr.join();}},
                                     {field: 'userID', displayName: 'Action', width: '250px', cellTemplate:'<div class="kgAction">' +
                                         '<button class="btn btn-primary btn-xs" data-bind="click: $parent.$grid.$userViewModel.editUser.bind($data, $parent.entity.id)"><i class="glyphicon glyphicon-pencil"></i> Edit </button>' +
                                         '<button class="btn btn-default btn-xs" data-bind="click: $parent.$grid.$userViewModel.sendInvite.bind($data, $parent.entity.id), visible: $parent.entity.status == 2"><i class="glyphicon glyphicon-send"></i> Send Invite </button>' +
                                         '<button class="btn btn-default btn-xs" data-bind="click: $parent.$grid.$userViewModel.confirmDelete.bind($data, $parent.entity)"><i class="glyphicon glyphicon-remove"></i> Delete </button>' +
                                         '</div>'}
                                 ]};

            /*
            var now = new moment();
            self.availableDateFormats = ko.observableArray();
            $.each(["MM-DD-YYYY", "MM.DD.YYYY", "MM/DD/YYYY", "DD-MM-YYYY", "DD.MM.YYYY",
                "DD/MM/YYYY", "YYYY-MM-DD", "YYYY.MM.DD", "YYYY/MM/DD", "MMMM Do, YYYY", "Do. MMMM YYYY"],
                function(i, v){self.availableDateFormats.push(new Choice(now.format(v), v))});

            self.availableTimeFormats = ko.observableArray();
            $.each(["HH:mm:ss", "HH:mm:ss Z", "hh:mm:ss a", "hh:mm:ss a Z"],
                function(i, v){self.availableTimeFormats.push(new Choice(now.format(v), v))});

            self.availableTimeZones = ko.observableArray();
            $.each(moment.tz.zones(),
                function(i, v){self.availableTimeZones.push(v.displayName)});
            */

            self.availableDateFormats = dateUtil.availableDateFormats;
            self.availableTimeFormats = dateUtil.availableTimeFormats;
            self.availableTimeZones = dateUtil.availableTimeZones;

            self.userID.subscribe(function (newValue) {
                self.email(newValue);
            });

            self.availableStatus = ko.observableArray([
                new Choice('Inactive', 2),
                new Choice('Enabled', 1),
                new Choice('Disabled', 0)
            ]);

            self.availableRoles = ko.observableArray([]);

            self.availableTypes = ko.observableArray([
                new Choice('Service Provider', 1),
                new Choice('Customer', 2)
            ]);

            self.isNewUser = function() {
                return !(self.id() && self.id() > 0);
            };

            self.beforeRoutingAction = function (context) {
                if (self.userList() === null || self.userList().length < 1)
                    findAllUsers();
            };

            self.beforeEditing = function (context) {
                if (self.userList() === null || self.userList().length < 1) {
                    findAllUsers(function() {
                        if (context.params['id'] && parseInt(context.params['id']) > 0)
                            self.selectUser(locateUserById(context.params['id']));
                    });
                } else {
                    if (context.params['id'] && parseInt(context.params['id']) > 0)
                        self.selectUser(locateUserById(context.params['id']));
                }
                if (self.availableRoles() === null || self.availableRoles().length < 1) findAllUserRoles();
            };

            var findAllUsers = function (callback) {
                $.ajax({
                    type: 'POST',
                    url: "rest/usermgmtservice/list",
                    dataType: "json", // data type of response
                    data: { keyword: '' },
                    success: function (data, textStatus, jqXHR) {
                        // convert date fields to Date objects
                        $.each(data, function(i, user) {
                            if (user.createDate) user.createDate = dateUtil.parseDate(user.createDate);
                            if (user.modifiedDate) user.modifiedDate = dateUtil.parseDate(user.modifiedDate);
                            user.userFullName = user.firstName + ' ' + user.lastName;
                        });
                        self.userList(data);
                        if (callback && typeof callback == 'function')  {
                            callback(data);
                        } else {
                            if (data && data.length > 0) self.selectUser(data[0]);
                        }
                    }
                });
            };

            var locateUserById = function(id) {
                var result = null;
                $.each(self.userList(), function(index, element) {
                    if (element.id == id) {
                        result = element;
                        return false;
                    }
                });
                return result;
            };

            var findAllUserRoles = function() {
                $.ajax({
                    type: 'GET',
                    url: "rest/usermgmtservice/roles",
                    dataType: "json",
                    success: function (data, textStatus, jqXHR) {
                        self.availableRoles($.map(data, function(v, i) {
                            return new Choice(v.name, v.id);
                        }));
                    }
                });
            };

            self.selectUser = function (data) {
                for (var key in data) {
                    if (data.hasOwnProperty(key) && key != 'roles' && self.hasOwnProperty(key))
                        self[key](data[key]);
                }

                self.roles([]);
                if (data.roles) {
                    $.each(data.roles, function (i, role) {
                        self.roles.push(role.id);
                    });
                }
            };

            self.createNewUser = function () {
                ko.validation.disableValidation();
                self.id(null);
                self.userID(null);
                self.firstName(null);
                self.lastName(null);
                self.status(2);
                self.userType(1);
                self.phoneNumber(null);
                self.timeZone(null);
                self.dateFormat(null);
                self.timeFormat(null);
                self.createBy(null);
                self.createDate(null);
                self.modifiedBy(null);
                self.modifiedDate(null);
                self.roles([]);
                ko.validation.enableValidation();
                location.hash = '#/users/user/' + 0;
            };


            self.saveChanges = function () {
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
                    status: self.status,
                    userType: self.userType,
                    createBy: self.createBy,
                    createDate: self.createDate,
                    modifiedBy: self.modifiedBy,
                    modifiedDate: self.modifiedDate,
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
                        if (userData.id === null) {
                            self.userList.push(data);
                            self.id(data.id);
                            dialog.notifySuccess('Operation Succeeded', 'New user is created, an email invite is sent to user at ' + data.email);
                        } else {
                            $.each(self.userList(), function (idx, item) {
                                if (item.id == data.id) {
                                    var list = self.userList();
                                    list[idx] = data;
                                    self.userList(list);
                                }
                            });
                            dialog.notifySuccess('Operation Succeeded', 'Change is saved.');
                        }
                        data.userFullName = data.firstName + ' ' + data.lastName;
                        location.hash = '#/users/users';
                    }
                });
            };

            self.hasPrivilege = user_validation.hasPrivilege;

            self.confirmDelete = function(user) {
                self.selectUser(user);
                dialog.confirmationDialog('Are you sure to delete user: ' + user.userID + ' ?', self.deleteUser, null, 'Yes|No');
            };

            self.confirmResetPwd = function() {
                dialog.confirmationDialog('Are you sure to send user ' + self.userID() + ' reset password email at address ' + self.email() + ' ?', self.resetPwd, null, 'Yes|No');
            };

            self.resetPwd = function() {
                $.ajax({
                    type: 'POST',
                    url: "rest/usermgmtservice/resetpwd",
                    dataType: "text", // data type of response
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(self.id()),
                    success: function (data, textStatus, jqXHR) {
                        dialog.notifySuccess('Operation Completed', 'Reset password mail has been sent to ' + data + ' successfully');
                    }
                });
            };

            self.editUser = function (id) {
                location.hash = '#/users/user/' + id;
            };

            self.cancelEdit = function () {
                location.hash = '#/users/users';
            };

            self.sendInvite = function (id) {
                $.ajax({
                    type: 'POST',
                    url: "rest/usermgmtservice/invite",
                    dataType: "text", // data type of response
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(id),
                    success: function (data, textStatus, jqXHR) {
                        dialog.notifySuccess('Operation Completed', 'User invite has been sent to ' + data + ' successfully');
                    }
                });
            };

            self.deleteUser = function () {
                if (self.id() !== null) {
                    $.ajax({
                        type: 'POST',
                        url: "rest/usermgmtservice/delete",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(self.id()),
                        success: function (data, textStatus, jqXHR) {
                            if (data) {
                                var index = -1;
                                $.each(self.userList(), function (idx, item) {
                                    if (item.id == self.id()) {
                                        index = idx;
                                        return false;
                                    }
                                });
                                self.userList.splice(index, 1);

                                var length = self.userList().length;
                                if (length > 0) {
                                    if (index < length)
                                        self.selectUser(self.userList()[index]);
                                    else
                                        self.selectUser(self.userList()[length - 1]);
                                } else {
                                    self.createNewUser();
                                }

                                dialog.notifySuccess('Operation Succeeded', 'User is removed successfully');

                            } else {
                                dialog.alertError('The operation is failed, please try again later.');
                            }
                        }
                    });
                } else {
                    if (self.userList().length > 0) {
                        self.selectUser(self.userList()[0]);
                    } else {
                        self.createNewUser();
                    }
                }
            };
        }

        return new UserManagementViewModel();
    }
);
