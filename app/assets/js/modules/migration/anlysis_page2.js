define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining analysisPage2 viewmodel...");
        
        function anlysispage2ViewModel(){
           var self = this;

            self.pieGroup = ko.observable();           
            self.pieGroup(['Group A']);

           //------------24Hour Redo Log Summary--------------------------------
            //self.pieGrp24Hr = ko.observable();
            //self.pieGrp24Hr(['Hour 01','Hour 02','Hour 03','Hour 04','Hour 06','Hour 07','Hour 08','Hour 09','Hour 10','Hour 11','Hour 12','Hour 13','Hour 14','Hour 15','Hour 15','Hour 16','Hour 17','Hour 18','Hour 19','Hour 20','Hour 21','Hour 22','Hour 23','Hour 24']);
            self.redoLogSumm24Hr = ko.observable();
            var series24Hr = [];

               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/24HourRedoLogSummary.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                series24Hr.push({Day: item.day, Hour_01: item.hour_01, Hour_02:item.hour_02, Hour_03:item.hour_03, Hour_04:item.hour_04, Hour_05:item.hour_05, Hour_06:item.hour_06, Hour_07:item.hour_07, Hour_08:item.hour_08, Hour_09:item.hour_09, Hour_10:item.hour_10, Hour_11:item.hour_11, Hour_12:item.hour_12, Hour_13:item.hour_13, Hour_14:item.hour_14, Hour_15:item.hour_15, Hour_16:item.hour_16, Hour_17:item.hour_17, Hour_18:item.hour_18, Hour_19:item.hour_19, Hour_20:item.hour_20, Hour_21:item.hour_21, Hour_22:item.hour_22, Hour_23:item.hour_23, Hour_24:item.hour_24});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
               
            //self.redoLogSumm24Hr(series24Hr);
            self.redoLogSumm24Hr = new oj.ArrayTableDataSource(series24Hr);
                  //-------------2nd option using koGrid----------------
        self.redoLogSum24Hr = ko.observableArray([]);
    
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
        self.redoLogSum24Hr(pagedData);
        self.pagingOptions.totalServerItems(data.length);
        };
  
        self.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $.getJSON('js/mock/migration/24HourRedoLogSummary.json', function (largeLoad) {		
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    self.setPagingData(data,page,pageSize);
                });
            } else {
                $.getJSON('js/mock/migration/24HourRedoLogSummary.json', function (largeLoad) {
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
    
    
        self.gOpt24Hr = {
            data: self.redoLogSum24Hr,
            enablePaging: true,
            pagingOptions: self.pagingOptions,
            filterOptions: self.filterOptions
        };  
        //--------------daily Redo Log Summary----------------------------------
           self.dRedoLogGrp  = ko.observable();
           self.dredoLogSeries = ko.observable();
           var swSeries = [];
           var dcSeries = [];
           var sgroup  = [];
            
               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/dailyRedoSummary.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                //series2.push({name: item.dday, items: [item.switches]});
                                swSeries.push(item.switches);
                                dcSeries.push(item.daily_churn_gb);
                                sgroup.push(item.dday);
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
            
            var series = [  {name: 'Daily Switches', 
                                items: swSeries, 
                                type: 'bar', 
                                color: '#2f7ed8', 
                                displayInLegend: 'on'},
                            {name: 'Daily Churn GB', 
                                items: dcSeries, 
                                type: 'line', 
                                assignedToY2:'on', 
                                color: '#8bbc21', 
                                displayInLegend: 'on'}];
            self.dRedoLogGrp(sgroup);
            self.dredoLogSeries(series);
           //------------weekly Redo Log Summary--------------------------------
           self.wklyRedoLogDGrp  = ko.observable();
           self.wklyRedoLogSeries = ko.observable();
           var wSwSeries = [];
           var wcSeries = [];
           var wgroup  = [];

               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/weeklyRedoSummary.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                //series2.push({name: item.dday, items: [item.switches]});
                                wSwSeries.push(item.switches);
                                wcSeries.push(item.weekly_churn_gb);
                                wgroup.push(item.week);
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
            
            var series = [  {name: 'Weekly Switches', 
                                items: wSwSeries, 
                                type: 'bar', 
                                color: '#2f7ed8', 
                                displayInLegend: 'on'},
                            {name: 'Weekly Churn GB', 
                                items: wcSeries, 
                                type: 'line', 
                                assignedToY2:'on', 
                                color: '#8bbc21', 
                                displayInLegend: 'on'}];
            self.wklyRedoLogDGrp(wgroup);
            self.wklyRedoLogSeries(series);
           //---------------------segmentDataTypeSizesDb------------------------
            self.dtSizesdb  = ko.observable();
            var dtSizesdbseries  = [];           

               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/segmentDataTypeSizesDb.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                dtSizesdbseries.push({name: item.segment_type, items: [item.segment_size_gb]});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
               
            self.dtSizesdb(dtSizesdbseries);             
        //------------------------segmentDataTypeSizesOwner---------------------
            self.pieGroupForDtSizeO = ko.observable();           
            self.pieGroupForDtSizeO(['ORDDATA','PM','SANDBOX','SH']);
            self.dtSizesOwner  = ko.observableArray([{name: 'NESTED TABLE', items: [0.000122,0.000061, , ]},
                                                     {name: 'LOBINDEX', items: [0.00036, 0.00103, 0.000061, 0.000122]},
                                                     {name: 'LOBSEGMENT', items: [0.0028, 0.0104, 0.00006, 0.000122]},
                                                     {name: 'TABLE', items: [0.00347, 0.000183, 0.001037, 0.0175]},
                                                     {name: 'INDEX', items: [0.00646, 0.000244, 0.00146, 0.00231]}
                                                    ]);
            //self.dtSizesOwner  = ko.observable();
            //var dtSizesOwnerseries  = [];
            //var n  = [];
            //var s1 = [];
            //var s2 = [];
            //var s3 = [];
            //var s4 = [];
            
            /*
               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/segmentDataTypeSizesOwner",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                if 
                                //dtSizesOwnerseries.push({name: item.segment_type, items: [item.segment_size_gb]});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");
                   }
               });
               
            self.dtSizesOwner(dtSizesOwnerseries);
            
            */
        //----------------------------------------------------------------------
        //-------------Table Unsupported Data Type for Golden Gate -------------
        var uDtGg = ko.observable([{"owner":"IX","table_name":"STREAMS_QUEUE_TABLE","column_name":"USER_DATA","data_type":"ANYDATA"},
                                   {"owner":"IX","table_name":"AQ$_STREAMS_QUEUE_TABLE_F","column_name":"ROW_ID","data_type":"ROWID"},
                                   {"owner":"IX","table_name":"AQ$_ORDERS_QUEUETABLE_H","column_name":"HINT","data_type":"ROWID"},
                                   {"owner":"IX","table_name":"AQ$_ORDERS_QUEUETABLE_I","column_name":"HINT","data_type":"ROWID"},
                                   {"owner":"IX","table_name":"AQ$_STREAMS_QUEUE_TABLE_H","column_name":"HINT","data_type":"ROWID"},
                                   {"owner":"IX","table_name":"AQ$_STREAMS_QUEUE_TABLE_I","column_name":"HINT","data_type":"ROWID"},
                                   {"owner":"IX","table_name":"AQ$STREAMS_QUEUE_TABLE","column_name":"USER_DATA","data_type":"ANYDATA"},
                                   {"owner":"IX","table_name":"ORDERS_QUEUETABLE","column_name":"USER_PROP","data_type":"ANYDATA"},
                                   {"owner":"IX","table_name":"AQ$_STREAMS_QUEUE_TABLE_F","column_name":"USER_DATA","data_type":"ANYDATA"},
                                   {"owner":"IX","table_name":"AQ$_ORDERS_QUEUETABLE_F","column_name":"ROW_ID","data_type":"ROWID"},
                                   {"owner":"IX","table_name":"AQ$_ORDERS_QUEUETABLE_F","column_name":"USER_PROP","data_type":"ANYDATA"},
                                   {"owner":"IX","table_name":"STREAMS_QUEUE_TABLE","column_name":"USER_PROP","data_type":"ANYDATA"},
                                   {"owner":"IX","table_name":"AQ$_STREAMS_QUEUE_TABLE_F","column_name":"USER_PROP","data_type":"ANYDATA"},
                                   {"owner":"OE","table_name":"PRODUCT_INFORMATION","column_name":"WARRANTY_PERIOD","data_type":"INTERVAL YEAR(2) TO MONTH"},
                                   {"owner":"OE","table_name":"OC_PRODUCT_INFORMATION","column_name":"WARRANTY_PERIOD","data_type":"INTERVAL YEAR(2) TO MONTH"},
                                   {"owner":"OE","table_name":"PRODUCTS","column_name":"WARRANTY_PERIOD","data_type":"INTERVAL YEAR(2) TO MONTH"},
                                   {"owner":"PM","table_name":"PRINT_MEDIA","column_name":"AD_GRAPHIC","data_type":"BFILE"},
                                   {"owner":"SH","table_name":"DR$SUP_TEXT_IDX$K","column_name":"TEXTKEY","data_type":"ROWID"},
                                   {"owner":"SH","table_name":"DIMENSION_EXCEPTIONS","column_name":"BAD_ROWID","data_type":"ROWID"}
                                  ]);
                                               
        self.UnsupportedDtGg = new oj.ArrayTableDataSource(uDtGg);
        
        
        //Source System Tablespace Stats
        var srcTblSpcStats = ko.observable([{"tablespace_name":"APEX_2206622315876821","cur_use_mb":4,"cur_sz_mb":10,"cur_pct_full":37,"free_space_mb":96,"max_sz_mb":100,"pct_full":4},
                                      {"tablespace_name":"SYSAUX","cur_use_mb":669,"cur_sz_mb":710,"cur_pct_full":94,"free_space_mb":32099,"max_sz_mb":32768,"pct_full":2},
                                      {"tablespace_name":"UNDOTBS1","cur_use_mb":13,"cur_sz_mb":255,"cur_pct_full":5,"free_space_mb":32755,"max_sz_mb":32768,"pct_full":0},
                                      {"tablespace_name":"ACSCLOUD","cur_use_mb":54,"cur_sz_mb":1000,"cur_pct_full":5,"free_space_mb":32714,"max_sz_mb":32768,"pct_full":0},
                                      {"tablespace_name":"USERS","cur_use_mb":4,"cur_sz_mb":5,"cur_pct_full":81,"free_space_mb":32764,"max_sz_mb":32768,"pct_full":0},
                                      {"tablespace_name":"EXAMPLE","cur_use_mb":310,"cur_sz_mb":346,"cur_pct_full":90,"free_space_mb":32458,"max_sz_mb":32768,"pct_full":1},
                                      {"tablespace_name":"SYSTEM","cur_use_mb":749,"cur_sz_mb":820,"cur_pct_full":91,"free_space_mb":32019,"max_sz_mb":32768,"pct_full":2},
                                      {"tablespace_name":"APEX423","cur_use_mb":230,"cur_sz_mb":1000,"cur_pct_full":23,"free_space_mb":32538,"max_sz_mb":32768,"pct_full":1},
                                      {"tablespace_name":"LOB_STORE","cur_use_mb":1,"cur_sz_mb":1000,"cur_pct_full":0,"free_space_mb":32767,"max_sz_mb":32768,"pct_full":0}
                                     ]);
                                               
        self.sourceTblSpcStats = new oj.ArrayTableDataSource(srcTblSpcStats);
        
                  //-------2nd option of using koGrid--------
        self.unSupDtGg = ko.observableArray([]);
    
        self.fillOptions = {
            filterText: ko.observable(""),
            useExternalFilter: true
        };
  
        self.pgOptions = {
        pageSizes: ko.observableArray([15, 25, 100]),
        pageSize: ko.observable(15),
        totalServerItems: ko.observable(0),
        currentPage: ko.observable(1)     
        };
  
        self.setPgData = function(data, page, pageSize){	
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        self.unSupDtGg(pagedData);
        self.pgOptions.totalServerItems(data.length);
        };
  
        self.getPagedDataAsynch = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $.getJSON('js/mock/migration/unSupportedDataTypeGG.json', function (largeLoad) {		
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    self.setPgData(data,page,pageSize);
                });
            } else {
                $.getJSON('js/mock/migration/unSupportedDataTypeGG.json', function (largeLoad) {
	                self.setPgData(largeLoad,page,pageSize);
                       });
                }  
            }, 100);
        };
  
        self.fillOptions.filterText.subscribe(function (data) {
        self.getPagedDataAsynch(self.pgOptions.pageSize(), self.pgOptions.currentPage(), self.fillOptions.filterText());
        });   

        self.pgOptions.pageSizes.subscribe(function (data) {
        self.getPagedDataAsynch(self.pgOptions.pageSize(), self.pgOptions.currentPage(), self.fillOptions.filterText());
        });
        self.pgOptions.pageSize.subscribe(function (data) {
        self.getPagedDataAsynch(self.pgOptions.pageSize(), self.pgOptions.currentPage(), self.fillOptions.filterText());
        });
        self.pgOptions.totalServerItems.subscribe(function (data) {
        self.getPagedDataAsynch(self.pgOptions.pageSize(), self.pgOptions.currentPage(), self.fillOptions.filterText());
        });
        self.pgOptions.currentPage.subscribe(function (data) {
        self.getPagedDataAsynch(self.pgOptions.pageSize(), self.pgOptions.currentPage(), self.fillOptions.filterText());
        });
  
        self.getPagedDataAsynch(self.pgOptions.pageSize(), self.pgOptions.currentPage());
    
    
        self.gridOptUnSupDtGg = {
            data: self.unSupDtGg,
            enablePaging: true,
            pagingOptions: self.pgOptions,
            filterOptions: self.fillOptions
        }; 
        
        //----------------------------------------------------------------------
            //Source System Database Size Stats
            self.dbSizeStats  = ko.observable();
            var dbseries  = [];           

               $.ajax({
                   async    : true,
                   //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                   url      : "js/mock/migration/sourceSystemDatabaseSizeStats.json",
                   datatype : "json" ,
                   contentType: "application/json; charset=utf-8",
                   success  : function(data, textStatus, jqXHR) {
                           // Loop through the items
                           $.each(data, function(idx, item) {
                                dbseries.push({name: item.col_heading, items: [item.value]});
                            });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                            alert("Error loading user list!");                            
                   }
               });
               
            self.dbSizeStats(dbseries); 
        //----------------------------------------------------------------------
            

        };
        
        return new anlysispage2ViewModel();
    }
          
);