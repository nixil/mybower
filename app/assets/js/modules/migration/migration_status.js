define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining probe viewmodel...");
        
        function migrationStatusViewModel(){
           var self = this;
           
           
        //Header Reading
            self.colNameData = ko.observable();
            self.dateTimeStamp  = ko.observable();
            var colName  = [];
            var colData = [];
                $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/migrationStartTime.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                colName.push([item.column_name]);  
                                colData.push([item.column_data]);
                            });
                   }, 
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
            self.colNameData(colName);
            self.dateTimeStamp(colData);
        //----------------------------------------------------------------------
        //Size of Database Migrated
        /*
        var lineSeries = [{name : 'Size', items : [50,60,70,80,90,100], markerDisplayed: 'on'}];
        //var lineGroups = ['22-04-2014 05:12:22', '22-04-2014 06:12:22','22-04-2014 07:12:22', '22-04-2014 08:12:22','22-04-2014 09:12:22', '22-04-2014 10:12:22'];
        var lineGroups = ['A', 'B','C', 'D','E', 'F'];
        self.lineSeriesValue = ko.observable(lineSeries);
        self.lineGroupsValue = ko.observable(lineGroups);
        */ 

            self.pGSizeofDataMig = ko.observable();
            self.pDSizeofDataMig  = ko.observable();
            var series  = [];
            var timeseries = [];
                $.ajax({
                   async    : true,
                   url      : "js/mock/migration/sizeOfMigratedDatabase.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series.push([item.total_seg_size]);  
                                timeseries.push([item.snaptime]);
                            });
                   }, 
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
            
            var lineSeries = [{name : 'Size', items : series, markerDisplayed: 'on'}];
            self.pDSizeofDataMig(lineSeries);
            self.pGSizeofDataMig(timeseries);
        //----------------------------------------------------------------------
        //Data Migration Throughput
            self.pGDataThroughput = ko.observable();
            self.pDDataThroughput  = ko.observable();
            var dataSeries  = [];
            var groupSeries = [];
                $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/dataThroughput.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                dataSeries.push([item.throughput]);  
                                groupSeries.push([item.snaptime]);
                            });
                   }, 
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
            
            var lineSeries = [{name : 'Throughput', items : dataSeries}];
            self.pDDataThroughput(lineSeries);
            self.pGDataThroughput(groupSeries);
        //----------------------------------------------------------------------
        //Migration Job Status (very Large Tables not included)
            self.migJobStatusVLTNI = ko.observableArray();
            var migStatVLTNI = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/migrationJobStatusVeryLargeTablesNotIncl.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migStatVLTNI.push({job_description: item.job_description,
                                                pkgdone: item.pkgdone,
						totalpkgs: item.totalpkgs,
						pct: item.pct
                                               });
                         });
                         
                        self.migJobStatusVLTNI(migStatVLTNI);                         
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading migrationJobStatusVeryLargeTablesNotIncl!");                            
                }
            });
            
            self.gridOmigJobStatusVLTNI = { data: self.migJobStatusVLTNI,
                                              enablePaging: true,
                                              columnDefs: [{field: 'job_description', displayName: 'Job Description'},
                                                           {field: 'pkgdone', displayName: 'Pkg Done'},
                                                           {field: 'totalpkgs', displayName: 'Total Pkgs'},
                                                           {field: 'pct', displayName: 'Percentage'}
                                                          ]
                                            }; 
        //----------------------------------------------------------------------
        //Migration Status - Very Large Table
            self.migJobStatusVLT = ko.observableArray();
            var migStatVLT = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/migrationJobStatusVeryLargeTables.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migStatVLT.push({hostname: item.hostname, 
                                              job_description: item.job_description,
                                              jobtype: item.jobtype,
					      pkgdone: item.pkgdone,
					      totalpkgs: item.totalpkgs,
					      pct: item.pct
                                             }); 
                         });
                        self.migJobStatusVLT(migStatVLT);                         
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading migrationJobStatusVeryLargeTables!");                            
                }
            });
            
            self.gridOmigJobStatusVLT = { data: self.migJobStatusVLT,
                                          enablePaging: true,
                                          columnDefs: [{field: 'hostname', displayName: 'Hostname'},
                                                       {field: 'job_description', displayName: 'Job Description'},
                                                       {field: 'jobtype', displayName: 'Job Type'},
                                                       {field: 'pkgdone', displayName: 'Pkg Done'},
                                                       {field: 'totalpkgs', displayName: 'Total Pkgs'},
                                                       {field: 'pct', displayName: 'Percentage'}
                                                      ]
                                        };
        
        //----------------------------------------------------------------------
        };
        
        return new migrationStatusViewModel();
        
    }
    
);