define(['jquery', 'knockout', 'chart-util', 'sql-service', 'knockout-validation'],
    function ($, ko, chartUtil, sqlService) {
        ko.validation.init();

        function chartViewModel() {
            var self = this;

            var Option = function (defaultValue) {
                this.defaultValue = defaultValue;
                this.value = ko.observable(defaultValue);

                this.isDefault = function () {
                    return this.defaultValue === this.value();
                };
            };

            self.title = ko.observable();
            self.titleAlign = new Option("start");
            self.subtitle = ko.observable();
            self.chartType = new Option("line");
            self.stack = new Option("off");
            self.footnoteText = ko.observable();
            self.footnoteAlign = new Option("start");
            self.orientation = new Option("vertical");
            self.animationOnDisplay = new Option("none");
            self.animationOnDataChange = new Option("none");
            self.dataCursor = new Option("auto");
            self.dataCursorBehavior = new Option("auto");
            self.hideShow = new Option("none");
            self.hover = new Option("none");
            self.zoomAndScroll = new Option("off");
            self.overviewScrollbar = new Option("off");
            self.colorScheme = ko.observable();

            function Axis() {
                this.title = ko.observable();
                this.baselineScaling = new Option("zero");
                this.lineRendered = new Option("on");
                this.min = ko.observable();
                this.max = ko.observable();
                this.dataMin = ko.observable();
                this.dataMax = ko.observable();
                this.majorRendered = new Option("on");
                this.majorStep = ko.observable();
                this.majorMinStep = ko.observable();
                this.majorStyle = new Option("solid");
                this.minorRendered = new Option("on");
                this.minorStep = ko.observable();
                this.minorStyle = new Option("solid");
            }

            self.x = new Axis();
            self.y = new Axis();
            self.y2 = new Axis();
            self.y2.alignTickMarks = new Option("on");

            self.legendTitle = ko.observable();
            self.legendTitleAlign = new Option("start");
            self.legendRendered = new Option("on");
            self.legendScrolling = new Option("asNeeded");
            self.legendPosition = new Option("auto");
            self.legendRefTitle = ko.observable();

            self.groupData = ko.observableArray();
            self.seriesData = ko.observableArray();
            self.dataSourceType = ko.observable("sample");

            self.jsonSample = ko.observable("cpu_mem.json");
            self.sqlName = ko.observable();
            self.namedSqlUri = ko.observable("sample/line?groupColumn=TIME");
            self.jsonDataFile = ko.observable();
            self.jsonData = ko.observable();
            self.namedSqlList = ko.observableArray();

            self.loadChartData = function () {
                console.log("loading chart data of type: " + self.dataSourceType());
                switch (self.dataSourceType()) {
                    case "sample":
                        $.getJSON("js/mock/dvt/" + self.jsonSample(), function (data) {
                            self.groupData(data.groups);
                            self.seriesData(data.data);
                        });
                        break;
                    case "sql":
                        $.getJSON("rest/data/sql/"+self.namedSqlUri(), function(data) {
                            self.groupData(data.groups);
                            self.seriesData(data.series);
                        });
                        break;
                    case "json_file":
                        if (!self.jsonDataFile()) {
                            alert("You must select a file before loading");
                            // TODO - replace with nicer error dialogue
                            return;
                        }
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            readJSON(event.target.result);
                        };
                        reader.readAsText(self.jsonDataFile());
                        break;
                    case "json_data":
                        if (!self.jsonData()) {
                            alert("You must enter some data before loading");
                            // TODO - replace with nicer error dialogue
                            return;
                        }

                        readJSON(self.jsonData());
                        break;
                    default:
                        return null;
                }
            };

            // Initialize the chart with sample data
            self.loadChartData();

            self.loadNameSqlList = function () {
                sqlService.getNamedSqlList(function (data) {
                    self.namedSqlList(data);
                });
            };

            var readJSON = function (jsonString) {
                try {
                    var data = JSON.parse(jsonString);
                    if (data.groups && data.data) {
                        self.groupData(data.groups);
                        self.seriesData(data.data);
                    } else {
                        alert("JSON is not formatted properly");
                        console.log(data);
                        // TODO - replace with nicer error dialogue
                    }
                } catch (e) {
                    console.log(data);
                    alert("Error parsing JSON data: " + e);
                    // TODO - Replace with nicer error dialogue
                }
            };

            self.afterRender = function() {
                $('#zoomChart').on('shown.bs.modal', function (e) {
                    refreshChart($(e.target).find('#ojChart'));
                });
            };

            var refreshChart = function (element) {
                element.ojChart("refresh");
            };

            var countProperties = function (object) {
                var i = 0;
                for (var p in object) i++;
                return i;
            };

            self.chartMarkup = ko.computed(function () {
                var addOption = function (parent, option, optionName) {
                    if (!option.isDefault()) {
                        parent[optionName] = option.value();
                        return true;
                    }
                    return false;
                };

                // make an empty object to hold our ojComponent
                var ojComponent = {};
                ojComponent.component = "ojChart";
                ojComponent.type = self.chartType.value();
                ojComponent.groups = self.groupData();
                ojComponent.series = self.seriesData();
                addOption(ojComponent, self.stack, "stack");
                addOption(ojComponent, self.orientation, "orientation");
                addOption(ojComponent, self.zoomAndScroll, "zoomAndScroll");
                addOption(ojComponent, self.hideShow, "hideAndShowBehavior");
                addOption(ojComponent, self.hover, "hoverBehavior");
                addOption(ojComponent, self.animationOnDisplay, "animationOnDisplay");
                addOption(ojComponent, self.animationOnDataChange, "animationOnDataChange");
                addOption(ojComponent, self.dataCursor, "dataCursor");
                addOption(ojComponent, self.dataCursorBehavior, "dataCursorBehavior");

                var legend = {};
                if (self.legendTitle()) legend.title = self.legendTitle();
                addOption(legend, self.legendTitleAlign, "titleHalign");
                addOption(legend, self.legendRendered, "rendered");
                addOption(legend, self.legendPosition, "position");
                addOption(legend, self.legendScrolling, "scrolling");
                if (countProperties(legend) > 0) ojComponent.legend = legend;

                var title = {};
                if (self.title()) title.text = self.title();
                addOption(title, self.titleAlign, "hAlign");
                if (countProperties(title) > 0) ojComponent.title = title;

                var subtitle = {};
                if (self.subtitle()) subtitle.text = self.subtitle();
                if (countProperties(subtitle) > 0) ojComponent.subtitle = subtitle;

                var footnote = {};
                if (self.footnoteText()) footnote.text = self.footnoteText();
                addOption(footnote, self.footnoteAlign, "hAlign");
                if (countProperties(footnote) > 0) ojComponent.footnote = footnote;

                var overview = {};
                addOption(overview, self.overviewScrollbar, "rendered");
                if (countProperties(overview) > 0) ojComponent.overview = overview;

                var xAxis = {};
                if (self.x.title()) xAxis.title = self.x.title();
                addOption(xAxis, self.x.baselineScaling, "baselineScaling");
                if (self.x.min()) xAxis.min = self.x.min();
                if (self.x.max()) xAxis.max = self.x.max();
                if (self.x.dataMin()) xAxis.dataMin = self.x.dataMin();
                if (self.x.dataMax()) xAxis.dataMax = self.x.dataMax();
                if (self.x.majorStep()) xAxis.step = self.x.majorStep();
                if (self.x.majorMinStep()) xAxis.minStep = self.x.majorMinStep();
                if (self.x.minorStep()) xAxis.minorStep = self.x.minorStep();
                if (!self.x.lineRendered.isDefault()) xAxis.axisLine = { rendered: self.x.lineRendered.value()};

                var xMajorTick = {};
                addOption(xMajorTick, self.x.majorRendered, "rendered");
                addOption(xMajorTick, self.x.majorStyle, "lineStyle");
                if (countProperties(xMajorTick) > 0) xAxis.majorTick = xMajorTick;

                var xMinorTick = {};
                addOption(xMinorTick, self.x.minorRendered, "rendered");
                addOption(xMinorTick, self.x.minorStyle, "lineStyle");
                if (countProperties(xMinorTick) > 0) xAxis.minorTick = xMinorTick;

                if (countProperties(xAxis) > 0) ojComponent.xAxis = xAxis;

                var yAxis = {};
                if (self.y.title()) yAxis.title = self.y.title();
                addOption(yAxis, self.y.baselineScaling, "baselineScaling");
                if (self.y.min()) yAxis.min = self.y.min();
                if (self.y.max()) yAxis.max = self.y.max();
                if (self.y.dataMin()) yAxis.dataMin = self.y.dataMin();
                if (self.y.dataMax()) yAxis.dataMax = self.y.dataMax();
                if (self.y.majorStep()) yAxis.step = self.y.majorStep();
                if (self.y.majorMinStep()) yAxis.minStep = self.y.majorMinStep();
                if (self.y.minorStep()) yAxis.minorStep = self.y.minorStep();
                if (!self.y.lineRendered.isDefault()) yAxis.axisLine = { rendered: self.y.lineRendered.value()};

                var yMajorTick = {};
                addOption(yMajorTick, self.y.majorRendered, "rendered");
                addOption(yMajorTick, self.y.majorStyle, "lineStyle");
                if (countProperties(yMajorTick) > 0) yAxis.majorTick = yMajorTick;

                var yMinorTick = {};
                addOption(yMinorTick, self.y.minorRendered, "rendered");
                addOption(yMinorTick, self.y.minorStyle, "lineStyle");
                if (countProperties(yMinorTick) > 0) yAxis.minorTick = yMinorTick;

                if (countProperties(yAxis) > 0) ojComponent.yAxis = yAxis;

                var y2Axis = {};
                if (self.y2.title()) y2Axis.title = self.y2.title();
                addOption(y2Axis, self.y2.baselineScaling, "baselineScaling");
                addOption(y2Axis, self.y2.alignTickMarks, "alignTickMarks");
                if (self.y2.min()) y2Axis.min = self.y2.min();
                if (self.y2.max()) y2Axis.max = self.y2.max();
                if (self.y2.dataMin()) y2Axis.dataMin = self.y2.dataMin();
                if (self.y2.dataMax()) y2Axis.dataMax = self.y2.dataMax();
                if (self.y2.majorStep()) y2Axis.step = self.y2.majorStep();
                if (self.y2.majorMinStep()) y2Axis.minStep = self.y2.majorMinStep();
                if (self.y2.minorStep()) y2Axis.minorStep = self.y2.minorStep();
                if (!self.y2.lineRendered.isDefault()) y2Axis.axisLine = { rendered: self.y2.lineRendered.value()};

                var y2MajorTick = {};
                addOption(y2MajorTick, self.y2.majorRendered, "rendered");
                addOption(y2MajorTick, self.y2.majorStyle, "lineStyle");
                if (countProperties(y2MajorTick) > 0) y2Axis.majorTick = y2MajorTick;

                var y2MinorTick = {};
                addOption(y2MinorTick, self.y2.minorRendered, "rendered");
                addOption(y2MinorTick, self.y2.minorStyle, "lineStyle");
                if (countProperties(y2MinorTick) > 0) y2Axis.minorTick = y2MinorTick;

                if (countProperties(y2Axis) > 0) ojComponent.y2Axis = y2Axis;

                return "<div data-bind='ojComponent: " + JSON.stringify(ojComponent) +
                    "' style='width:100%;height:320px;'>\n</div>";
            });
        }

        return new chartViewModel();
    }
);