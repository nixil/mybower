define(['jquery', 'knockout'],
    function ($, ko) {

        function SqlChartModel() {

            var self = this;
            /* toggle button variables */
            self.orientationValue = ko.observable('vertical');
            self.initialOrientationValue = 'vertical';
            /* chart data */
            var lineSeries = [{name : "Series 1", items : [74, 62, 70, 76, 66]},
                {name : "Series 2", items : [50, 38, 46, 54, 42]},
                {name : "Series 3", items : [34, 22, 30, 32, 26]},
                {name : "Series 4", items : [18,  6, 14, 22, 10]},
                {name : "Series 5", items : [3,  2,  3,  3,  2]}];
            var lineGroups = ["Group A", "Group B", "Group C", "Group D", "Group E"];
            this.lineSeriesValue = ko.observableArray(lineSeries);
            this.lineGroupsValue = ko.observableArray(lineGroups);
            /* toggle buttons*/
            self.setNoChrome = function(event) {
                $(event.target).parent().addClass("oj-button-no-chrome");
            };
            self.orientationOptions = [
                {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'demo-line-vert'},
                {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'demo-line-horiz'}
            ];
            self.orientationValueChange = function(selectedItem) {
                self.orientationValue(selectedItem.value);
                return true;
            };

            self.sqlDataUrl = ko.observable("sample/line?groupColumn=TIME");
            self.rerender = function (){
                $.getJSON("rest/data/sql/"+self.sqlDataUrl(), function(data){
                    self.lineSeriesValue(data.series);
                    self.lineGroupsValue(data.groups);
                });
            };
        }

        return new SqlChartModel();
    });