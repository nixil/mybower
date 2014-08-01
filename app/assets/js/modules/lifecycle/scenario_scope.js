define(['jquery', 'knockout', 'modules/lifecycle/lifecycleServiceUtil', 'modules/common/user-validation', 'modules/common/dialog-utils'],
        function($, ko, util, user_validation, dialog) {

            console.log("defining scenario scope View Module ...");
            ko.validation.init();
            function ScenarioScopeViewModel() {

                var self = this;

                self.hasPrivilege = user_validation.hasPrivilege;
                self.scenarioId;     //added by AJAIN.
                self.engagement_Id;
                self.service_Id;
                self.engagement_name;

                self.srcList = ko.observableArray([]);
                self.destList = ko.observableArray([]);
                self.phantomAllList = ko.observableArray([]);
                self.scopedFullList = [];
                self.srcSelectList = ko.observableArray([]);
                self.scopedSrcList = ko.observableArray(null);
                self.destSelectList = ko.observableArray([]);
                self.scopedDestList = ko.observableArray(null);
                self.scenarioList = ko.observableArray(null);
                self.scenarioParams = ko.observableArray([]);
                self.target_list = [];
                self.phantom_target_list = [];
                self.scoped_list;
                self.propList = [];
                self.phantomPropLst = [];
                self.phantomSelectList = ko.observableArray([]);
                self.phantomTargetList = ko.observableArray([]);
                self.conformationFlg = ko.observable(false);
                self.adminFlg = ko.observable(true);
                self.phantomFlg = ko.observable(false);
                self.phantomHideFlg = ko.observable(true);
                self.multiSelectFlg = ko.observable(false);
                self.srcEnable = ko.observable(true);
                self.destEnable = ko.observable(true);
                self.engagementInst = ko.observable();
                      //-----added by AJAIN on 13-JUN-14
                self.pkgRunId = ko.observable();
                self.pkgRunIds = ko.observableArray();
                self.pieGroup = ko.observable(['Group A']);
                self.tblTrfMthd = ko.observable();
                self.dataTrfVol = ko.observable();
                self.dataCompPer = ko.observable();
                self.migCompProj = ko.observableArray();
                self.invaldObjByOwn = ko.observableArray();
                self.invalidObjByType = ko.observableArray();
                self.pGSizeofDataMig = ko.observable();
                self.pDSizeofDataMig = ko.observable();
                self.pGDataThroughput = ko.observable();
                self.pDDataThroughput = ko.observable();
                self.migJobStatusVLTNI = ko.observableArray();
                self.migJobStatusVLT = ko.observableArray();
                self.PreMigTaskSerVal = ko.observableArray();
                self.MigTaskSerVal = ko.observableArray();
                self.MigTimeSerVal = ko.observableArray();
                self.tblMigStatusVal = ko.observableArray();
                self.incomplMigTbls = ko.observableArray();
                self.migObjstatusVal = ko.observableArray();
                self.migObjOnTrgVal = ko.observableArray();
                self.showMigTime = ko.observable();
                //-----end of above global var dec. AJAIN

                function targetRow()
                {
                    var row = {
                        ID: null,
                        TARGET: null,
                        SCOPE: null,
                        PINNED_DESTN_GUID: ko.observable(null),
                        //  PINNED_DESTN_GUID: null,
                        /*placed TARGET_NAME here as it couldn`t pick this value from TARGET object when we use in select cell template*/
                        TARGET_NAME: null

                    }
                    return row;
                }


//-----------------------------------------Declaration for Mapping---------------------------------------------------------------
                self.mappedDestn = ko.observable();
                self.selectedDestn = ko.observable();
                self.mappingDestnList = ko.observableArray([]);

                self.map_list = [];
                self.mapPropList = [];
                self.destnDetailList = ko.observableArray([]);
                self.mappingList = ko.observableArray([]);
                self.phantomMapList = ko.observableArray([]);

                self.gridDestnDetailOptions = {
                    data: self.destnDetailList,
                    showFilter: false,
                    enablePaging: false,
                    canSelectRows: false,
                    displaySelectionCheckbox: false,
                    fixedViewPortHeight: false,
                    columnDefs: [{field: 'TARGET_NAME', displayName: 'Target Name'}, {field: 'TYPE_DISPLAY_NAME', displayName: 'Target Type'},
                        {field: 'LIFECYCLE_STATUS', displayName: 'Lifecycle'}, {field: 'LOCATION', displayName: 'Location'},
                        {field: 'LINE_OF_BUSINESS', displayName: 'Line Of Business'}]};

                self.gridPhantomMappingOptions = {
                    data: self.phantomMapList,
                    showFilter: false,
                    enablePaging: false,
                    canSelectRows: false,
                    displaySelectionCheckbox: false,
                    fixedViewPortHeight: false,
                    columnDefs: [
                        {field: 'TARGET_NAME', displayName: 'Phantom Name'},
                        {field: 'TARGET_TYPE', displayName: 'Phantom Type'},
                        {field: 'SYSTEM_CONFIG', displayName: 'Description'}
                    ]};

                self.gridMappingOptions = {
                    data: self.mappingList,
                    showFilter: false,
                    enablePaging: false,
                    canSelectRows: false,
                    displaySelectionCheckbox: false,
                    fixedViewPortHeight: false,
                    columnDefs: [{field: 'TARGET.OPERATING_SYSTEM', displayName: 'System'}, {field: 'TARGET.TARGET_NAME', displayName: 'Target Name'},
                        {field: 'TARGET.TYPE_DISPLAY_NAME', displayName: 'Target Type'}, {field: 'TARGET.LIFECYCLE_STATUS', displayName: 'Lifecycle'},
                        {field: 'TARGET.LOCATION', displayName: 'Location'}, {field: 'TARGET.LINE_OF_BUSINESS', displayName: 'Line Of Busines'},
                        {field: 'PINNED_DESTN_GUID', cellTemplate: '<select data-bind="options: $userViewModel.mappingDestnList,\n\
                                        optionsText: \'TARGET_NAME\' ,optionsValue:\'TARGET_GUID\',\n\
                                        value: $parent.entity[$data.field]"> </select> ',
                            displayName: 'Action'}]};

//-------------------------------------End of decalaration for Mapping---------------------------------------------------------------                

                self.gridSrcOptions = {
                    data: self.scopedSrcList,
                    showFilter: false,
                    enablePaging: false,
                    canSelectRows: false,
                    fixedViewPortHeight: false,
                    displaySelectionCheckbox: false,
                    selectWithCheckboxOnly: true,
                    columnDefs: [{field: 'OPERATING_SYSTEM', displayName: 'System'}, {field: 'TARGET_NAME', displayName: 'Target Name'},
                        {field: 'TYPE_DISPLAY_NAME', displayName: 'Target Type'}, {field: 'LIFECYCLE_STATUS', displayName: 'Lifecycle'},
                        {field: 'LOCATION', displayName: 'Location'}, {field: 'LINE_OF_BUSINESS', displayName: 'Line Of Business'},
                        {cellTemplate: '<a data-bind="visible: $userViewModel.adminFlg,click: function() { $userViewModel.deleteSrc($parent.entity); }">\n\
                                        <i class="fa fa-trash-o"></i>Delete</a>', displayName: 'Action'}]};

                self.gridDestnOptions = {
                    data: self.scopedDestList,
                    showFilter: false,
                    enablePaging: false,
                    canSelectRows: false,
                    fixedViewPortHeight: false,
                    displaySelectionCheckbox: false,
                    columnDefs: [{field: 'OPERATING_SYSTEM', displayName: 'System'}, {field: 'TARGET_NAME', displayName: 'Target Name'},
                        {field: 'TYPE_DISPLAY_NAME', displayName: 'Target Type'}, {field: 'LIFECYCLE_STATUS', displayName: 'Lifecycle'},
                        {field: 'LOCATION', displayName: 'Location'}, {field: 'LINE_OF_BUSINESS', displayName: 'Line Of Business'},
                        {cellTemplate: '<a data-bind="visible: $userViewModel.adminFlg,click: function() { $userViewModel.deleteDestn($parent.entity); }">\n\
                                        <i class="fa fa-trash-o"></i>Delete</a>', displayName: 'Action'}]};


                self.gridPhantomOptions = {
                    data: self.phantomTargetList,
                    showFilter: false,
                    enablePaging: false,
                    canSelectRows: false,
                    displaySelectionCheckbox: false,
                    fixedViewPortHeight: false,
                    columnDefs: [
//                        {field: 'PHANTOM_ID', displayName: 'Phantom Name'},
                        {cellTemplate: '<input type="text" data-bind="value: $parent.entity[\'PHANTOM_ID\'],event: { change: $userViewModel.savePrep }" />', displayName: 'Phantom Name'},
                        {field: 'TARGET_TYPE', displayName: 'Phantom Type'},
                        {field: 'SYSTEM_CONFIG', displayName: 'Description'},
                        {cellTemplate: '<a  data-bind="visible: $userViewModel.adminFlg,click: function() { $userViewModel.deletePhantomDestn($parent.entity); }"> \n\
                                        <i class="fa fa-trash-o"></i>Delete</a>', displayName: 'Action'}]};


                self.gridModalPhantomOptions = {
                    data: self.phantomAllList,
                    showFilter: false,
                    enablePaging: true,
                    displaySelectionCheckbox: true,
                    selectedItems: self.phantomSelectList,
                    multiSelect: true,
                    fixedViewPortHeight: false,
                    columnDefs: [{field: 'TARGET_TYPE', displayName: 'Phantom Type'},
                        {field: 'SYSTEM_CONFIG', displayName: 'Description'}]};

                self.gridModalSrcOptions;
                self.gridModalDestnOptions;
//--------------------------------------------------------------------------------------------------------------                                      
                self.setId = function(engagementInstance) {

                    self.engagementInst(engagementInstance);
                    self.service_Id = self.engagementInst().serviceId;
                    self.engagement_Id = self.engagementInst().engagementId;
                    self.engagement_name = self.engagementInst().description;
                    if (self.service_Id == 1) {
                        self.multiSelectFlg(true);
                    }
//                    console.log("the service id is " + self.service_Id + " and select flag " + self.multiSelectFlg());

                    self.gridModalSrcOptions = {
                        data: self.srcList,
                        showFilter: false,
                        enablePaging: true,
                        displaySelectionCheckbox: true,
                        selectedItems: self.srcSelectList,
                        multiSelect: self.multiSelectFlg(),
                        fixedViewPortHeight: false,
                        columnDefs: [{field: 'TARGET_NAME', displayName: 'Target Name'},
                            {field: 'TYPE_DISPLAY_NAME', displayName: 'Target Type'}]
                    };

                    self.gridModalDestnOptions = {
                        data: self.destList,
                        showFilter: false,
                        enablePaging: true,
                        displaySelectionCheckbox: true,
                        selectedItems: self.destSelectList,
                        multiSelect: self.multiSelectFlg(),
                        fixedViewPortHeight: false,
                        columnDefs: [{field: 'TARGET_NAME', displayName: 'Target Name'},
                            {field: 'TYPE_DISPLAY_NAME', displayName: 'Target Type'}]};


                };
//--------------------------------------------------------------------------------------------------------------    

                self.beforeRoutingAction = function(context) {
                    console.log("Getting Engagement Id from service Dashboard...." + self.engagement_Id + " service id " + self.service_Id);
                    self.clearData();
                    self.getScenarioList();
                    self.getTargetList();

                };
//--------------------------------clear data----------------------------------------------------------------------

                self.clearData = function() {
                    self.srcList.removeAll();
                    self.destList.removeAll();
                    self.phantomAllList.removeAll();
                    self.scopedFullList = [];
                    self.srcSelectList.removeAll();
                    self.destSelectList.removeAll();
                    self.scopedSrcList.removeAll();
                    self.scopedDestList.removeAll();
                    self.phantomSelectList.removeAll();
                    self.phantomTargetList.removeAll();
                    self.scenarioList.removeAll();
                    self.conformationFlg(false);
                    self.phantomFlg(false);
                    self.phantomHideFlg(true);
                    self.adminFlg(true);
                    self.phantomPropLst = [];
                    self.multiSelectFlg(false);
                    self.srcEnable(true);
                    self.destEnable(true);
//                    console.log("end of clear data ........");
                };
//------------------------------------------------------------------------------------------------------------------
                self.forceResize = function() {
                    setTimeout(function() {
                        $(window).resize();
                    }, 500);
                };

//---------------------------------------------------------------------------------------------------------------

                self.enablePhantom = function() {
                    self.phantomFlg(true);
                    self.phantomHideFlg(false);
                };
//--------------------------------------------------------------------------------------------------------------
                self.getScenarioList = function() {
                    console.log("Getting Scenario List..");
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/findScenarios",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({"engagementId": self.engagement_Id}),
                        success: function(data, textStatus, jqXHR) {

                            if (user_validation.credential.userType() == 1) {
                                self.scenarioList(JSON.parse(JSON.stringify(data)));
                            } else {

                                ko.utils.arrayForEach(data, function(item) {
                                    self.scenarioParams = item.properties;
                                    $.each(self.scenarioParams, function(idx, property) {
                                        if (property.name != null && property.name == "HIDE_FROM_CUSTOMER") {
                                            if (property.value == "N") {
                                                self.scenarioList.push(item);
                                            }
                                        }
                                    });

                                });
                            }

                            self.scenarioList.sort(function(left, right) {
                                return left.createDate == right.createDate ? 0 : (left.createDate < right.createDate ? -1 : 1)
                            });
                            console.log("Got Scenario List..");
                        }
                    });
                };


//--------------------------------------------------------------------------------------------------------------                               
                self.getTargetList = function() {
                    console.log("Getting Target List..");

                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/sql",
                        dataType: "json", // data type of response
                        data: ko.toJSON({"NAME": "target_list", "serviceId": self.service_Id}),
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            self.target_list = JSON.parse(JSON.stringify(data));
                            self.getScopedTargetList();
                            console.log("Got Target List..")
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log("Error.. Failed to get target list from server.. Fetching from local JSON..")
                            $.getJSON("js/mock/lifecycle/sql/serviceTargets.json", function(data) {
                                self.target_list = JSON.parse(JSON.stringify(data));
                                self.getScopedTargetList();
                            });
                        }

                    });
                };
