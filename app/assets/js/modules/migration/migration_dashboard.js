define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining migration_dashboard viewmodel...");
        
        function migrationdashboardViewModel(){
           var self = this;
           
           self.scenarioId = ko.observable();
           self.engagementId = ko.observable();

           self.selectEngagement = function(id) {
               self.engagementId(id);
               location.hash = '#/migration/migration_service';
           }
           
        };
        
        return new migrationdashboardViewModel();
    }
          
);