define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining analysis viewmodel...");
        
        function analysisViewModel(){
           var self = this;

            self.pRunId = ko.observable();
            self.pRunIds = ko.observableArray([1846, 1847, 1848, 1849]);
            
            self.cType = ko.observable('pie');
            self.cTypes = ko.observableArray(['line','pie','bar']);
            
            self.orientationValue = ko.observable('vertical');
            self.orientationOptions = ko.observableArray(['vertical','horizontal']);
            
            self.stackValue = ko.observable('off');
            self.stackOptions = ko.observableArray(['on','off']);            
            
            self.mySelect = function(event, data){
                console.log("I'm in the select function" );
            };       
        //----------------------tableTransferBreakdown--------------------------                        
           /*
           self.pieData = ko.observableArray([{name: "Estimated space needed for datapump dump files", items: [3553]},
                                              {name: "Tables by bulk export/ import", items: [16570]},
                                              {name: "Tables by separate scripts", items: [209]}]
                                             );
           */                               
           //self.pieGroups = ko.observableArray(["Group A"]);
                  
           //self.pieData  = ko.observableArray();
           //self.pieGroup = ko.observableArray();

           self.pieGroup = ko.observable();           
           self.pieGroup(['Group A']);
           //-------------------------------------------------------------------
            self.pieData  = ko.observable();
            var series  = [];
                $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/tableTransferBreakdown.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series.push({name: item.c3_text, items: [item.c3_value]});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
            self.pieData(series);             
        //------------------------databaseTransferVolumes---------------------------
            /*
            self.dataTrfVol = ko.observableArray([{name: '# Small Tables for Batch Jobs', items: [16750]},
                                                  {name: '# Large Tables for Single Jobs', items: [509]},
                                                  {name: '# Very Large Tables for Multi-Job ', items: [800]}
                                                 ]);
            */
            self.dataTrfVol = ko.observable();
            var series2 = [];
           
               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/dataTransferVolumes.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series2.push({name: item.result_text, items: [item.result_value]});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
               
            self.dataTrfVol(series2);
        //---------------------dataCompressionPercentage------------------------
            /*
            self.dataCompPer = ko.observableArray([{name: 'Compressible Data MB', items: [16750]},
                                                   {name: 'Uncompressible Data MB', items: [20000]}
                                                  ]);
            */
            self.dataCompPer = ko.observable();
            var series3 = [];
               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/dataCompressionPercentage.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series3.push({name: item.result_text, items: [item.result_value]});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
               
              self.dataCompPer(series3);
        //-------------------Data Compression Projection------------------------
            /*
            var migCompP = ko.observable([{t1_label: 'Indexes Compression', t1_size: 0, t1_projected_size_25pct: 0, t1_projected_size_50pct: 0, t1_space_gain: '0GB at 25% to 0GB at 50%'},
                                          {t1_label: 'Tables and Indexes Compression', t1_size: 38834, t1_projected_size_25pct: 29125.5, t1_projected_size_50pct: 19417, t1_space_gain: '9.48GB at 25% to 18.96GB at 50%'}
                                         ]);
            */
            
               //self.migCompProj = ko.observable();
               var series4 = [];
               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/migrationCompressionProjection.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series4.push({t1_label: item.t1_label, t1_size: item.t1_size, t1_projected_size_25pct: item.t1_projected_size_25pct, t1_projected_size_50pct: item.t1_projected_size_50pct, t1_space_gain: item.t1_space_gain});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
            
            //self.migCompProj = new oj.ArrayTableDataSource(series4);
            self.migCompProj = ko.observable(series4);
            self.gOmigCompProj = { data: self.migCompProj,
                                   columnDefs: [{field: 't1_label', displayName: 'Label'},
                                                {field: 't1_size', displayName: 'Size'},
                                                {field: 't1_projected_size_25pct', displayName: 'Projected Size (25%)'},
                                                {field: 't1_projected_size_50pct', displayName: 'Projected Size (50%)'},
                                                {field: 't1_space_gain', displayName: 'Space Gain'}]
                                 };
            
        //--------------------Data Compression Projection2 as Chart-------------
            self.migCompP = ko.observableArray([{name: 'size', items: [0,38834]},
                                         {name: 'projected_size_25pct', items: [0,29125.5]},
                                         {name: 'projected_size_50pct', items: [0,19417]},
                                         {name: 'space_gain', items: ['0GB at 25% to 0GB at 50%','9.48GB at 25% to 18.96GB at 50%']}]);

            self.migCompPGrp = ko.observable();
            self.migCompPGrp = ['Indexes Compression','Tables and Indexes Compression'];
             
        //----------------------Database Options as a Table---------------------

            /*
            var dbOptions = ko.observable([{comp_id: 'AMD', comp_name: 'OLAP Catalog', version: '11.2.0.2.0', status: 'Valid', modified: '05-SEP-2010 06:23:32'},
                                           {comp_id: 'APEX', comp_name: 'Oracle Application Express', version: '3.2.1.00.12', status: 'Valid', modified: '05-SEP-2010 06:23:32'}
                                          ]);
            */
            /* Remove it as it is not required as per the requirements. 11-APR-2014 by AJAIN
            self.databaseOptions = ko.observable();
            var series5 = [];
                                      
               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/databaseOptions.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series5.push({comp_id: item.comp_id, comp_name: item.comp_name, version: item.version, status: item.status, modified: item.modified});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                           
                   }
               });
            
            self.databaseOptions = new oj.ArrayTableDataSource(series5);
            //self.databaseOptions = new oj.PagingArrayTableDataSource(series5);
            //self.pagingDatasource = new oj.PagingArrayTableDataSource(new oj.ArrayArrayTableDataSource(deptArray, {idAttribute: 'DepartmentId'}));
            //self.databaseOptions = new oj.ArrayTableDataSource(dbOptions, {idAttribute: 'comp_id'});
        */
        //-----------------Database Options showing as koGrid-------------------
        /*  Not required for the current phase of go live
        self.dbOption = ko.observableArray([]);
    
        self.filterOptions = {
            filterText: ko.observable(""),
            useExternalFilter: true
        };
  
        self.pagingOptions = {
        pageSizes: ko.observableArray([15, 25, 100]),
        pageSize: ko.observable(15),
        totalServerItems: ko.observable(0),
        currentPage: ko.observable(1)     
        };
  
        self.setPagingData = function(data, page, pageSize){	
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        self.dbOption(pagedData);
        self.pagingOptions.totalServerItems(data.length);
        };
  
        self.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $.getJSON('js/mock/migration/databaseOptions.json', function (largeLoad) {		
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    self.setPagingData(data,page,pageSize);
                });
            } else {
                $.getJSON('js/mock/migration/databaseOptions.json', function (largeLoad) {
	                self.setPagingData(largeLoad,page,pageSize);
                       });
                }  
            }, 100);
        };
  
        self.filterOptions.filterText.subscribe(function (data) {
        self.getPagedDataAsync(self.pagingOptions.pageSize(), self.pagingOptions.currentPage(), self.filterOptions.filterText());
        });   

        self.pagingOptions.pageSizes.subscribe(function (data) {
        self.getPagedDataAsync(self.pagingOptions.pageSize(), self.pagingOptions.currentPage(), self.filterOptions.filterText());
        });
        self.pagingOptions.pageSize.subscribe(function (data) {
        self.getPagedDataAsync(self.pagingOptions.pageSize(), self.pagingOptions.currentPage(), self.filterOptions.filterText());
        });
        self.pagingOptions.totalServerItems.subscribe(function (data) {
        self.getPagedDataAsync(self.pagingOptions.pageSize(), self.pagingOptions.currentPage(), self.filterOptions.filterText());
        });
        self.pagingOptions.currentPage.subscribe(function (data) {
        self.getPagedDataAsync(self.pagingOptions.pageSize(), self.pagingOptions.currentPage(), self.filterOptions.filterText());
        });
  
        self.getPagedDataAsync(self.pagingOptions.pageSize(), self.pagingOptions.currentPage());
    
    
        self.gridOptions = {
            data: self.dbOption,
            enablePaging: true,
            pagingOptions: self.pagingOptions,
            filterOptions: self.filterOptions
        };
        */
        //----------------------Database Transfer Volumes-----------------------
                /*
                var dbTrfVol = ko.observable([{engagement_id: 1450, scenario_id: 1846, package_run_id: '130925_135954', result_text: 'Volume transferred by exp/imp', result_value: 1053},
                                             {engagement_id: 1450, scenario_id: 1846, package_run_id: '130925_135954', result_text: 'Volume transferred in full user export and single table export', result_value: 5214},
                                             {engagement_id: 1450, scenario_id: 1846, package_run_id: '130925_135954', result_text: 'Number of tables transfered with separate scripts', result_value: 209}
                                            ]);
                */
               self.databaseTrfVol = ko.observableArray();
               var dbTVSer = [];
                $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/dataTransferVolumes.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                  dbTVSer.push({engagement_id: item.engagement_id, scenario_id: item.scenario_id, package_run_id: item.package_run_id, result_text: item.result_text, result_value: item.result_value});
                            });
                            self.databaseTrfVol(dbTVSer);
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
             //self.databaseTrfVol = new oj.ArrayTableDataSource(dbTVSer);
             self.gOdatabaseTrfVol = { data: self.databaseTrfVol,
                                       enablePaging: true,
                                       columnDefs: [{field: 'engagement_id', displayName: 'Engagement Id'},
                                                    {field: 'scenario_id', displayName: 'Scenario Id'},
                                                    {field: 'package_run_id', displayName: 'Pkg Run Id'},
                                                    {field: 'result_text', displayName: 'Result Text'},
                                                    {field: 'result_value', displayName: 'Result Value'}]
                                     };
            //self.databaseTrfVol = new oj.ArrayTableDataSource(dbTVSer, {idAttribute: 'result_value'});
            //self.databaseTrfVol = new oj.ArrayTableDataSource(dbTrfVol);
        //----------------------Table Transfer Breakdown -----------------------
                /*
                var dbTrfBkd = ko.observable([{c3_text: 'Estimated space needed for datapump dump files:', c3_value: 3553, val_pct:17.38},
                                          {c3_text: 'Tables by bulk export/ import:', c3_value: 16570, val_pct: 81.04},
                                          {c3_text: 'Tables by separate scripts', c3_value: 209, val_pct: 1.02},
                                          {c3_text: 'Tables by datapump', c3_value: 115, val_pct:0.56}
                                         ]);
                */
                /* Remove it as it is not required as per the requirements. 11-APR-2014 by AJAIN
                self.databaseTrfBkd = ko.observable();
                var tblTrfBkdSer = [];
                $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/tableTransferBreakdown.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                tblTrfBkdSer.push({c3_text: item.c3_text, c3_value: item.c3_value, val_pct: item.val_pct});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
                
                self.databaseTrfBkd = new oj.ArrayTableDataSource(tblTrfBkdSer);
                //self.databaseTrfBkd = new oj.ArrayTableDataSource(dbTrfBkd);
                11-APR-2014 */
        //----------------------Index compression -----------------------
            /*
            var indexC = ko.observable([{scenario_id: 1846, C1_TBLIDX_COMPR_SIZE: 0, TBLIDX_NOCOMPR_SIZE:0, comp_sz_pc:0, nocomp_sz_pc:0},
                                        {scenario_id: 1846, C1_TBLIDX_COMPR_SIZE: 0, TBLIDX_NOCOMPR_SIZE:0, comp_sz_pc:0, nocomp_sz_pc:0}
                                       ]);
            */
           /*
            self.indexComp = ko.observable();
            var indexC = [];
           
                $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/indexCompression.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                               indexC.push({scenario_id: item.scenario_id, C1_TBLIDX_COMPR_SIZE: item.C1_TBLIDX_COMPR_SIZE, TBLIDX_NOCOMPR_SIZE: item.TBLIDX_NOCOMPR_SIZE, comp_sz_pc: item.comp_sz_pc, nocomp_sz_pc: item.nocomp_sz_pc});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
                });
                
            self.indexComp = new oj.ArrayTableDataSource(indexC);
           */
        //----------------------------------------------------------------------
        //--------------Invalid objects by Type------------------------
            self.invalidObjByType = ko.observableArray();
            var invObjser = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/invalidObjectsByType.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             invObjser.push({Object_Type: item.object_type, Total: item.total});
                         });
                         self.invalidObjByType(invObjser);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                         alert("Error loading user list!");                            
                }
            });
            //self.invalidObjByType = new oj.ArrayTableDataSource(invObjser);
            self.gOinvalidObjByType = { data: self.invalidObjByType,
                                        enablePaging: true,
                                        columnDefs: [{field: 'Object_Type', displayName: 'Object Type'},
                                                    {field: 'Total', displayName: 'Total'}]
                                      };
        //------------------------------END-------------------------------------
        
        };
        
    return new analysisViewModel();
    
    }
);
