define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var EMPluginViewModel = function() {

                var self = this;
                self.pluginList = ko.observableArray();

                $.ajax({
                    type: 'GET',
                    url: "rest/gatewayservice/emplugins",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        self.pluginList(data);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        dialog.alertError("Error " + errorThrown);
                    }
                });
                
                self.pluginsGrid = {data: self.pluginList,
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
                        {field: 'pluginId', displayName: 'Identifier'},
                        {field: 'version', displayName: 'Version'},
                        {field: 'revision', displayName: 'Revision'}
                    ]};
            };

            return new EMPluginViewModel();
        }
);
