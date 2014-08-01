define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var FilterStatViewModel = function() {

                var self = this;
                self.pluginList = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/filterstats",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.pluginList(data);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        dialog.alertError("Error " + errorThrown);
                    }
                });
                
                self.filterStatsGrid = {data: self.pluginList,
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
                        {field: 'source', displayName: 'Source', width: '35%'},
                        {field: 'selectorChecked', displayName: 'Checked', width: '5%'},
                        {field: 'selectorMatched', displayName: 'Matched', width: '5%'},
                        {field: 'selectorApplied', displayName: 'Applied', width: '5%'},
                        {field: 'head', displayName: 'Head', width: '20%'},
                        {field: 'filterGroup', displayName: 'Filter Group', width: '20%'},
                        {field: 'sortOrder', displayName: 'Order', width: '5%'},
                        {field: 'globalFilterId', displayName: 'Global Id', width: '5%'}
                    ]};
            };

            return new FilterStatViewModel();
        }
);
