define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var StorageViewModel = function() {
                var self = this;
                self.storageList = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/storage",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.storageList(data);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        dialog.alertError("Error " + errorThrown);
                    }
                });

                self.storageGrid = {data: self.storageList,
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
                        {field: 'fs', displayName: 'File System'},
                        {field: 'size', displayName: 'Size'},
                        {field: 'used', displayName: 'Used'},
                        {field: 'avail', displayName: 'Available'},
                        {field: 'percentUsed', displayName: 'Percent Used'},
                        {field: 'mountedOn', displayName: 'Mounted On'}
                    ]};
            };

            return new StorageViewModel();
        }
);
