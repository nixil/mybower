define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining migrationService viewmodel...");
        
        function migrationService(){
            var self = this;

            self.pageRegions = {
                mig1Tab: ko.observable(false),
                mig2Tab: ko.observable(false),
                mig3Tab: ko.observable(false),
                mig4Tab: ko.observable(false),
                mig1Status: ko.observable(false),
                mig1StatTab1: ko.observable(false),
                mig1StatTab2: ko.observable(false),
                mig1RunSum: ko.observable(false),
                migRun1MRSTab1: ko.observable(false),
                migRun1MRSTab2: ko.observable(false),
                migRun1MRSTab3: ko.observable(false),
                migRun1MRSTab4: ko.observable(false)
            };

            self.showRegion = function (region) {
                setTimeout(function () {
                    var observable = self.pageRegions[region];
                    if (observable) {
                        observable(true);
                        $(window).resize();
                    }
                }, 200);
            };
        //----------------------------------------------------------------------
            self.scenarioId = ko.observable();
            self.scenarioId(318);
            
            self.engagement_Id = ko.observable();
            self.engagement_Id(415);

            //self.engagement_Id(dashboard.engagement_Id());
            //console.log("self.engagement_Id: " + self.engagement_Id());

        //--------------------Pkg Run Id Drop Down List-------------------------
            self.pkgRunId  = ko.observable();
            //self.pkgRunId('130925_135954');
            //self.pkgRunIds = ko.observableArray(['130925_135954', '130925_135955', '130925_135956', '130925_135957']);
            self.pkgRunIds = ko.observableArray();

            var urlForPkgRunId;
            urlForPkgRunId = "rest/data/sql/pkgRunIdDropDown?scenario_id="+self.scenarioId();
            console.log("The pkgRunId url is "+ urlForPkgRunId);
            $.ajax({
               async    : true,
               url      : urlForPkgRunId,
               datatype : "json" ,
               contentType: "application/json; charset=utf-8",
               success  : function(data, textStatus, jqXHR) {
                       self.pkgRunIds(data);
                       if (data && data.length > 0) self.pkgRunId(data[0].PACKAGE_RUN_ID);
               }
            });
        //----------------------------------------------------------------------
            self.pieGroup = ko.observable();           
            self.pieGroup(['Group A']);
        //--------------------Table Transfer Method----------------------------
            self.tblTrfMthd  = ko.observable();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForTblTrfMthd;
                //urlForTblTrfMthd = "rest/data/sql/tableTransferMethod?scenario_id="+self.scenarioId()+"&pkg_run_id="+data;
                urlForTblTrfMthd = "rest/data/sql/tableTransferMethod?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForTblTrfMthd);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/tableTransferBreakdown.json",
                    url      : urlForTblTrfMthd,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                        var tblTrfMthdSer  = [];
                        // Loop through the items
                        $.each(data, function(idx, item) {
                            tblTrfMthdSer.push({name: item.RESULT_TEXT, 
                                                items: [item.RESULT_VALUE]});
                        });
                        self.tblTrfMthd(tblTrfMthdSer);
                    }
                });
            });

        //------------------------databaseTransferVolumes-----------------------
            self.dataTrfVol = ko.observable();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForDataTrfVol;
                urlForDataTrfVol = "rest/data/sql/dataTransferVolumes?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForDataTrfVol);
               
                $.ajax({
                   async    : true,
                   url        : urlForDataTrfVol,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                        var series2 = [];
                        // Loop through the items
                        $.each(data, function(idx, item) {
                            series2.push({name: item.RESULT_TEXT, items: [item.RESULT_VALUE]});
                        });
                        self.dataTrfVol(series2);
                    }
               });
           });
        //---------------------dataCompressionPercentage------------------------
            self.dataCompPer = ko.observable();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForDataCompPer;
                //urlForDataCompPer = "rest/data/sql/dataCompressionPercentage?scenario_id="+self.scenarioId()+"pkg_run_id="+data;
                urlForDataCompPer = "rest/data/sql/dataCompressionPercentage?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForDataCompPer);

                $.ajax({
                   async    : true,
                   url      : "js/mock/migration/dataCompressionPercentage.json",
                   //url      : urlForDataCompPer,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                            // Loop through the items
                            var series3 = [];
                            $.each(data, function(idx, item) {
                                series3.push({name: item.RESULT_TEXT, items: [item.RESULT_VALUE]});
                            });
                            self.dataCompPer(series3);
                        }
                });
            });
        //------------------Migration Compression Projection--------------------
            self.migCompProj = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForMigCompProj;
                //urlForMigCompProj = "rest/data/sql/ObjectCompressionProjection?pkg_run_id="+data;
                urlForMigCompProj = "rest/data/sql/ObjectCompressionProjection?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForMigCompProj);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/migrationCompressionProjection.json",
                    url      : urlForMigCompProj,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                            var series4 = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                series4.push({t1_label: item.T1_LABEL, 
                                              t1_size: item.T1_SIZE, 
                                              t1_projected_size_25pct: item.T1_PROJECTED_SIZE_25PCT, 
                                              t1_projected_size_50pct: item.T1_PROJECTED_SIZE_50PCT, 
                                              t1_space_gain: item.T1_SPACE_GAIN
                                             });
                            });
                            self.migCompProj(series4);
                    }
                });
            });
            self.gOmigCompProj= { data: self.migCompProj,
                                  showFilter: false,
                                  columnDefs: [{field: 't1_label', displayName: 'Label'},
                                               {field: 't1_size', displayName: 'Size (GB)'},
                                               {field: 't1_projected_size_25pct', displayName: 'Projected Size (When 25% Compressed)'},
                                               {field: 't1_projected_size_50pct', displayName: 'Projected Size (When 50% Compressed)'},
                                               {field: 't1_space_gain', displayName: 'Space Gain'}]
                                };
        //-------------------Invalid Objects By Owner --------------------------
            self.invaldObjByOwn = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForInvaldObjByOwn;
                //urlForInvaldObjByOwn = "rest/data/sql/InvalidObjectsByOwner?pkg_run_id="+data+"&pkg_run_id="+data;
                urlForInvaldObjByOwn = "rest/data/sql/InvalidObjectsByOwner?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForInvaldObjByOwn);
                $.ajax({
                   async    : true,
                   //url      : "js/mock/migration/invalidObjectsByOwner.json",
                   url      : urlForInvaldObjByOwn,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                            var invObjByOwnSer = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                  invObjByOwnSer.push({package_run_id: item.PACKAGE_RUN_ID, 
						       host_name: item.HOST_NAME, 
						       instance_name: item.INSTANCE_NAME, 
						       owner: item.OWNER, 
						       nr_objects: item.NR_OBJECTS,
						       object_name: item.OBJECT_NAME,
						       object_type: item.OBJECT_TYPE,
						       pid_run_time: item.PID_RUN_TIME});
                            });
                            self.invaldObjByOwn(invObjByOwnSer);
                   }
                });
            });
            self.gOinvaldObjByOwn = { data: self.invaldObjByOwn,
                                      enablePaging: true,
                                      showFilter: false,
                                      columnDefs: [{field: 'package_run_id', displayName: 'Package Run Id'},
                                                   {field: 'host_name', displayName: 'Host Name'},
                                                   {field: 'instance_name', displayName: 'Instance Name'},
                                                   {field: 'owner', displayName: 'Owner'},
                                                   {field: 'nr_objects', displayName: 'Diff'},
	                                           {field: 'object_name', displayName: 'Object Name'},
					           {field: 'object_type', displayName: 'Object Type'},
						   {field: 'pid_run_time', displayName: 'Run Time'}
						  ]
                                    };
        //--------------------Invalid objects by Type---------------------------
            self.invalidObjByType = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForInvalidObjSumm;
                urlForInvalidObjSumm = "rest/data/sql/InvalidObjectsSummary?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForInvalidObjSumm);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/invalidObjectsByType.json",
                    url      : urlForInvalidObjSumm,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                            var invObjser = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                invObjser.push({Object_Type: item.OBJECT_TYPE, Total: item.TOTAL});
                            });
                        self.invalidObjByType(invObjser);
                    }
                });
            });
            self.gOinvalidObjByType = { data: self.invalidObjByType,
                                        enablePaging: false,
                                        showFilter: false,
                                        columnDefs: [{field: 'Object_Type', displayName: 'Object Type'},
                                                    {field: 'Total', displayName: 'Total'}]
                                      }; 
        //----------------------------------------------------------------------
        //---------------Migration Status Reports Accordian---------------------
                    //----------------------Migration Start Time----------------------------
                    self.showMigTime = ko.observable();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForMigStartTime;
                        urlForMigStartTime = "rest/data/sql/migStartTime?scenario_id=" + self.scenarioId() + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id();
                        console.log("07a. The url is: " + urlForMigStartTime);
                        $.ajax({
                            async: true,
                            url: urlForMigStartTime,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                if (data && data.length > 0)
                                    self.showMigTime(data[0].COLUMN_DATA);
                                console.log("07A. The Mig Start Time is " + self.showMigTime());
                            }
                        });
                    });
            //------------------------------------------------------------------
            //Size of Database Migrated
            self.pGSizeofDataMig = ko.observable();
            self.pDSizeofDataMig  = ko.observable();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForSizeofDbMig;
                urlForSizeofDbMig = "rest/data/sql/sizeOfMigratedDatabase?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForSizeofDbMig);
                $.ajax({
                   async    : true,
                   //url      : "js/mock/migration/sizeOfMigratedDatabase.json",
                   url      : urlForSizeofDbMig,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                            var segSizeSer  = [];
                            var timeseries = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                segSizeSer.push([item.TOTAL_SIZE_GB]);  
                                timeseries.push([item.SNAP_TIME]);
                            });
                        var lineSeries = [{name : 'Size', items : segSizeSer, markerDisplayed: 'on'}];
                        self.pDSizeofDataMig(lineSeries);
                        self.pGSizeofDataMig(timeseries);
                    }
                });
            });
        //--------------------Data Migration Throughput-------------------------
            self.pGDataThroughput  = ko.observable();
            self.pDDataThroughput  = ko.observable();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForDataMigThroughput;
                urlForDataMigThroughput = "rest/data/sql/dataThroughput?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForDataMigThroughput);
                $.ajax({
                   async    : true,
                   //url      : "js/mock/migration/dataThroughput.json",
                   url      : urlForDataMigThroughput,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                            var dataSeries  = [];
                            var groupSeries = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                dataSeries.push([item.THROUGHPUT]);  
                                groupSeries.push([item.SNAP_TIME]);
                            });
                        var lineSeries = [{name : 'Throughput', items : dataSeries}];
                        self.pDDataThroughput(lineSeries);
                        self.pGDataThroughput(groupSeries);
                   }
                });
            });
        //---------Migration Job Status (very Large Tables not included)--------
            self.migJobStatusVLTNI = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
            if (!data) return;
                var urlFormigJobStatusVLTNI;
                urlFormigJobStatusVLTNI = "rest/data/sql/migrationJobStatusVeryLargeTablesNotIncl?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlFormigJobStatusVLTNI);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/migrationJobStatusVeryLargeTablesNotIncl.json",
                    url      : urlFormigJobStatusVLTNI,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                            var migStatVLTNI = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                             migStatVLTNI.push({job_description: item.JOB_DESCRIPTION,
                                                pkgdone: item.PKGDONE,
						totalpkgs: item.TOTALPKGS,
						pct: item.PERCENTAGE
                                               });
                            });
                            self.migJobStatusVLTNI(migStatVLTNI);
                    }
                });
            });
            self.gridOmigJobStatusVLTNI = { data: self.migJobStatusVLTNI,
                                              enablePaging: false,
                                              showFilter: false,
                                              columnDefs: [{field: 'job_description', displayName: 'Job Description'},
                                                           {field: 'pkgdone', displayName: 'Pkg Done'},
                                                           {field: 'totalpkgs', displayName: 'Total Pkgs'},
                                                           {field: 'pct', displayName: 'Percentage', width: 200, cellTemplate:'<div class="progress progress-striped" style="margin:5px; background-color:#f0ad4e">' +
                                                    '<div class="progress-bar" role="progressbar"' +
                                                    'data-bind="attr: {style: \'width:\' + getProperty($parent) + \'%\'}, text: getProperty($parent) + \'%\'"></div></div>'}
                                                          ]
                                            }; 
        //----------------------------------------------------------------------
        //Migration Status - Very Large Table
            self.migJobStatusVLT = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
            if (!data) return;
                var urlFormigJobStatusVLT;
                urlFormigJobStatusVLT = "rest/data/sql/migrationJobStatusVeryLargeTables?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlFormigJobStatusVLT);
                $.ajax({
                   async    : true,
                   //url      : "js/mock/migration/migrationJobStatusVeryLargeTables.json",
                   url      : urlFormigJobStatusVLT,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                        var migStatVLT = [];
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migStatVLT.push({hostname: item.HOSTNAME, 
                                              job_description: item.JOB_DESCRIPTION,
                                              jobtype: item.JOBTYPE,
					      pkgdone: item.PKGDONE,
					      totalpkgs: item.TOTALPKGS,
					      pct: item.PERCENTAGE
                                             }); 
                         });
                        self.migJobStatusVLT(migStatVLT);
                    }
                });
            });
            self.gridOmigJobStatusVLT = { data: self.migJobStatusVLT,
                                          enablePaging: false,
                                          showFilter: false,
                                          columnDefs: [{field: 'hostname', displayName: 'Hostname'},
                                                       {field: 'job_description', displayName: 'Job Description'},
                                                       {field: 'jobtype', displayName: 'Job Type'},
                                                       {field: 'pkgdone', displayName: 'Pkg Done'},
                                                       {field: 'totalpkgs', displayName: 'Total Pkgs'},
                                                       {field: 'pct', displayName: 'Percentage', width: 200, cellTemplate:'<div class="progress progress-striped" style="margin:5px; background-color:#f0ad4e">' +
                                                    '<div class="progress-bar" role="progressbar"' +
                                                    'data-bind="attr: {style: \'width:\' + getProperty($parent) + \'%\'}, text: getProperty($parent) + \'%\'"></div></div>'}
                                                      ]
                                        };
        //----------------Migration Run Accordian-------------------------------
        //-----------------------Pre Migration Tasks----------------------------
            self.PreMigTaskSerVal = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
            if (!data) return;
                var PreMigTaskSer = [];
                var urlForPreMigTaskSerVal;
                urlForPreMigTaskSerVal = "rest/data/sql/preMigrationTasks?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForPreMigTaskSerVal);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/preMigrationTasks.json",
                    url      : urlForPreMigTaskSerVal,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                PreMigTaskSer.push({phase_name: item.PHASE_NAME, 
                                                    value: item.VALUE,
                                                    description: item.DESCRIPTION
                                                   });
                            });
                            self.PreMigTaskSerVal(PreMigTaskSer);
                    },
                    error: function(jqXHR, textStatus, errorThrown) { 
                            alert("Error loading preMigrationTasks!");                            
                    }
                });
            });
            self.gOPreMigTaskSerVal = { data: self.PreMigTaskSerVal,
                                        enablePaging: false,
                                        showFilter: false,
                                        columnDefs: [{field: 'phase_name', displayName: 'Phase Name'},
                                                     {field: 'value', displayName: 'Value'},
                                                     {field: 'description', displayName: 'Description'}]
                                      }; 
        //-------------------------Migration Tasks------------------------------
            self.MigTaskSerVal = ko.observableArray();
            self.MigTimeSerVal = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
            if (!data) return;
                var MigTaskSer = [];
                var MigTimeSer = [];
                var urlForMigTaskSerVal;
                urlForMigTaskSerVal = "rest/data/sql/migrationTasks?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForMigTaskSerVal);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/migrationsTasks.json",
                    url      : urlForMigTaskSerVal,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             console.log("...The Phase Name is: "+data[idx].PHASE_NAME);
                             if (data && data[idx].PHASE_NAME == "Migration time")
                                 MigTimeSer.push({phase_name: item.PHASE_NAME, 
                                                  value: item.DURATION,
                                                  description: item.DESCRIPTION
                                                 });
                             
                             if (data && data[idx].PHASE_NAME != "Migration time")
                                 MigTaskSer.push({phase_name: item.PHASE_NAME, 
                                                  value: item.DURATION,
                                                  description: item.DESCRIPTION
                                                 });
                         });
                         
                         console.log("...The MigTimeSer is "+MigTimeSer[0].phase_name);
                         self.MigTaskSerVal(MigTaskSer);
                         self.MigTimeSerVal(MigTimeSer);
                    },
                    error: function(jqXHR, textStatus, errorThrown) { 
                            alert("Error loading migrationsTasks!");                            
                    }
                });
            });
            self.gOMigTasks = {data: self.MigTaskSerVal,
                               enablePaging: true,
                               showFilter: false,
                               columnDefs: [{field: 'phase_name', displayName: 'Phase Name'},
                                            {field: 'value', displayName: 'Value'},
                                            {field: 'description', displayName: 'Description'}]
                              };
        //--------------Table Migration Status Validation-----------------------
            self.tblMigStatusVal = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var  urlFortblMigStatusVal;
                urlFortblMigStatusVal = "rest/data/sql/tableMigrationStatusValidation?engagement_id="+self.engagement_Id()+"&scenario_id="+self.scenarioId();
                console.log("The url is: "+urlFortblMigStatusVal);
                $.ajax({
                        async    : true,
                        url      : "js/mock/migration/tableMigrationStatusValidation.json",
                        //url      : urlFortblMigStatusVal,
                        datatype : "json" ,
                        contentType: "application/json; charset=utf-8",
                        success  : function(data, textStatus, jqXHR) {
                            var tblMigStatusSer = [];
                            // Loop through the items
                            $.each(data, function(idx, item) {
                                tblMigStatusSer.push({database_name: item.DATABASE_NAME, 
                                                      migration_started: item.MIGRATION_STARTED,
                                                      text: item.TEST,
                                                      tables_cnt: item.TABLES_CNT,
                                                      tables_pct: item.TABLES_PCT
                                                    });
                            });
                        self.tblMigStatusVal(tblMigStatusSer);
                        }
                });
            });
            self.gOtblMigStatus = {data: self.tblMigStatusVal,
                                   enablePaging: false,
                                   showFilter: false,
                                   columnDefs: [{field: 'database_name', displayName: 'Database Name'},
                                                {field: 'migration_started', displayName: 'Started On'},
                                                {field: 'text', displayName: 'Text'},
                                                {field: 'tables_cnt', displayName: 'Tables Count'},
                                                {field: 'tables_pct', displayName: '% Completed', width: 200, cellTemplate:'<div class="progress progress-striped" style="margin:5px; background-color:#f0ad4e">' +
                                                    '<div class="progress-bar" role="progressbar"' +
                                                    'data-bind="attr: {style: \'width:\' + getProperty($parent) + \'%\'}, text: getProperty($parent) + \'%\'"></div></div>'
                                                }]
                                  }; 
                                 
        //--------------------Incomplete Migrated Tables------------------------
            self.incomplMigTbls = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlForIncomplMigTbls;
                urlForIncomplMigTbls = "rest/data/sql/incompleteMigratedTables?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+ urlForIncomplMigTbls);
                $.ajax({
                   async    : true,
                   //url      : "js/mock/migration/incompleteMigratedTables.json",
                   url      : urlForIncomplMigTbls,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                        var incomplMigTblsSer = [];
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             incomplMigTblsSer.push({table_name_diff: item.TABLE_NAME, 
                                                     owner_target: item.SOURCE_SYSTEM_OWNER,
                                                     row_count_src: item.ROW_CNT_SRC,
                                                     row_count_trg: item.ROW_CNT_TRG,
                                                     nr_diff: item.DIFFERENCE
                                                    });
                         });
                         self.incomplMigTbls(incomplMigTblsSer);
                    }
                });
            });
            self.gOincomplMigTbls = { data: self.incomplMigTbls,
                                      enablePaging: true,
                                      showFilter: true,
                                      columnDefs: [{field: 'table_name_diff', displayName: 'Table Name'},
                                                   {field: 'owner_target', displayName: 'Owner (Target)'},
                                                   {field: 'row_count_src', displayName: 'Row Count (Source)'},
                                                   {field: 'row_count_trg', displayName: 'Row Count (Target)'},
                                                   {field: 'nr_diff', displayName: 'Difference'}
                                                  ]
                                    };
        //--------------------Migrated Objects by Type--------------------------
            self.migObjstatusVal = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
                if (!data) return;
                var urlFormigObjbyType;
                urlFormigObjbyType = "rest/data/sql/migObjectsByType?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlFormigObjbyType);
                $.ajax({
                   async    : true,
                   //url      : "js/mock/migration/migratedObjectsStatus.json",
                   url      : urlFormigObjbyType,
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                        var migObjStatusSer = [];
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migObjStatusSer.push({object_type: item.OBJECT_TYPE, 
                                                   total_objects_src: item.TOTAL_OBJECTS_SRC,
                                                   total_objects_trg: item.TOTAL_OBJECTS_TRG,
                                                   nr_diff: item.NR_DIFF
                                                  });
                        });
                        self.migObjstatusVal(migObjStatusSer);
                   }
                
                });
            });
            self.gOmigObjstatusVal = { data: self.migObjstatusVal,
                                       enablePaging: false,
                                       showFilter: false,
                                       columnDefs: [{field: 'object_type', displayName: 'Object Type'},
                                                    {field: 'total_objects_src', displayName: 'Total Objects (Source)'},
                                                    {field: 'total_objects_trg', displayName: 'Total Objects (Target)'},
                                                    {field: 'nr_diff', displayName: 'Difference'}
                                                   ]
                                     };
        //-------------------Missing Objects on Target--------------------------
            self.migObjOnTrgVal = ko.observableArray();
            self.pkgRunId.subscribe(function(data) {
            if (!data) return;
                var urlForMisObjOnTrgVal;
                urlForMisObjOnTrgVal = "rest/data/sql/missingObjectsOnTarget?scenario_id="+self.scenarioId()+"&pkg_run_id="+data+"&engagement_id="+self.engagement_Id();
                console.log("The url is: "+urlForMisObjOnTrgVal);
                $.ajax({
                    async    : true,
                    //url      : "js/mock/migration/missingObjectsOnTarget.json",
                    url      : urlForMisObjOnTrgVal,
                    datatype : "json" ,
                    contentType: "application/json; charset=utf-8",
                    success  : function(data, textStatus, jqXHR) {
                        var migObjOnTrg = [];
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migObjOnTrg.push({owner_target: item.OWNER_TARGET, 
                                               object_name: item.OBJECT_NAME,
                                               object_type: item.OBJECT_TYPE
                                              });
                         });
                         
                         self.migObjOnTrgVal(migObjOnTrg); 
                    },
                    error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading missingObjectsOnTarget!");                            
                    }
                });
            });
            self.gOmigObjOnTrgVal = { data: self.migObjOnTrgVal,
                                      enablePaging: true,
                                      showFilter: true,
                                      columnDefs: [{field: 'owner_target', displayName: 'Owner (Target)'},
                                                   {field: 'object_name', displayName: 'Object Name'},
                                                   {field: 'object_type', displayName: 'Object Type'}
                                                  ]
                                    }; 
        //------------------END OF MIGRATION RUN--------------------------------
        
        //----------------------------------------------------------------------
        //----------------End of migrationService() function--------------------
        };
        
    return new migrationService();
    
    }
);
