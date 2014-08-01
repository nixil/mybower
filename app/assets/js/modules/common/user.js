define(['jquery', 'knockout'],

    function($, ko) {

        console.log("defining user module...");

        function UserViewModel() {

            var self = this;

            self.id = ko.observable();
            self.userId = ko.observable();
            self.userName = ko.observable();
            self.firstName = ko.observable();
            self.lastName = ko.observable();
            self.email = ko.observable();
            self.phoneNumber = ko.observable();
            self.password = ko.observable();
            self.timeZone = ko.observable();
            self.dateFormat = ko.observable();
            self.timeFormat = ko.observable();
            self.status = ko.observable();
            self.userType = ko.observable();
            self.userLoggedIn = ko.observable(false);
            self.privileges = ko.observableArray([]);

        }

        return new UserViewModel();
    }
);