//--------------------------------------------------------------------------------------------------------------   
                self.getScopedTargetList = function() {
                    console.log("Getting Scoped Target List .............." + self.engagement_Id);
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/getEngagementScoping",
                        dataType: "json", // data type of response
                        data: ko.toJSON({"engagementId": self.engagement_Id}),
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            self.scoped_list = JSON.parse(JSON.stringify(data));
                            if ((self.scoped_list.status !== "New") && (!self.hasPrivilege('Life-Cycle-Edit'))) {
                                self.adminFlg(false);
                            }
                            self.propList = self.scoped_list.properties;
                            self.phantomPropLst = self.getTarget(self.propList, "ENGAGEMENT");
                            if ((self.phantomPropLst.length !== 0) && (self.phantomPropLst[0].value == "PHANTOM") && (self.service_Id == 1)) {
                                self.enablePhantom();
                                self.requestPhantomList();
                            } else {
                                self.analyseJson();
                            }
                        }
                    });
                };
//-------------------------------------------------------------------------------------------------------------- 

                self.requestPhantomList = function() {
//                    console.log("Getting phantom Full Target List .............." + str);

                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/sql",
                        dataType: "json", // data type of response
                        data: ko.toJSON({"NAME": "target_list_phantom", "serviceId": self.service_Id}),
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            self.phantom_target_list = JSON.parse(JSON.stringify(data));
                            self.phantomAllList(self.phantom_target_list);
                            self.analyseJson();
                        }
                    });

                };
