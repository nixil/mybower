define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var EMConnectorViewModel = function() {

                var self = this;
                self.connectorList = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/emconnectors",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.connectorList(data);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        dialog.alertError("Error " + errorThrown);
                    }
                });
                
                self.connectorsGrid = {data: self.connectorList,
                    showFilter: true,
                    enablePaging: true,
                    multiSelect: false,
                    //selectWithCheckboxOnly: true,
                    canSelectRows: false,
                    displaySelectionCheckbox: false,
                    disableTextSelection: false,
                    //sortInfo: self.sortInfo,
                    fixedViewPortHeight: false,
                    pagingOptions: {
                        pageSizes: ko.observableArray([10, 100, 500, 1000]),
                        pageSize: ko.observable(10),
                        totalServerItems: ko.observable(0),
                        currentPage: ko.observable(1)
                    },
                    showToolbar: false,
                    columnDefs: [
                        {field: 'name', displayName: 'Name'},
                        {field: 'description', displayName: 'Description'},
                        {field: 'statusLabel', displayName: 'Status'}
                    ]};
            };

            return new EMConnectorViewModel();
        }
);
