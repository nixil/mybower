define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var IPTableViewModel = function() {

                var self = this;
                self.chainList = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/iptable",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.chainList(data);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        dialog.alertError("Error " + errorThrown);
                    }
                });
            };

            return new IPTableViewModel();
        }
);