//--------------------------------------------------------------------------------------------------------------                 
                self.saveScopedTargetList = function() {
//                    console.log("saving Scoped Target List ..............");
                    $('#modalPreloader').modal('show');
                    $.ajax({
                        type: 'POST',
//                        url: "rest/lifecycle/sql/saveScope",
                        url: "rest/lifecycle/saveEngagementScoping",
                        dataType: "json", // data type of response
                        data: ko.toJSON(self.scoped_list),
                        async: true,
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            console.log("data successfully sent to server after scoping ....................");

                        },
//                        error: function(jqXHR, textStatus, errorThrown) {
//                            console.log("Error in saving scenario scope!");
//                        },
                        complete: function(jqXHR, textStatus) {
                            $('#modalPreloader').modal('hide');
                        }

                    });
                };
//--------------------------------------------------------------------------------------------------------------
                self.updateStatus = function() {
                    $('#modalPreloader').modal('show');
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/updateEngagementStatus",
//                        url: "rest/lifecycle/sql/saveScope",
                        dataType: "json", // data type of response
                        data: ko.toJSON({"engagementId": self.engagement_Id, "status": "Scoped"}),
                        async: true,
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            console.log("successfully updated engagement status to server after scoping ....................");

                            if ((!self.hasPrivilege('Life-Cycle-Edit'))) {
                                self.adminFlg(false);
                            }
                            dialog.notifySuccess('Operation Succeeded', "Successfully scoped data ");
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log("Error in updating engagement status!");
                            dialog.notifyError('Operation Failed', "Error in scoping");
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#modalPreloader').modal('hide');
                        }

                    });
                };
//--------------------------------------------------------------------------------------------------------------   
                self.analyseJson = function() {

                    if (self.propList.length !== 0) {
                        $.each(self.getTarget(self.propList, "SOURCE"), function(idx, item) {
                            var tempList = self.getGuid(self.target_list, item.refId);
                            if (tempList.length !== 0) {
                                self.scopedSrcList.push(tempList[0]);
//                                console.log("Scoped Source Data: " + JSON.stringify(self.scopedSrcList()));
                            }

                        });
                        self.modalDataFilter(self.srcList, self.scopedSrcList, "SOURCE");
                    } else {
                        self.srcList(ko.utils.arrayFilter(self.target_list, function(item) {
                            return item.SCOPE.indexOf("SOURCE") !== -1;
                        }));
                    }

                    if (self.phantomFlg())
                    {
                        var templateId;
                        var hostName = null;
                        var tempList = [];
                        var phantomRow = [];

                        var properties = [];
                        var guidArr = [];
//                        console.log(" the phantom flag :: " + self.phantomFlg());
//                   processing to populate alreay scoped phantom entry
                        if (self.propList.length !== 0) {

                            properties = self.getTarget(self.propList, "DESTINATION");
//                            console.log("destination in  loop -------------" + JSON.stringify(properties));
                            $.each(properties, function(idx, item) {
                                phantomRow = ko.utils.arrayFilter(self.phantomTargetList(), function(phantomItem) {
                                    return phantomItem.TARGET_GUID.indexOf(item.refId) !== -1;
                                });
//                                console.log("phantom row  -------------" + JSON.stringify(phantomRow));
                                if (phantomRow.length == 0) {
                                    guidArr = ko.utils.arrayFilter(properties, function(element) {
                                        return element.refId.indexOf(item.refId) !== -1;
                                    });
//                                    console.log("destination with same guid in  loop -------------" + JSON.stringify(guidArr));
                                    $.each(guidArr, function(idx, guidItem) {
                                        if (guidItem.name == "PHANTOM_SERVER_ID")
                                        {
                                            templateId = guidItem.value;
                                        } else if (guidItem.name == "HOST_NAME")
                                        {
                                            hostName = guidItem.value;
                                        }
                                    });

                                    if (templateId !== null) {

                                        tempList = ko.utils.arrayFilter(self.phantom_target_list, function(item) {
                                            return item.TEMPLATE_ID.indexOf(templateId) !== -1;
                                        });

                                        if (tempList.length !== 0) {
                                            if (hostName == null) {
                                                hostName = tempList[0].PHANTOM_ID;
                                            }
                                            self.phantomTargetList.push(
                                                    {
                                                        SCOPE: tempList[0].SCOPE,
                                                        TEMPLATE_TYPE: tempList[0].TEMPLATE_TYPE,
                                                        SYSTEM_CONFIG: tempList[0].SYSTEM_CONFIG,
                                                        TEMPLATE_ID: tempList[0].TEMPLATE_ID,
                                                        PHANTOM_ID: ko.observable(hostName),
                                                        TARGET_TYPE: tempList[0].TARGET_TYPE,
                                                        TARGET_GUID: item.refId});
                                        }
                                    }
                                }
//                                console.log("the phantom destination target are :::: " + JSON.stringify(self.phantomTargetList()) + " " + self.phantomTargetList().length);
                            });

                        }
                    } else {
                        if (self.propList.length !== 0) {
                            $.each(self.getTarget(self.propList, "DESTINATION"), function(idx, item) {
                                var tempList = self.getGuid(self.target_list, item.refId);
                                if (tempList.length !== 0) {
                                    self.scopedDestList.push(tempList[0]);
//                                    console.log("scoped destn data ---------------- " + JSON.stringify(self.scopedDestList()));
                                }
                            });
                            self.modalDataFilter(self.destList, self.scopedDestList, "DESTINATION");
                        } else {
                            self.destList(ko.utils.arrayFilter(self.target_list, function(item) {
                                return item.SCOPE.indexOf("DESTINATION") !== -1;
                            }));
                        }

                    }
                    self.processBothTargets();

                    self.validateSelection();

                };

