define(['jquery', 'knockout', 'date-util', 'moment-timezone', 'date-picker'],
    function ($, ko, dateUtil, moment) {
        var DateViewModel = function () {
            var self = this;

            self.startDate = ko.observable();
            self.startTime = ko.observable();
            self.endDate = ko.observable();

            self.setDate = function () {
                self.startDate(new Date());
            };

            self.setDateString = function () {
                self.startDate("03/15/2014");
            };

            self.setDateLongString = function() {
                self.endDate(moment("2014-04-07T20:50:12.123+02:00"));
            };
        };

        return new DateViewModel();
    }
);
