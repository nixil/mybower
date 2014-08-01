define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomponents', 'ojs/ojtable'],

    function(oj, ko, $) {

        console.log("defining missingObjectsViewModel viewmodel...");
        
        function missingObjectsViewModel(){
           var self = this;

        /* Removed as not required to show - as per the requirements. 11-APR-2014 AJAIN
        //--------------Objects Missing on Source------------------------
            self.missingObjSrcVal = ko.observable();
            var missingObjSrcSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/MissingObjectsOnSource.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             missingObjSrcSer.push({owner_source: item.owner_source, 
                                                    object_name: item.object_name,
                                                    object_type: item.object_type
                                                   });
                         });
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
            self.missingObjSrcVal = new oj.ArrayTableDataSource(missingObjSrcSer);
        11-APR-2014 */
        //--------------Objects Missing on Target------------------------
            self.missingObjTrgVal = ko.observable();
            var missingObjTrgSer = [];
            $.ajax({
                async    : true,
                //'url'      : "http://acs-163.us.oracle.com:8080/apex/tonymig/analysis/tabletransfer/",
                url      : "js/mock/migration/MissingObjectsOnTarget.json",
                datatype : "json" ,
                contentType: "application/json; charset=utf-8",
                success  : function(data, textStatus, jqXHR) {
                        // Loop through the items
                        $.each(data, function(idx, item) {
                             missingObjTrgSer.push({owner_source: item.owner_source, 
                                                    object_name: item.object_name,
                                                    object_type: item.object_type
                                                   });
                         });
                },
                error: function(jqXHR, textStatus, errorThrown) { 
                         alert("Error loading user list!");                            
                }
            });
            self.missingObjTrgVal = new oj.ArrayTableDataSource(missingObjTrgSer);
            //------------------------------------------------------------------
    self.myData = ko.observableArray([]);
    /*
      self.myData = ko.observable([{name: "Moroni", age: 50},
                                   {name: "Tiancum", age: 43},
                                   {name: "Jacob", age: 27},
                                   {name: "Nephi", age: 29},
                                   {name: "Enos", age: 34},
                                   {name: "Abhi", age: 40}
                                  ]);    
    */
    
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
        self.myData(pagedData);
        self.pagingOptions.totalServerItems(data.length);
    };
  
    self.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $.getJSON('js/mock/migration/MissingObjectsOnTarget.json', function (largeLoad) {		
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    self.setPagingData(data,page,pageSize);
                });
            } else {
                $.getJSON('js/mock/migration/MissingObjectsOnTarget.json', function (largeLoad) {
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
        data: self.myData,
        enablePaging: true,
        pagingOptions: self.pagingOptions,
        filterOptions: self.filterOptions
    };  
    
        //----------------------------------------------------------------------
            
        };
        
        return new missingObjectsViewModel();
        
    }
    
);