//--------------------------------------------------------------------------------------------------------------                  
                self.processBothTargets = function() {

                    var bothLst = ko.utils.arrayFilter(self.target_list, function(item) {
                        return item.SCOPE.indexOf("BOTH") !== -1;
                    });
                    var checkLst;
//                    console.log(" the both targets are ------------- " + JSON.stringify(bothLst));
                    if (self.phantomFlg())
                    {
                        $.each(bothLst, function(idx, item) {
                            self.srcList.push(item);
                        });

                    } else {

                        if ((self.scopedSrcList().length == 0) && (self.scopedDestList().length == 0)) {
                            $.each(bothLst, function(idx, item) {
                                self.srcList.push(item);
                                self.destList.push(item);

                            });

                        } else {
                            $.each(bothLst, function(idx, item) {

                                self.scopedFullList = ko.computed(function() {
                                    return self.scopedSrcList().concat(self.scopedDestList());
                                }, this);
                                checkLst = self.getGuid(self.scopedFullList(), item.TARGET_GUID);
                                if (checkLst.length == 0) {
                                    self.srcList.push(item);
                                    self.destList.push(item);
                                }
//                                console.log(" scoped  target  -------------  " + self.getGuid(self.scopedFullList(), item.TARGET_GUID) +" ***** " + checkLst.length);

                            });

                        }
                    }



                };

//--------------------------------------------------------------------------------------------------------------                   
                self.modalDataFilter = function(fullList, filterList, filterStr)
                {
                    var flag = false;
                    var difference = [];

                    fullList(ko.utils.arrayFilter(self.target_list, function(item) {
                        return item.SCOPE.indexOf(filterStr) !== -1;
                    }));

                    if (filterList().length !== 0)
                    {
                        $.each(fullList(), function(idx, item) {
                            flag = false;
                            $.each(filterList(), function(index, el) {

                                if (item.TARGET_GUID == el.TARGET_GUID)
                                {

                                    flag = true;
                                }
                            });
                            if (flag === false)
                            {
                                difference.push(item);
                            }
                        });
//                        console.log(" the difference is  " + JSON.stringify(difference));

                        fullList(JSON.parse(JSON.stringify(difference)));
//                        console.log("  list ------------ " + JSON.stringify( fullList) + " ---- "+  fullList.length);  
                    }
                };
//--------------------------------------------------------------------------------------------------------------           
                self.deleteSrc = function(selectedRow)
                {
//                    console.log("delete src clicked  " + JSON.stringify(selectedRow) + " @@@ " + selectedRow.TARGET_GUID);
                    var tempList = self.scopedSrcList.slice(0);

                    $.each(tempList, function(index, item) {

                        if (item.TARGET_GUID == selectedRow.TARGET_GUID) {
                            self.scopedSrcList.splice(index, 1);
                        }
                    });
                    self.srcList.push(selectedRow);
                    if (selectedRow.SCOPE == "BOTH") {
                        self.destList.push(selectedRow);
                    }
                    self.validateSelection();
                    self.savePrep();
                };
//--------------------------------------------------------------------------------------------------------------                      
                self.addSrcToScope = function() {

                    var tempSelect = self.srcSelectList.slice(0);
                    if (self.srcSelectList() !== null) {
//                        var tempList = self.srcList.slice(0);      
//                        console.log(" temp source list: " + tempList);
                        $.each(tempSelect, function(index, element) {
                            if (element.SCOPE == "BOTH") {

                                var ind = self.destList.indexOf(element);
                                self.destList.splice(ind, 1);
                            }

                            var numIndex = self.srcList.indexOf(element);
                            self.srcList.splice(numIndex, 1);
                            self.scopedSrcList.push(element);

                        });

                    }
                    self.validateSelection();
                    self.savePrep();
                    $('#srcModal').modal('hide');
                };

//-------------------------------------------------------------------------------------------------------------- 

                self.deleteDestn = function(selectedRow)
                {
                    console.log("delete destn clicked   " + selectedRow.TARGET_GUID);

                    var tempList = self.scopedDestList.slice(0);

                    $.each(tempList, function(index, item) {

                        if (item.TARGET_GUID === selectedRow.TARGET_GUID) {
                            self.scopedDestList.splice(index, 1);
                        }
                    });
                    self.destList.push(selectedRow);
                    if (selectedRow.SCOPE == "BOTH") {
                        self.srcList.push(selectedRow);
                    }
                    self.validateSelection();
                    self.savePrep();
                };

//--------------------------------------------------------------------------------------------------------------    

                self.addDestnToScope = function() {

                    var tempSelect = self.destSelectList.slice(0);
                    if (self.destSelectList() !== null) {

//                        var tempList = self.destList.slice(0);
//                        console.log(" temp source list: " + tempList);
                        $.each(tempSelect, function(index, element) {

                            if (element.SCOPE == "BOTH") {

                                var ind = self.srcList.indexOf(element);
                                self.srcList.splice(ind, 1);
                            }

                            var numIndex = self.destList.indexOf(element);
                            self.destList.splice(numIndex, 1);
                            self.scopedDestList.push(element);
                        });

                    }
                    self.validateSelection();
                    self.savePrep();
                    $('#destnModal').modal('hide');
                };

//--------------------------------------------------------------------------------------------------------------        

                self.deletePhantomDestn = function(selectedRow) {
                    console.log("delete phantom destn clicked  " + selectedRow.TARGET_GUID);

                    var tempList = self.phantomTargetList();
                    $.each(tempList, function(index, item) {
                        if (item.TARGET_GUID === selectedRow.TARGET_GUID) {
                            self.phantomTargetList.splice(index, 1);
                        }
                    });
                    self.validateSelection();
                    self.savePrep();
                };

//--------------------------------------------------------------------------------------------------------------  

                self.addPhantomDestnToScope = function() {


                    if (self.phantomSelectList() !== null) {

                        var guid;
                        $.each(self.phantomSelectList(), function(index, element) {

                            guid = util.getNewHexId();
                            self.phantomTargetList.push(
                                    {
                                        SCOPE: element.SCOPE,
                                        TEMPLATE_TYPE: element.TEMPLATE_TYPE,
                                        SYSTEM_CONFIG: element.SYSTEM_CONFIG,
                                        TEMPLATE_ID: element.TEMPLATE_ID,
                                        PHANTOM_ID: ko.observable(element.PHANTOM_ID),
                                        TARGET_TYPE: element.TARGET_TYPE,
                                        TARGET_GUID: guid});
                        });

                    }
                    self.validateSelection();
                    self.savePrep();
                    $('#phantomModal').modal('hide');
                };
//-------------------------------------------------------------------------------------------------------------- 
                self.validateSelection = function() {
                    if (self.service_Id == 3)
                    {
                        if ((self.scopedSrcList().length >= 1))
                        {
                            self.conformationFlg(true);
                        } else {
                            self.conformationFlg(false);
                        }
                    } else
                    {
                        if ((self.scopedSrcList().length >= 1) && ((self.scopedDestList().length >= 1) || (self.phantomTargetList().length >= 1)))
                        {
                            self.conformationFlg(true);
                        } else
                        {
                            self.conformationFlg(false);
                        }
                    }
                    if ((self.service_Id != 1) && (self.scopedSrcList().length >= 1)) {
                        self.srcEnable(false);
                    } else {
                        self.srcEnable(true);
                    }
                    if ((self.service_Id != 1) && (self.scopedDestList().length >= 1)) {
                        self.destEnable(false);
                    } else {
                        self.destEnable(true);
                    }

                };
//--------------------------------------------------------------------------------------------------------------  

                self.saveOnConfirm = function() {

                    if (self.service_Id == 1) {
                        $('#consoltab a[href="#mapping"]').tab('show');
                        self.mapIntialize();
                    } else {

                        self.updateStatus();
                    }
                };
