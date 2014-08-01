define(['jquery', 'knockout'],
    function ($, ko) {
        var SampleReportViewModel = function () {
            var self = this;
            self.sampleTableData = ko.observableArray();
            self.sampleChartData = ko.observableArray();
            self.startTime = ko.observable(0);

            self.dataGrid = {
                data: self.sampleTableData,
                showFilter: true,
                enablePaging: true,
                fixedViewPortHeight: false,
                columnDefs: [
                    {field: 'TIME', displayName: 'Time', width: '40%'},
                    {field: 'CPU_UTILIZATION', displayName: 'CPU Utilization', width: '30%',  cellFormatter: function(data) {return data + '%' }},
                    {field: 'MEMORY_UTILIZATION', displayName: 'Memory Utilization', width: '30%',  cellFormatter: function(data) {return data + '%' }}
                ]};

            self.changeStartTime = function() {
                $.getJSON('rest/data/sql/TestReport?TIME_INPUT=' + self.startTime(), function(data) {
                    self.sampleTableData(data);
                });

                $.getJSON('rest/data/sql/chart/TestReport/TIME?TIME_INPUT=' + self.startTime(), function(data) {
                    self.sampleChartData(data);
                });
            };

            self.changeStartTime();

        };

        return new SampleReportViewModel();
    }
);
