define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            function VPNStatusViewModel() {
                var self = this;
                self.status = ko.observable();
                self.serviceStatus = ko.observable();
                self.connectionStatus = ko.observable();
                self.anyconnectClientVersion = ko.observable();
                self.urlHelpers = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/vpnstatus",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.status(data.status);
                        self.serviceStatus(data.serviceStatus);
                        self.connectionStatus(data.connectionStatus);
                        self.anyconnectClientVersion(data.anyconnectClientVersion);
                        self.urlHelpers(data.urlHelpers);
                    }
                });
            }

            return new VPNStatusViewModel();
        }
);
