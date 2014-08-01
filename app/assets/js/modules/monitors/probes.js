define(['jquery', 'knockout'],

    function($, ko) {

        console.log("defining probe viewmodel...");

        function ProbeViewModel() {

            var self = this;

            self.ciList = ko.observable(null);
            self.searchKeyword = ko.observable();
            self.chosenItems = ko.observableArray();

            self.availableProbeTypes = ko.observableArray(['Ping', 'Database', 'SNMP', 'HTTP']);
            self.currentProbe = {};


            self.beforeRoutingAction = function(context) {

                if (self.ciList() === null)
                    self.searchCiByName();

            };


            self.searchCiByName = function() {

                $.getJSON("js/mock/configuration_items.json", {'searchKeyword': self.searchKeyword()}, function(data) {
                    var items = [];
                    if (self.searchKeyword()) {
                        $.each(data, function(i, item) {
                            if (item['name'].indexOf(self.searchKeyword()) != -1) {
                                items.push(item);
                            }
                        });
                    } else {
                        items = data;
                    }
                    self.ciList(items);
                });

            };


            self.createProbes = function() {

                if (self.chosenItems().length > 0) {

                    /* create request param to send to server */
                    var uuids = $.map(self.chosenItems() , function(item) {
                        return (item.uuid);
                    });

                    /* ajax request to the server to validate the selection */
                    $.ajax({
                        type: 'POST',
                        url: "rest/services/validate_ci",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(uuids),

                        success: function(data, textStatus, jqXHR) {
                            if (!data) {
                                alert("Configuration Items selected are not compatible!");
                            } else {
                                //validation passed, route to the probe creation page
                                self.currentProbe = {id: 0, name: '', type: 'Database'};
                                location.hash = '#/monitors/create_probes';
                            }
                        },

                        error: function(jqXHR, textStatus, errorThrown) {
                            if (errorThrown == 'Unauthorized') {
                                location.hash = '#/login';
                            }                            
                        }

                    });

                } else
                    alert("Please select at least one CI to create probe with!");

            };


            self.saveProbes = function() {

                /* submit to the server and server responds with new probe created */
                $.ajax({
                    type: 'POST',
                    url: "rest/services/validate_probe",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(self.currentProbe),

                    success: function(data, textStatus, jqXHR) {

                        /* Saved successfully, add new probe to the CIs */
                        $.each(self.chosenItems(), function(idx, item) {
                            item.probes.push(data);
                        });

                        /* route back to the list page */
                        location.hash = '#/monitors/probes';
                    },

                    error: function(jqXHR, textStatus, errorThrown) {
                        if (errorThrown == 'Unauthorized') {
                            location.hash = '#/login';
                        }
                    }

                });

            }


        }

        return new ProbeViewModel();
    }
);
