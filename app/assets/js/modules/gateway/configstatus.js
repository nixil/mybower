define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            function ConfigStatusViewModel() {
                var self = this;
                self.manufacturer = ko.observable();
                self.model = ko.observable();
                self.serial = ko.observable();
                self.memoryForm = ko.observable();
                self.memorySize = ko.observable();
                self.cpuFamily = ko.observable();
                self.cpuManufacturer = ko.observable();
                self.cpuMaxSpeed = ko.observable();
                self.cpuCurrentSpeed = ko.observable();
                self.cpuCoreCount = ko.observable();
                self.cpuCoreEnabled = ko.observable();
                self.osKernel = ko.observable();
                self.networkInterfaces = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/configstatus",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.manufacturer(data.manufacturer);
                        self.model(data.model);
                        self.serial(data.serial);
                        self.memoryForm(data.memoryForm);
                        self.memorySize(data.memorySize);
                        self.cpuFamily(data.cpuFamily);
                        self.cpuManufacturer(data.cpuManufacturer);
                        self.cpuMaxSpeed(data.cpuMaxSpeed);
                        self.cpuCurrentSpeed(data.cpuCurrentSpeed);
                        self.cpuCoreCount(data.cpuCoreCount);
                        self.cpuCoreEnabled(data.cpuCoreEnabled);
                        self.osKernel(data.osKernel);
                        self.networkInterfaces(data.networkInterfaces);
                    }
                });
            }

            return new ConfigStatusViewModel();
        }
);
