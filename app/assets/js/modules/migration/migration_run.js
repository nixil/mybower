define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining migrationRunSumViewModel viewmodel...");
        
        function migrationRunSumViewModel(){
           var self = this;
           
           
        //------------------------Row Count Delta-------------------------------
        
        
        
        //-------------------------Table Check----------------------------------
        
        

        //-----------------------Pre Migration Tasks----------------------------
            self.PreMigTaskSerVal = ko.observableArray();
            var PreMigTaskSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/preMigrationTasks.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             PreMigTaskSer.push({phase_name: item.phase_name, 
                                                 value: item.value,
                                                 description: item.description
                                                });
                         });
                         self.PreMigTaskSerVal(PreMigTaskSer);
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
            self.gOPreMigTaskSerVal = { data: self.PreMigTaskSerVal,
                                        enablePaging: true,
                                        columnDefs: [{field: 'phase_name', displayName: 'Phase Name'},
                                                     {field: 'value', displayName: 'Value'},
                                                     {field: 'description', displayName: 'Description'}]
                                      }; 
            //self.preMigTasksVal = new oj.ArrayTableDataSource(PreMigTaskSer);
        //-------------------------Migration Tasks------------------------------
            self.MigTaskSerVal = ko.observableArray();
            var MigTaskSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/migrationsTasks.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             MigTaskSer.push({phase_name: item.phase_name, 
                                              value: item.value,
                                              description: item.description
                                             });
                         });
                         self.MigTaskSerVal(MigTaskSer);
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
            self.gOMigTasks = {data: self.MigTaskSerVal,
                               enablePaging: true,
                               columnDefs: [{field: 'phase_name', displayName: 'Phase Name'},
                                            {field: 'value', displayName: 'Value'},
                                            {field: 'description', displayName: 'Description'}]
                              };
        //--------------Table Migration Status Validation-----------------------
            self.tblMigStatusVal = ko.observableArray();
            var tblMigStatusSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/tableMigrationStatusValidation.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             tblMigStatusSer.push({database_name: item.database_name, 
                                                   migration_started: item.migration_started,
                                                   text: item.text,
                                                   category: item.category,
                                                   tables_cnt: item.tables_cnt,
                                                   tables_pct: item.tables_pct
                                                  });
                         });
                         self.tblMigStatusVal(tblMigStatusSer);
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
            //self.tblMigStatusVal = new oj.ArrayTableDataSource(tblMigStatusSer);
            self.gOtblMigStatus = {data: self.tblMigStatusVal,
                                   enablePaging: true,
                                   columnDefs: [{field: 'database_name', displayName: 'Database Name'},
                                                {field: 'migration_started', displayName: 'Started On'},
                                                {field: 'text', displayName: 'Text'},
                                                {field: 'category', displayName: 'Category'},
                                                {field: 'tables_cnt', displayName: 'Tables Count'},
                                                {field: 'tables_pct', displayName: '% Completed'}
                                               ]
                                  };
            
        //--------------------Incomplete Migrated Tables------------------------
            self.incomplMigTbls = ko.observableArray();
            var incomplMigTblsSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/incompleteMigratedTables.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             incomplMigTblsSer.push({table_name_diff: item.table_name_diff, 
                                                     owner_target: item.owner_target,
                                                     row_count_src: item.row_count_src,
                                                     row_count_trg: item.row_count_trg,
                                                     nr_diff: item.nr_diff
                                                    });
                         });
                         self.incomplMigTbls(incomplMigTblsSer);
                }, 
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
                        
            //self.incomplMigTbls = new oj.ArrayTableDataSource(incomplMigTblsSer);
            self.gOincomplMigTbls = { data: self.incomplMigTbls,
                                      enablePaging: true,
                                      columnDefs: [{field: 'table_name_diff', displayName: 'Table Name'},
                                                   {field: 'owner_target', displayName: 'Owner (Target)'},
                                                   {field: 'row_count_src', displayName: 'Row Count (Source)'},
                                                   {field: 'row_count_trg', displayName: 'Row Count (Target)'},
                                                   {field: 'nr_diff', displayName: 'Difference'}
                                                  ]
                                    };
            
            
        //--------------------Migrated Objects by Type--------------------------
            self.migObjstatusVal = ko.observableArray();
            var migObjStatusSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/migratedObjectsStatus.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migObjStatusSer.push({object_type: item.object_type, 
                                                   total_objects_src: item.total_objects_src,
                                                   total_objects_trg: item.total_objects_src,
                                                   nr_diff: item.nr_diff
                                                  });
                         });
                         self.migObjstatusVal(migObjStatusSer);
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
            //self.migObjstatusVal = new oj.ArrayTableDataSource(migObjStatusSer);
            self.gOmigObjstatusVal = { data: self.migObjstatusVal,
                                       enablePaging: true,
                                       columnDefs: [{field: 'object_type', displayName: 'Object Type'},
                                                    {field: 'total_objects_src', displayName: 'Total Objects (Source)'},
                                                    {field: 'total_objects_trg', displayName: 'Total Objects (Target)'},
                                                    {field: 'nr_diff', displayName: 'Difference'}
                                                   ]
                                     };
        //-------------------Missing Objects on Target--------------------------
            self.migObjOnTrgVal = ko.observableArray();
            var migObjOnTrg = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/missingObjectsOnTarget.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             migObjOnTrg.push({owner_source: item.owner_source, 
                                               object_name: item.object_name,
                                               object_type: item.object_type
                                              });
                         });
                         
                         self.migObjOnTrgVal(migObjOnTrg); 
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading missingObjectsOnTarget!");                            
                }
            });

            self.gOmigObjOnTrgVal = { data: self.migObjOnTrgVal,
                                      enablePaging: true,
                                      columnDefs: [{field: 'owner_source', displayName: 'Owner (Source)'},
                                                   {field: 'object_name', displayName: 'Object Name'},
                                                   {field: 'object_type', displayName: 'Object Type'}
                                                  ]
                                    }; 
        //-------
		        
        //------------------------------------------------------------------
            
            
        };
        
        return new migrationRunSumViewModel();
        
    }
    
);