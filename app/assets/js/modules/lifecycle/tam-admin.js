define(['jquery', 'knockout', 'modules/common/dialog-utils', 'modules/lifecycle/lifecycleServiceUtil', 'modules/common/user', 'date-util', 'modules/lifecycle/scenario_config'],
        function($, ko, dialog, util, userToken, dateUtil, scenario_config) {

            console.log("defining tam-admin view model...");

            function TamAdminViewModel() {
                var self = this;
                self.engagementList = ko.observableArray(null);
                self.scenarioList = ko.observableArray(null);
                self.filteredScenarioList = ko.observableArray(null);
                self.selectedEngList = ko.observableArray([]);
                self.engagementPanelHeading = ko.observable(null);
                self.saveEngagementButtonText = ko.observable(null);
                self.scenarioIds = ko.observable(null);
                self.engagementIDList = ko.observableArray(null);
                self.isNewEngagment = false;
                self.statusList = util.engStatusList();
                self.serviceList = util.getServiceList();
                self.currentEngagement = util.newEngagement();
                self.currentScenario = util.newscenario();
                self.engPropRules = [];
                self.getEngProperty = function(filters) {
                    return util.getProperty(self.currentEngagement.properties, filters);
                };

                //Map of Current Engagement Ids with their Description
                function EngIdMap(data) {
                    var self = this;
                    self.id = data.engagementId;
                    self.value = data.engagementId + " : " + data.description;
                }


                //Before Routing Action to tam admin dashboard page
                self.beforeRoutingAction = function(context) {
                    console.log("Initialzing Engagement View Model...");

                    //Cleaning Engagement and Scenario List
                    self.engagementList.removeAll();
                    self.scenarioList.removeAll();
                    self.selectedEngList.removeAll();

                    //Loading Engagement and Scenario List
                    self.loadEngagementList();
                    self.loadScenarioList();

                    //Dynamically updating filteredScenarioList after subscribing changes in  selectedEngList
                    ko.computed(function() {
                        self.filteredScenarioList(ko.utils.arrayFilter(self.scenarioList(), function(scenario) {
                            for (var i = 0; i < self.selectedEngList().length; i++)
                                if (scenario.engagementId == self.selectedEngList()[i].engagementId)
                                    return true;
                            return false;
                        }));
                    });

                    //Initializing gridOptions for Engagement Table
                    self.engagementGridOptions = {
                        showFilter: true,
                        enablePaging: true,
                        fixedViewPortHeight: false,
                        selectedItems: self.selectedEngList,
                        selectWithCheckboxOnly: true,
                        displaySelectionCheckbox: true,
                        showToolbar: true,
                        rightToolbarTemplate: '<button type="button" class="btn btn-primary btn-sm"  data-bind="click: function(){createEngagement()}"><span class="glyphicon glyphicon-plus"></span>Create Engagement </button>',
                        data: self.engagementList,
                        columnDefs: [{field: 'engagementId', displayName: 'Engagement Id', width: '8%'},
                            {field: 'engagementId', displayName: 'Scenario Ids', width: '18%', cellFormatter: function(data) {
                                    return self.getScenarioIdsForEngagement(data)
                                }},
                            {field: 'description', displayName: 'Project Name', width: '20%'},
                            {field: 'status', displayName: 'Status', width: '8%'},
                            {field: 'serviceId', displayName: 'Service Name ', width: '20%', sortFn: util.sortFn, cellFormatter: function(data) {
                                    return self.getServiceName(data)
                                }},
                            {field: 'createDate', width: '14%', cellTemplate: '<div class="kgActionText" data-bind="dateText: new Date($parent.entity[\'createDate\']),include: \'both\'"/>', displayName: 'Create Date'},
                            {field: null, displayName: 'Action', width: '8%', cellTemplate: '<div class="kgAction"><button class="btn btn-default btn-sm" data-bind="click: function(){$parent.$grid.$userViewModel.editEngagement($parent.entity)}"> <i class="fa fa-pencil"></i>&nbsp;&nbsp;Edit</button> </div>'}
                        ]};

                    //Initializing gridOptions for Scenario Table
                    self.scenarioGridOptions = {
                        showFilter: true,
                        enablePaging: true,
                        fixedViewPortHeight: false,
                        showToolbar: true,
                        canSelectRows: false,
                        rightToolbarTemplate: '<button type="button" class="btn btn-primary btn-sm"  data-bind="click: function(){createScenario()}"><span class="glyphicon glyphicon-plus"></span>Create Scenario</button>',
                        data: self.filteredScenarioList,
                        columnDefs: [{field: 'engagementId', displayName: 'Engagement Id', width: '10%'},
                            {field: 'scenarioId', displayName: 'Scenario Id', width: '10%'},
                            {field: 'description', displayName: 'Scenario Name', width: '20%'},
                            {field: 'createDate', width: '18%', cellTemplate: '<div class="kgActionText" data-bind="dateText: new Date($parent.entity[\'createDate\']),include: \'both\'"/>', displayName: 'Create Date'},
                            {field: 'status', displayName: 'Status', width: '10%'},
                            {field: null, displayName: 'Action', width: '30%', cellTemplate: '<div class="kgAction">' +
                                        '<button id="editBtn" class="btn btn-default btn-sm"  data-bind="click: function(){ $userViewModel.scenarioConfig($parent.entity)}" ><i class="fa fa-pencil"></i>&nbsp;&nbsp;Edit</button>' +
                                        '<button id="submitBtn" class="btn btn-default btn-sm" data-bind="visible:ko.observable($parent.$grid.$userViewModel.getSubmitScenarioRenderValue($parent.entity[\'engagementId\'])),click: function(){$parent.$grid.$userViewModel.submitScenario($parent.entity)}"><i class="fa fa-share" ></i>&nbsp;&nbsp;Submit</button>' +
                                        '<button id="publishbtn" class="btn btn-default btn-sm" data-bind="visible:ko.observable($parent.$grid.$userViewModel.getPublishButtonRenderedValue($parent.entity[\'status\'])),click: function(){$parent.$grid.$userViewModel.changeScenarioStatus($parent.entity)}">' +
                                        '<i class="fa fa-sign-out"></i>&nbsp;&nbsp;<span data-bind="text:$parent.$grid.$userViewModel.getPublishButtonValue($parent.entity[\'status\'])"></span></button>' +
                                        '</div>'}
                        ]};
                } //End of beforeRoutingAction


                //Changing Value of Publish/Analyse Scenario Button based on Scenario status
                self.getPublishButtonValue = function(scenarioStatus) {
                    if (scenarioStatus == util.lifecycleStatus.sentToGateway)
                        return "Analyse";
                    else
                    if (scenarioStatus == util.lifecycleStatus.analysed)
                        return "Publish";
                    else
                    if (scenarioStatus == util.lifecycleStatus.published)
                        return "Un-Publish";
                }

                //Render the publish/analyse button only when the scenario status is sentToGateway/analysed/published
                self.getPublishButtonRenderedValue = function(scenarioStatus) {
                    console.log("checking status :" + scenarioStatus);
                    allowedStatusList = [util.lifecycleStatus.sentToGateway, util.lifecycleStatus.analysed, util.lifecycleStatus.published];
                    return (allowedStatusList.indexOf(scenarioStatus) != -1);
                }

                //Render Submit scenario button only when the engagement status is not New 
                self.getSubmitScenarioRenderValue = function(engagementId) {
                    console.log("getting submit scenario render value for engagementId :" + engagementId);
                    var engagement = ko.utils.arrayFirst(self.engagementList(), function(engagement) {
                        return (engagement.engagementId == engagementId)
                    });
                    if ((engagement != null) && (engagement.status != util.lifecycleStatus.new)) {
                        console.log("Current Engagement status:" + engagement.status);
                        return true;
                    }
                    return false;
                }

                //Updating the Scneario Status based on publish/analyse button and current scenario status
                self.changeScenarioStatus = function(row) {
                    console.log("Publishing scneario with  scenarioId...." + row.scenarioId);
                    var newStatus = row.status;
                    if (row.status == util.lifecycleStatus.analysed) {
                        console.log("Changing status to Publish");
                        newStatus = util.lifecycleStatus.published;
                    }
                    else if (row.status == util.lifecycleStatus.sentToGateway) {
                        console.log("Changing status to Analysed");
                        newStatus = util.lifecycleStatus.analysed;
                    } else if (row.status == util.lifecycleStatus.published) {
                        console.log("Changing status to Analaysed");
                        newStatus = util.lifecycleStatus.analysed
                    }
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/updateScenarioStatus",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({scenarioId: row.scenarioId, status: newStatus, lastModifyBy: userToken.userName()}),
                        success: function(data, textStatus, jqXHR) {
                            var output = data[0];
                            var status = output.STATUS;
                            var message = output.MSG;
                            if (status == 'FAILED') {
                                dialog.notifyError('Operation Failed', message);
                            } else if (status == 'SUCCESS')
                            {
                                self.scenarioList.removeAll();
                                self.loadScenarioList();
                                dialog.notifySuccess('Operation Succeeded', message);
                            }
                        }
                    });
                }

                //Handler for Edit Scenario
                self.scenarioConfig = function(data) {
                    var selectedEngagementId = data.engagementId;
                    var selectedScenarioId = data.scenarioId;
                    scenario_config.init(selectedEngagementId, selectedScenarioId);
                };

                //Getting Current Engagement List through AJAX Call.
                self.loadEngagementList = function() {
                    console.log("Getting Service engagementList ......");
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/findEngagements",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({}),
                        success: function(data, textStatus, jqXHR) {
                            // console.log("engagementList  Loaded as:" + JSON.stringify(data));
                            self.engagementIDList.removeAll();
                            self.engagementList.pushAll(data);
                            ko.utils.arrayForEach(data, function(item) {
                                self.engagementIDList.push(new EngIdMap(item));
                            });
                            self.engagementIDList.sort(function(obj1, obj2) {
                                return (obj1.id) - (obj2.id);
                            });
                        }
                    });
                };

                //Getting Current Scenarios List through AJAX Call.
                self.loadScenarioList = function() {
                    console.log("Getting  Scenario List......");
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/findScenarios",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({}),
                        success: function(data, textStatus, jqXHR) {
                            self.scenarioList.pushAll(data);
                        }
                    });
                };

                //Returns Service Name for a Service Id
                self.getServiceName = function(id) {
                    var service = ko.utils.arrayFirst(self.serviceList, function(object) {
                        return object.serviceId == id;
                    });
                    return service.description;
                }

                //Function to create New Engagement based on current engagement data 
                self.addEngagement = function() {
                    if (self.saveEngagementButtonText() == "Update Engagement") {
                        self.updateEngagement();
                    }
                    else if (self.saveEngagementButtonText() == "Add Engagement") {
                        console.log("Adding  Engagement ....");
                        var failedInputCount = 0;
                        ko.validation.group(self.currentEngagement, {evaluate: true});
                        failedInputCount += self.currentEngagement.errors().length;
                        delete self.currentEngagement.errors;
                        ko.utils.arrayForEach(self.currentEngagement.properties(), function(property) {
                            ko.validation.group(property, {evaluate: true});
                            failedInputCount += property.errors().length;
                            delete property.errors;
                        });
                        console.log("Validation Failed count:" + failedInputCount);
                        if (failedInputCount > 0) {
                            dialog.alertError('Data validation failed, please see the error message besides the failed input field!');
                            return;
                        }

                        self.currentEngagement.createBy(userToken.userName());
                        var engagementData = ko.toJSON(self.currentEngagement);
                        console.log("Adding Now with Eng Data" + (engagementData));
                        $('#modalPreloader').modal('show');
                        $.ajax({
                            type: 'POST',
                            url: "rest/lifecycle/addEngagement",
                            dataType: "json", // data type of response
                            contentType: "application/json; charset=utf-8",
                            data: engagementData,
                            success: function(data, textStatus, jqXHR) {
                                var output = data[0];
                                var status = output.STATUS;
                                var message = output.MSG;
                                if (status == 'FAILED') {
                                    dialog.notifyError('Operation Failed', message);
                                } else if (status == 'SUCCESS')
                                {
                                    dialog.notifySuccess('Operation Succeeded', message);
                                    location.hash = "#/lifecycle/tam-admin";

                                }
                            },
                            complete: function(jqXHR, textStatus) {
                                $('#modalPreloader').modal('hide');
                            }
                        });
                    }
                };

                //Function to Update  Engagement based on current engagement data 
                self.updateEngagement = function() {
                    console.log("Updating  Engagement ....");
                    var failedInputCount = 0;
                    ko.validation.group(self.currentEngagement, {evaluate: true});
                    failedInputCount += self.currentEngagement.errors().length;
                    delete self.currentEngagement.errors;
                    ko.utils.arrayForEach(self.currentEngagement.properties(), function(property) {
                        ko.validation.group(property, {evaluate: true});
                        failedInputCount += property.errors().length;
                        delete property.errors;
                    });
                    console.log("Failed Input count:" + failedInputCount);
                    if (failedInputCount > 0) {
                        dialog.alertError('Data validation failed, please see the error message besides the failed input field!');
                        return;
                    }
                    self.currentEngagement.lastModifyBy(userToken.userName());
                    var engagementData = ko.toJSON(self.currentEngagement);
                    console.log("Updating Engagement with data" + engagementData);
                    $('#modalPreloader').modal('show');
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/updateEngagement",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: engagementData,
                        success: function(data, textStatus, jqXHR) {
                            var output = data[0];
                            var status = output.STATUS;
                            var message = output.MSG;
                            if (status == 'FAILED') {
                                dialog.notifyError('Operation Failed', message);
                            } else if (status == 'SUCCESS')
                            {
                                dialog.notifySuccess('Operation Succeeded', message);
                                location.hash = "#/lifecycle/tam-admin";
                            }
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#modalPreloader').modal('hide');
                        }
                    });

                };

                //Function to do Preprocessing before navigating to Create Engagement Page
                self.createEngagement = function() {
                    console.log("Creating Engagement...");
                    self.isNewEngagment = true;
                    ko.validation.disableValidation();
                    util.resetObject(self.currentEngagement);
                    self.getEngProperty({scope: 'ENGAGEMENT', name: 'CONTRACT_ID'}).value(null);
                    self.getEngProperty({scope: 'ENGAGEMENT', name: 'ENG_TYPE'}).value("REGULAR");
                    ko.validation.enableValidation();
                    self.engagementPanelHeading("Add A New Engagement");
                    self.saveEngagementButtonText("Add Engagement");
                    location.hash = "#/lifecycle/engagement";
                };

                //Function to do Preprocessing before navigating to Edit Engagement Page
                self.editEngagement = function(row) {
                    console.log("Editing Engagement...: " + JSON.stringify(row));
                    self.isNewEngagment = false;
                    ko.validation.disableValidation();
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/findEngagements",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: ko.toJSON({'engagementId': row.engagementId}),
                        success: function(data, textStatus, jqXHR) {
                            var engagement = data[0];
                            util.populateEngagement(engagement, self.currentEngagement);
                            ko.validation.enableValidation();
                            self.engagementPanelHeading("Editing Current Engagement");
                            self.saveEngagementButtonText("Update Engagement");
                            location.hash = "#/lifecycle/engagement";
                        }
                    })
                }


                //Function to retrieve all scenario ids associated with engId
                self.getScenarioIdsForEngagement = function(engId) {
                    console.log("Getting Scenario Ids for Engagement ID" + engId);
                    var scenarioList = ko.utils.arrayFilter(self.scenarioList(), function(scenario) {
                        if (scenario.engagementId == engId)
                            return true;
                        return false;
                    });
                    var scenarioIds = "";
                    for (i = 0; i < scenarioList.length; i++) {
                        scenarioIds = scenarioIds + JSON.stringify(scenarioList[i].scenarioId) + ",";
                    }
                    scenarioIds = scenarioIds.slice(0, -1);
                    return scenarioIds;
                }

                //Function to do preprocessing before navigating to create scenario page
                self.createScenario = function() {
                    console.log("Creating New Scenario...");
                    ko.validation.disableValidation();
                    util.populateScenario(ko.toJS(util.newscenario()), self.currentScenario);
                    util.getProperty(self.currentScenario.properties, {scope: 'SCENARIO', name: 'HIDE_FROM_CUSTOMER'}).value("N");
                    ko.validation.enableValidation();
                    location.hash = "#/lifecycle/scenario";
                }

                // Function to create new Scenario based on currentScneario data
                self.addScenario = function() {
                    console.log("Adding  Scenario ....");
                    ko.validation.group(self.currentScenario, {evaluate: true});
                    if (self.currentScenario.errors().length > 0) {
                        dialog.alertError('Data validation failed, please see the error message besides the failed input field!');
                        $('#modalPreloader').modal('hide');
                        return;
                    }
                    delete self.currentScenario.errors;
                    self.currentScenario.createBy(userToken.userName());
                    var scenarioData = ko.toJSON(self.currentScenario);
                    console.log("Adding Scenario with data" + scenarioData);
                    $('#modalPreloader').modal('show');
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/addScenario",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: scenarioData,
                        success: function(data, textStatus, jqXHR) {
                            var output = data[0];
                            var status = output.STATUS;
                            var message = output.MSG;
                            if (status == 'FAILED') {
                                dialog.notifyError('Operation Failed', message);
                            } else if (status == 'SUCCESS')
                            {
                                dialog.notifySuccess('Operation Succeeded', message);
                                location.hash = "#/lifecycle/tam-admin";
                            }
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#modalPreloader').modal('hide');
                        }
                    });
                };

                //Function to handle submit Scenario (sentToGateway)
                self.submitScenario = function(row) {
                    console.log("Submiting Scenario.. " + JSON.stringify(row));

                    ko.validation.disableValidation();
                    $.ajax({
                        type: 'POST',
                        url: "rest/lifecycle/submitScenario",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: ko.toJSON({'scenarioId': row.scenarioId, 'lastModifyBy': userToken.userName()}),
                        success: function(data, textStatus, jqXHR) {
                            var output = data[0];
                            var status = output.STATUS;
                            var message = output.MSG;
                            var outputText = "";
                            if (status == 'FAILED') {
                                for (i = 0; i < data.length; i++) {
                                    outputText = outputText + data[i].REF_ID + " : " + data[i].MSG + " " + '\n';
                                }
                                dialog.alertError(outputText);
                            } else if (status == 'SUCCESS')
                            {
                                dialog.notifySuccess('Operation Succeeded', message);
                                self.beforeRoutingAction();
                            }
                        }
                    })
                }

            }//End of TamAdminViewModel
            return new TamAdminViewModel();
        }
);//End of define
