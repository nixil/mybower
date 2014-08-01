define(['jquery', 'knockout'],
    function($, ko) {
        console.log("defining myservices viewmodel...");
        
        function chartViewModel() {
            var self = this;
            
            self.services = [{name: 'Service Access Definition', link: '#/monitors/sads'},
                             {name: 'Probes', link: '#/monitors/probes'},
                             {name: 'User Module', link: '#/users/list'}];
        
            self.chartType = ko.observable("line");
            self.chartTypes = ko.observableArray(["line","pie","bar","area"]);
            
            self.groupDataSeries = ko.observableArray(["Amy", "Gary", "Kris", "Paul", "Marge"]);
            self.seriesData = ko.observableArray([{name: "Build", items: [1, 0, 0, 2, 4]},
                            {name: "Code Revew", items: [0, 2, 1, 3, 0]},
                            {name: "Core", items: [4, 5, 3, 0, 1]},
                            {name: "Deployment", items: [0, 3, 1, 1, 5]},
                            {name: "Source Browsing", items: [0, 5, 2, 0, 2]},
                            {name: "Tasks", items: [0, 3, 1, 3, 4]},
                            {name: "Wiki", items: [1, 2, 3, 2, 1]}]);
            
            self.mySelect = function(event, data){
                console.log("I'm in the select function" );
            }
        }

        return new chartViewModel();
    }
);
