define(['jquery', 'knockout', 'modules/lifecycle/scenario_scope'],
        function($, ko, scenario_scope) {
            console.log("defining ServiceDashboardViewModel...");

            function ServiceDashboardViewModel() {
                var self = this;

                self.serviceInst = ko.observable();
                self.engagementList = ko.observableArray([]);
                self.selectedEngagement = ko.observable(null);
                self.selected = ko.observableArray([]);
                self.filteredEngagementList = ko.observableArray([]);
                self.tempEngList = ko.observableArray([]);



                self.getEngagements = function(serviceId) {
                    self.filteredEngagementList.removeAll();
                    self.engagementList.removeAll();
                    //console.log("serviceId................" + serviceId)
                    $.ajax({
                        type: 'POST',
//                        url: "js/mock/lifecycle/findEngagements.json",
                        url: "rest/lifecycle/findEngagements",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({"serviceId": serviceId}),
                        success: function(data, textStatus, jqXHR) {
//                                console.log("Responce from  get_scenario_params :" + JSON.stringify(data));

                            if (!data) {
                                alert("Engagement Parameters are not returned !");
                            } else {
                                console.log(" the data got is " + JSON.stringify(data));

                                self.engagementList(JSON.parse(JSON.stringify(data)));
                                self.filteredEngagementList(self.engagementList());
                                console.log("filteredEngagementList................" + ko.toJSON(self.filteredEngagementList) + self.filteredEngagementList.length);
                                console.log("engagementList..............." + ko.toJSON(self.engagementList));

                            }
                        }

                    });
                };
                self.setService = function(serviceInstance) {
                    console.log("serviceInstance:" + serviceInstance);
                    self.serviceInst(serviceInstance);
                    console.log("self.serviceInst" + ko.toJSON(self.serviceInst));
                    console.log("self.serviceInst.serviceId" + ko.toJSON(self.serviceInst().serviceId));

                    self.getEngagements(self.serviceInst().serviceId);
                    location.hash = '#/lifecycle/serviceDashboard';

                };

//-------------------------------------------------------------------------------------------------------------------------------------------------

                self.viewEng = function(data) {
                    self.selected = data;
                   // console.log("data................." + data)

                    ko.computed(function() {
                        self.filteredEngagementList(ko.utils.arrayFilter(self.engagementList(), function(engagement) {
                            var isMatchFound = false;
                            $.each(data, function(idx, status) {
                              //  console.log("status................." + status)
                               // console.log("engagement.status................" + engagement.status)
                                if (engagement.status == status) {
                                  //  console.log("match found................" + status)
                                    isMatchFound = true;
                                    return;
                                }

                            });
                            if (isMatchFound) {
                                return true;
                            }
                            return false;

                        }));
                    });
                    console.log("filteredEngagementList................." + ko.toJSON(self.filteredEngagementList));
                    if (data == 'All') {
                        self.filteredEngagementList(self.engagementList());
                    }
                };



//---------------------------------------------------------------------------------------------------------------------------------------------             
                self.viewScoping = function(data) {
                    self.selectedEngagement = data;

                    console.log("engagement row selected to view : " + JSON.stringify(data));
                    console.log("current engagementId selected : " + JSON.stringify(self.selectedEngagement.engagementId));

                    if (self.selectedEngagement !== null) {
                        console.log(" the service id : " + self.serviceInst().serviceId);
                        /* create request param to send to server */
                        var engagement_id = self.selectedEngagement.engagementId;

                        scenario_scope.setId(self.selectedEngagement);
                        if (self.serviceInst().serviceId == "1") {
                            location.hash = '#/lifecycle/consolidation';
                        }
                        if (self.serviceInst().serviceId == "2") {
                            location.hash = '#/lifecycle/migration';
                        }
                        if (self.serviceInst().serviceId == "3") {
                            location.hash = '#/lifecycle/performance_tuning';
                        }
                        if (self.serviceInst().serviceId == "4") {
                            location.hash = '#/lifecycle/load_testing';
                        }
                    } else
                        alert("Please select Engagement to List Scoping Page!");
                };
            }
            
            return new ServiceDashboardViewModel();
        }
);