//--------------------------------------------------------------------------------------------------------------            
                self.savePrep = function() {

                    var propArr = [];
                    if (self.phantomFlg()) {
                        if ((self.scopedSrcList().length >= 1) || (self.phantomTargetList().length >= 1)) {
                            $.each(self.scopedSrcList(), function(idx, item) {
//                                console.log(" scopedSrcList : the list has :::: " + ko.toJSON(item));
                                propArr.push(ko.toJS({"engagementId": self.scoped_list.engagementId,
                                    "scope": "SOURCE",
                                    "name": "HOST_GUID",
                                    "value": item.HOST_GUID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                            });
                            $.each(self.phantomTargetList(), function(idx, item) {
//                                console.log(" phantomTargetList :the list has :::: " + ko.toJSON(item));
                                propArr.push(ko.toJS({"engagementId": self.scoped_list.engagementId,
                                    "scope": "DESTINATION",
                                    "name": "PHANTOM_SERVER_ID",
                                    "value": item.TEMPLATE_ID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                                propArr.push(ko.toJS({"engagementId": self.scoped_list.engagementId,
                                    "scope": "DESTINATION",
                                    "name": "HOST_NAME",
                                    "value": item.PHANTOM_ID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                            });

                            self.scoped_list.properties = propArr;
//                            console.log("the phantom properties list is  " + ko.toJSON(propArr) +" /n the reply sent is :   " + JSON.stringify(self.scoped_list));
                        }
                    } else {
                        console.log("normal response construction......" + self.scopedSrcList().length + " " +
                                self.scopedDestList().length);

                        if ((self.scopedSrcList().length >= 1) || (self.scopedDestList().length >= 1)) {

                            $.each(self.scopedSrcList(), function(idx, item) {
//                                console.log(" scopedSrcList : the list has :::: " + ko.toJSON(item));
                                propArr.push(ko.toJS({"engagementId": self.scoped_list.engagementId,
                                    "scope": "SOURCE",
                                    "name": "HOST_GUID",
                                    "value": item.HOST_GUID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                            });

                            $.each(self.scopedDestList(), function(idx, item) {
                                propArr.push(ko.toJS({"engagementId": self.scoped_list.engagementId,
                                    "scope": "DESTINATION",
                                    "name": "HOST_GUID",
                                    "value": item.HOST_GUID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                            });
                            self.scoped_list.properties = propArr;
                        } else {
                            self.scoped_list.properties = [];
//                            console.log("sending the received data as response with properties array null");
                        }
                    }

                    self.saveScopedTargetList();

                };
//-----------------------------------------------------------------------------------------------------------------------
//-------------------------Mapping methods-------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------
                self.mapIntialize = function() {

                    self.mappingDestnList.removeAll();
                    self.destnDetailList.removeAll();
                    self.mappingList.removeAll();
                    self.phantomMapList.removeAll();
                    self.map_list = [];
                    self.mapPropList = [];
                    self.phantomPropLst = [];
                    self.phantomFlg(false);
                    self.phantomHideFlg(true);
                    self.adminFlg(true);

                    self.getMappingList();
                    setTimeout(function() {

                        $(window).resize();

                    }, 500);
                };


                self.getMappingList = function() {

                    $.ajax({
                        type: 'POST',
//                        url: "rest/lifecycle/map",
                        url: "rest/lifecycle/getEngagementMapping",
                        dataType: "json", // data type of response
                        data: ko.toJSON({"engagementId": self.engagement_Id}),
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            self.map_list = JSON.parse(JSON.stringify(data));
//                            console.log(" status of eng in mapping " + (self.map_list.status !== "New"));
                            if ((self.map_list.status !== "New") && (!self.hasPrivilege('Life-Cycle-Edit'))) {
                                self.adminFlg(false);
                            }
                            self.mapPropList = self.map_list.properties;
//                            console.log("mapped_target_list -------------" + JSON.stringify(self.map_list));

                            self.phantomPropLst = self.getTarget(self.mapPropList, "ENGAGEMENT");
                            if ((self.phantomPropLst.length !== 0) && (self.phantomPropLst[0].value == "PHANTOM") && (self.service_Id == 1)) {
                                console.log("the phantom display enabled for mapping");
                                self.enablePhantom();
//                                self.requestPhantomList("map");                              
                            }
                            self.analyseMapJson();
                        }
                    });
                };


                self.saveMappedTargetList = function() {

                    $('#modalPreloader').modal('show');
                    $.ajax({
                        type: 'POST',
//                        url: "rest/lifecycle/saveMap",
                        url: "rest/lifecycle/saveEngagementMapping",
                        dataType: "json", // data type of response
                        data: ko.toJSON(self.map_list),
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            console.log("data successfully sent to server after Mapping ....................");

                        },
                        complete: function(jqXHR, textStatus) {
                            $('#modalPreloader').modal('hide');
                        }

                    });
                };

                self.analyseMapJson = function() {

                    if (self.mapPropList.length !== 0)
                    {

                        $.each(self.getTarget(self.mapPropList, "SOURCE"), function(idx, item) {

                            var tempList = ko.utils.arrayFirst(self.mappingList(), function(mapItem) {
                                return mapItem.ID.indexOf(item.refId) !== -1;
                            });

//                            console.log(" temp list-------------*** " + ko.toJSON(tempList) );
                            if (tempList !== null) {

                                if ((item.name == "PINNED_DESTN_GUID"))
                                {
                                    tempList.PINNED_DESTN_GUID(item.value);
                                }
                            } else {
                                var targetLst = self.getGuid(self.target_list, item.refId);
                                var row = targetRow();
                                row.ID = item.refId;
                                row.SCOPE = 'SOURCE';
                                row.TARGET = targetLst[0];
                                row.TARGET_NAME = row.TARGET.TARGET_NAME;
                                row.PINNED_DESTN_GUID("");
                                if (item.name == "PINNED_DESTN_GUID") {
                                    row.PINNED_DESTN_GUID(item.value);
                                }
//                                console.log(" the row data is ----- "+ row + " " + ko.toJSON(row) );
                                self.mappingList().push(row);
                            }
                        });


                        if (self.phantomFlg())
                        {
                            var templateId;
                            var hostName;
                            var tempList = [];
                            var phantomRow = [];

                            var properties = [];
                            var guidArr = [];
//                   processing to populate alreay scoped phantom entry
                            if (self.mapPropList.length !== 0) {
                                properties = self.getTarget(self.mapPropList, "DESTINATION");

                                $.each(properties, function(idx, item) {

                                    phantomRow = ko.utils.arrayFilter(self.phantomMapList(), function(phantomItem) {
                                        return phantomItem.TARGET_GUID.indexOf(item.refId) !== -1;
                                    });
//                                    console.log("phantom row  -------------" + JSON.stringify(phantomRow));
                                    if (phantomRow.length == 0) {
                                        guidArr = ko.utils.arrayFilter(properties, function(element) {
                                            return element.refId.indexOf(item.refId) !== -1;
                                        });

                                        $.each(guidArr, function(idx, guidItem) {
                                            if (guidItem.name === "PHANTOM_SERVER_ID")
                                            {
                                                templateId = guidItem.value;
                                            } else if (guidItem.name === "HOST_NAME")
                                            {
                                                hostName = guidItem.value;
                                            }

                                        });

                                        if (templateId !== null) {

                                            tempList = ko.utils.arrayFilter(self.phantom_target_list, function(item) {
                                                return item.TEMPLATE_ID.indexOf(templateId) !== -1;
                                            });

                                            if (tempList.length !== 0) {
                                                if (hostName == null) {
                                                    hostName = tempList[0].PHANTOM_ID;
                                                }
                                                self.phantomMapList.push(ko.toJS({
                                                    "SCOPE": tempList[0].SCOPE,
                                                    "TEMPLATE_TYPE": tempList[0].TEMPLATE_TYPE,
                                                    "SYSTEM_CONFIG": tempList[0].SYSTEM_CONFIG,
                                                    "TEMPLATE_ID": tempList[0].TEMPLATE_ID,
                                                    "TARGET_NAME": hostName,
                                                    "TARGET_TYPE": tempList[0].TARGET_TYPE,
                                                    "TARGET_GUID": item.refId
                                                }));

                                            }
                                        }
                                    }

                                });

                            }
                            self.mappingDestnList(self.phantomMapList());
                        } else {
                            $.each(self.getTarget(self.mapPropList, "DESTINATION"), function(idx, item) {
                                var tempList = self.getGuid(self.target_list, item.refId);
                                if (tempList.length !== 0) {
                                    self.destnDetailList.push(tempList[0]);
                                }
                            });
                            self.mappingDestnList(self.destnDetailList());
                        }
//                        console.log("mapping destn list valuee   ------ " + JSON.stringify(self.mappingDestnList()));
                    }
                    self.mappingList.valueHasMutated();
                    self.mappingDestnList.valueHasMutated();
                    self.forceResize();

                };

                self.submitMap = function() {
                    var propArr = [];
                    if (self.phantomFlg()) {
                        if ((self.mappingList().length >= 1) || (self.phantomMapList().length >= 1)) {
                            $.each(self.mappingList(), function(idx, item) {

                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "SOURCE",
                                    "name": "HOST_GUID",
                                    "value": item.TARGET.HOST_GUID,
                                    "dateValue": null,
                                    "refId": item.ID}));
                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "SOURCE",
                                    "name": "PINNED_DESTN_GUID",
                                    "value": item.PINNED_DESTN_GUID,
                                    "dateValue": null,
                                    "refId": item.ID}));
                            });
                            $.each(self.phantomTargetList(), function(idx, item) {

                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "DESTINATION",
                                    "name": "PHANTOM_SERVER_ID",
                                    "value": item.TEMPLATE_ID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "DESTINATION",
                                    "name": "HOST_NAME",
                                    "value": item.PHANTOM_ID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                            });

                            self.map_list.properties = propArr;
                            console.log(" \n the reply sent is :   " + JSON.stringify(self.map_list));

                        }
                    } else {

                        if ((self.mappingList().length >= 1) || (self.destnDetailList().length >= 1)) {

                            $.each(self.mappingList(), function(idx, item) {
                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "SOURCE",
                                    "name": "HOST_GUID",
                                    "value": item.TARGET.HOST_GUID,
                                    "dateValue": null,
                                    "refId": item.ID}));
                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "SOURCE",
                                    "name": "PINNED_DESTN_GUID",
                                    "value": item.PINNED_DESTN_GUID,
                                    "dateValue": null,
                                    "refId": item.ID}));
                            });
                            $.each(self.destnDetailList(), function(idx, item) {
                                propArr.push(ko.toJS({"engagementId": self.map_list.engagementId,
                                    "scope": "DESTINATION",
                                    "name": "HOST_GUID",
                                    "value": item.HOST_GUID,
                                    "dateValue": null,
                                    "refId": item.TARGET_GUID}));
                            });
                            self.map_list.properties = propArr;
                            console.log(" \n the reply sent is :  " + JSON.stringify(self.map_list));

                        } else {
                            self.map_list.properties = [];
                            console.log("sending the received data as response with properties array null");
                        }
                    }

                    self.saveMappedTargetList();
                    self.updateStatus();

                };

//--------------------------------------------------------------------------------------------------------------------------------
//----------------------------------- Mapping methods end here -------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
                self.getTarget = function(jsonLst, scope) {

                    var filter = scope;
                    if (!filter) {
                        return null;

                    } else {
                        return ko.utils.arrayFilter(jsonLst, function(item) {
                            return item.scope.indexOf(filter) !== -1;
                        });

                    }

                };

//--------------------------------------------------------------------------------------------------------------   
                self.getGuid = function(jsonLst, guid) {

                    var pName = guid;
                    if (!pName) {

                        return null;

                    } else {
                        return ko.utils.arrayFilter(jsonLst, function(item) {
                            return item.TARGET_GUID.indexOf(pName) !== -1;
                        });

                    }

                };
//------------------------------------------------------------------------------
    //-------------------------Begin AJAIN code---------------------------------
                
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

                self.showRegion = function(region) {
                    setTimeout(function() {
                        var observable = self.pageRegions[region];
                        if (observable) {
                            observable(true);
                            $(window).resize();
                        }
                    }, 250);
                };
                
                //the whole code is inside this function
                self.viewScenario = function(data) {
                    console.log(JSON.stringify(data));
                    self.scenarioId = data.scenarioId;
                    console.log("self.scenarioId: " + self.scenarioId);
                
                    //----------------------------------------------------------------------
                    //self.scenarioId = ko.observable();
                    //self.scenarioId=1846;

                    //self.engagementId = ko.observable();
                    //self.engagement_Id=1450;

                    //self.engagementId(dashboard.engagementId());
                    //console.log("self.engagementId: " + self.engagementId());

                    //--------------------Pkg Run Id Drop Down List-------------------------
                    //self.pkgRunId  = ko.observable();
                    //self.pkgRunId('130925_135954');
                    //self.pkgRunIds = ko.observableArray(['130925_135954', '130925_135955', '130925_135956', '130925_135957']);
                    //self.pkgRunIds = ko.observableArray();

                    var urlForPkgRunId;
                    urlForPkgRunId = "rest/data/sql/pkgRunIdDropDown?scenario_id=" + self.scenarioId;
                    console.log("00. The pkgRunId url is " + urlForPkgRunId);
                    $.ajax({
                        async: true,
                        url: urlForPkgRunId,
                        datatype: "json",
                        contentType: "application/json; charset=utf-8",
                        success: function(data, textStatus, jqXHR) {
                            self.pkgRunIds(data);
                            if (data && data.length > 0)
                                self.pkgRunId(data[0].PACKAGE_RUN_ID);
                        }
                    });
                    //----------------------------------------------------------------------
                    //self.pieGroup = ko.observable();           
                    //self.pieGroup(['Group A']);
                    //--------------------Table Transfer Method----------------------------
                    //self.tblTrfMthd  = ko.observable();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data) return;
                        console.log(".....pkg_run_id="+data);
                        var urlForTblTrfMthd;
                        urlForTblTrfMthd = "rest/data/sql/tableTransferMethod?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("01. The url is: " + urlForTblTrfMthd);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/tableTransferBreakdown.json",
                            url: urlForTblTrfMthd,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var tblTrfMthdSer = [];
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
                    //self.dataTrfVol = ko.observable();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForDataTrfVol;
                        urlForDataTrfVol = "rest/data/sql/dataTransferVolumes?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("02. The url is: " + urlForDataTrfVol);

                        $.ajax({
                            async: true,
                            url: urlForDataTrfVol,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
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
                    //self.dataCompPer = ko.observable();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForDataCompPer;
                        urlForDataCompPer = "rest/data/sql/dataCompressionPercentage?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("03. The url is: " + urlForDataCompPer);

                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/dataCompressionPercentage.json",
                            url: urlForDataCompPer,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
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
                    //self.migCompProj = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForMigCompProj;
                        urlForMigCompProj = "rest/data/sql/ObjectCompressionProjection?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("04. The url is: " + urlForMigCompProj);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/migrationCompressionProjection.json",
                            url: urlForMigCompProj,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
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


                    //-------------------Invalid Objects By Owner --------------------------
                    //self.invaldObjByOwn = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForInvaldObjByOwn;
                        urlForInvaldObjByOwn = "rest/data/sql/InvalidObjectsByOwner?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("05. The url is: " + urlForInvaldObjByOwn);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/invalidObjectsByOwner.json",
                            url: urlForInvaldObjByOwn,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var invObjByOwnSer = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    invObjByOwnSer.push({host_name: item.HOST_NAME,
                                        instance_name: item.INSTANCE_NAME,
                                        owner: item.OWNER,
                                        nr_objects: item.NUM_OBJECTS});
                                });
                                self.invaldObjByOwn(invObjByOwnSer);
                            }
                        });
                    });

                    //--------------------Invalid objects by Type---------------------------
                    //self.invalidObjByType = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForInvalidObjSumm;
                        urlForInvalidObjSumm = "rest/data/sql/InvalidObjectsSummary?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("06. The url is: " + urlForInvalidObjSumm);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/invalidObjectsByType.json",
                            url: urlForInvalidObjSumm,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var invObjser = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    invObjser.push({Object_Type: item.OBJECT_TYPE, Total: item.TOTAL});
                                });
                                self.invalidObjByType(invObjser);
                            }
                        });
                    });

                    //----------------------------------------------------------------------
                    //---------------Migration Status Reports Accordian---------------------

                    //----------------------Migration Start Time----------------------------
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForMigStartTime;
                        urlForMigStartTime = "rest/data/sql/migStartTime?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
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

                    //----------------------------------------------------------------------
                    //Size of Database Migrated
                    //self.pGSizeofDataMig = ko.observable();
                    //self.pDSizeofDataMig  = ko.observable();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForSizeofDbMig;
                        urlForSizeofDbMig = "rest/data/sql/sizeOfMigratedDatabase?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("07. The url is: " + urlForSizeofDbMig);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/sizeOfMigratedDatabase.json",
                            url: urlForSizeofDbMig,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var segSizeSer = [];
                                var timeseries = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    segSizeSer.push([item.TOTAL_SIZE_GB]);
                                    timeseries.push([item.SNAP_TIME]);
                                });
                                var lineSeries = [{name: 'Size', items: segSizeSer, markerDisplayed: 'on'}];
                                self.pDSizeofDataMig(lineSeries);
                                self.pGSizeofDataMig(timeseries);
                            }
                        });
                    });
                    //--------------------Data Migration Throughput-------------------------
                    //self.pGDataThroughput  = ko.observable();
                    //self.pDDataThroughput  = ko.observable();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForDataMigThroughput;
                        urlForDataMigThroughput = "rest/data/sql/dataThroughput?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("08. The url is: " + urlForDataMigThroughput);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/dataThroughput.json",
                            url: urlForDataMigThroughput,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var dataSeries = [];
                                var groupSeries = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    dataSeries.push([item.THROUGHPUT]);
                                    groupSeries.push([item.SNAP_TIME]);
                                });
                                var lineSeries = [{name: 'Throughput', items: dataSeries}];
                                self.pDDataThroughput(lineSeries);
                                self.pGDataThroughput(groupSeries);
                            }
                        });
                    });
                    //---------Migration Job Status (very Large Tables not included)--------
                    //self.migJobStatusVLTNI = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlFormigJobStatusVLTNI;
                        urlFormigJobStatusVLTNI = "rest/data/sql/migrationJobStatusVeryLargeTablesNotIncl?scenario_id=" + self.scenarioId + "&engagement_id=" + self.engagement_Id;
                        console.log("09. The url is: " + urlFormigJobStatusVLTNI);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/migrationJobStatusVeryLargeTablesNotIncl.json",
                            url: urlFormigJobStatusVLTNI,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
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

                    //----------------------------------------------------------------------
                    //Migration Status - Very Large Table
                    //self.migJobStatusVLT = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlFormigJobStatusVLT;
                        urlFormigJobStatusVLT = "rest/data/sql/migrationJobStatusVeryLargeTables?scenario_id=" + self.scenarioId + "&engagement_id=" + self.engagement_Id;
                        console.log("10. The url is: " + urlFormigJobStatusVLT);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/migrationJobStatusVeryLargeTables.json",
                            url: urlFormigJobStatusVLT,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var migStatVLT = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    migStatVLT.push({hostname: item.HOSTNAME,
                                                     job_description: item.JOB_DESCRIPTION,
                                                     pkgdone: item.PKGDONE,
                                                     totalpkgs: item.TOTALPKGS,
                                                     pct: item.PERCENTAGE
                                                    });
                                });
                                self.migJobStatusVLT(migStatVLT);
                            }
                        });
                    });


                    //----------------Migration Run Accordian-------------------------------
                    //-----------------------Pre Migration Tasks----------------------------
                    //self.PreMigTaskSerVal = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var PreMigTaskSer = [];
                        var urlForPreMigTaskSerVal;
                        urlForPreMigTaskSerVal = "rest/data/sql/preMigrationTasks?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("11. The url is: " + urlForPreMigTaskSerVal);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/preMigrationTasks.json",
                            url: urlForPreMigTaskSerVal,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    PreMigTaskSer.push({phase_name: item.PHASE_NAME,
                                        description: item.DESCRIPTION,
                                        value: item.VALUE
                                    });
                                });
                                self.PreMigTaskSerVal(PreMigTaskSer);
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert("Error loading preMigrationTasks!");
                            }
                        });
                    });

                    //-------------------------Migration Tasks------------------------------
                    //self.MigTaskSerVal = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var MigTaskSer = [];
                        var MigTimeSer = [];
                        var urlForMigTaskSerVal;
                        urlForMigTaskSerVal = "rest/data/sql/migrationTasks?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("12. The url is: " + urlForMigTaskSerVal);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/migrationsTasks.json",
                            url: urlForMigTaskSerVal,
                            datatype: "json",
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

                    //--------------Table Migration Status Validation-----------------------
                    //self.tblMigStatusVal = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlFortblMigStatusVal;
                        urlFortblMigStatusVal = "rest/data/sql/tableMigrationStatusValidation?engagement_id=" + self.engagement_Id + "&scenario_id=" + self.scenarioId;
                        console.log("13. The url is: " + urlFortblMigStatusVal);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/tableMigrationStatusValidation.json",
                            url: urlFortblMigStatusVal,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var tblMigStatusSer = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    tblMigStatusSer.push({database_name: item.DATABASE_NAME,
                                        migration_started: item.MIGRATION_STARTED,
                                        text: item.TEXT,
                                        tables_cnt: item.TABLES_CNT,
                                        tables_pct: item.TABLES_PCT
                                    });
                                });
                                self.tblMigStatusVal(tblMigStatusSer);
                            }
                        });
                    });


                    //--------------------Incomplete Migrated Tables------------------------
                    //self.incomplMigTbls = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForIncomplMigTbls;
                        urlForIncomplMigTbls = "rest/data/sql/incompleteMigratedTables?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("14. The url is: " + urlForIncomplMigTbls);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/incompleteMigratedTables.json",
                            url: urlForIncomplMigTbls,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
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

                    //--------------------Migrated Objects by Type--------------------------
                    //self.migObjstatusVal = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlFormigObjbyType;
                        urlFormigObjbyType = "rest/data/sql/migObjectsByType?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("15. The url is: " + urlFormigObjbyType);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/migratedObjectsStatus.json",
                            url: urlFormigObjbyType,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
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
                    //-------------------Missing Objects on Target--------------------------
                    //self.migObjOnTrgVal = ko.observableArray();
                    self.pkgRunId.subscribe(function(data) {
                        if (!data)
                            return;
                        var urlForMisObjOnTrgVal;
                        urlForMisObjOnTrgVal = "rest/data/sql/missingObjectsOnTarget?scenario_id=" + self.scenarioId + "&pkg_run_id=" + data + "&engagement_id=" + self.engagement_Id;
                        console.log("16. The url is: " + urlForMisObjOnTrgVal);
                        $.ajax({
                            async: true,
                            //url      : "js/mock/migration/missingObjectsOnTarget.json",
                            url: urlForMisObjOnTrgVal,
                            datatype: "json",
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                var migObjOnTrg = [];
                                // Loop through the items
                                $.each(data, function(idx, item) {
                                    migObjOnTrg.push({owner_target: item.OWNER_TARGET,
                                        object_name: item.OWNER_NAME,
                                        object_type: item.OWNER_TYPE
                                    });
                                });

                                self.migObjOnTrgVal(migObjOnTrg);
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert("Error loading missingObjectsOnTarget!");
                            }
                        });
                    });

                    //------------------END OF MIGRATION RUN--------------------------------
                    //----------------------------------------------------------------------
                    //----------------End of migrationService() function--------------------    
                    //------------------------End of AJAIN Code---------------------------------
                };

                self.gOmigObjOnTrgVal = {data: self.migObjOnTrgVal,
                    enablePaging: true,
                    showFilter: true,
                    columnDefs: [{field: 'owner_target', displayName: 'Owner (Target)'},
                        {field: 'object_name', displayName: 'Object Name'},
                        {field: 'object_type', displayName: 'Object Type'}
                    ]
                };
                self.gOmigObjstatusVal = {data: self.migObjstatusVal,
                    enablePaging: false,
                    showFilter: false,
                    columnDefs: [{field: 'object_type', displayName: 'Object Type'},
                        {field: 'total_objects_src', displayName: 'Total Objects (Source)'},
                        {field: 'total_objects_trg', displayName: 'Total Objects (Target)'},
                        {field: 'nr_diff', displayName: 'Difference'}
                    ]
                };

                self.gOincomplMigTbls = {data: self.incomplMigTbls,
                    enablePaging: true,
                    showFilter: false,
                    columnDefs: [{field: 'table_name_diff', displayName: 'Table Name'},
                        {field: 'owner_target', displayName: 'Owner (Target)'},
                        {field: 'row_count_src', displayName: 'Row Count (Source)'},
                        {field: 'row_count_trg', displayName: 'Row Count (Target)'},
                        {field: 'nr_diff', displayName: 'Difference'}
                    ]
                };

                self.gOtblMigStatus = {data: self.tblMigStatusVal,
                    enablePaging: false,
                    showFilter: false,
                    columnDefs: [{field: 'database_name', displayName: 'Database Name'},
                        {field: 'migration_started', displayName: 'Started On'},
                        {field: 'text', displayName: 'Text'},
                        {field: 'tables_cnt', displayName: 'Tables Count'},
                        {field: 'tables_pct', displayName: '% Completed', width: 200, cellTemplate: '<div class="progress progress-striped" style="margin:5px; background-color:#f0ad4e">' +
                                    '<div class="progress-bar" role="progressbar"' +
                                    'data-bind="attr: {style: \'width:\' + getProperty($parent) + \'%\'}, text: getProperty($parent) + \'%\'"></div></div>'
                        }]
                };

                self.gOMigTasks = {data: self.MigTaskSerVal,
                    enablePaging: true,
                    showFilter: false,
                    columnDefs: [{field: 'phase_name', displayName: 'Phase Name'},
                        {field: 'value', displayName: 'Value'},
                        {field: 'description', displayName: 'Description'}]
                };

                self.gOPreMigTaskSerVal = {data: self.PreMigTaskSerVal,
                    enablePaging: false,
                    showFilter: false,
                    columnDefs: [{field: 'phase_name', displayName: 'Phase Name'},
                        {field: 'value', displayName: 'Value'},
                        {field: 'description', displayName: 'Description'}]
                };

                self.gridOmigJobStatusVLT = {data: self.migJobStatusVLT,
                    enablePaging: false,
                    showFilter: false,
                    showGroupPanel: true,
                    columnDefs: [{field: 'hostname', displayName: 'Hostname'},
                        {field: 'job_description', displayName: 'Job Description'},
                        {field: 'pkgdone', displayName: 'Pkg Done'},
                        {field: 'totalpkgs', displayName: 'Total Pkgs'},
                        {field: 'pct', displayName: 'Percentage', width: 200, cellTemplate: '<div class="progress progress-striped" style="margin:5px; background-color:#f0ad4e">' +
                                    '<div class="progress-bar" role="progressbar"' +
                                    'data-bind="attr: {style: \'width:\' + getProperty($parent) + \'%\'}, text: getProperty($parent) + \'%\'"></div></div>'}
                    ]
                };

                self.gridOmigJobStatusVLTNI = {data: self.migJobStatusVLTNI,
                    enablePaging: false,
                    showFilter: false,
                    showGroupPanel: true,
                    columnDefs: [{field: 'job_description', displayName: 'Job Description'},
                        {field: 'pkgdone', displayName: 'Pkg Done'},
                        {field: 'totalpkgs', displayName: 'Total Pkgs'},
                        {field: 'pct', displayName: 'Percentage', width: 200, cellTemplate: '<div class="progress progress-striped" style="margin:5px; background-color:#f0ad4e">' +
                                    '<div class="progress-bar" role="progressbar"' +
                                    'data-bind="attr: {style: \'width:\' + getProperty($parent) + \'%\'}, text: getProperty($parent) + \'%\'"></div></div>'}
                    ]
                };

                self.gOmigCompProj = {data: self.migCompProj,
                    showFilter: false,
                    columnDefs: [{field: 't1_label', displayName: 'Label'},
                        {field: 't1_size', displayName: 'Size (GB)'},
                        {field: 't1_projected_size_25pct', displayName: 'Projected Size (When 25% Compressed)'},
                        {field: 't1_projected_size_50pct', displayName: 'Projected Size (When 50% Compressed)'},
                        {field: 't1_space_gain', displayName: 'Space Gain'}]
                };

                self.gOinvalidObjByType = {data: self.invalidObjByType,
                    enablePaging: false,
                    showFilter: false,
                    columnDefs: [{field: 'Object_Type', displayName: 'Object Type'},
                        {field: 'Total', displayName: 'Total'}]
                };

                self.gOinvaldObjByOwn = {data: self.invaldObjByOwn,
                    enablePaging: true,
                    showFilter: false,
                    columnDefs: [{field: 'host_name', displayName: 'Host Name'},
                        {field: 'instance_name', displayName: 'Instance Name'},
                        {field: 'owner', displayName: 'Owner'},
                        {field: 'nr_objects', displayName: 'No of Invalid Obj'}
                    ]
                };
                //------------------End of self.viewScenario function ---------------------- 

            }
            return new ScenarioScopeViewModel();
        });
