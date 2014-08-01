define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var PackagesViewModel = function() {

                var self = this;
                self.packageList = ko.observableArray();
                self.regex = ko.observable();

                self.search = function() {
                    $.ajax({
                        type: 'POST',
                        url: "rest/gatewayservice/packages",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: self.regex(),
                        success: function(data, textStatus, jqXHR) {
                            self.packageList(data);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            dialog.alertError("Too many results found - please narrow your search criteria and try again !");
                        }
                    });
                };

                self.packagesGrid = {data: self.packageList,
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
                        {field: 'versionRelease', displayName: 'Version/Release'}
                    ]};
            };

            return new PackagesViewModel();
        }
);
