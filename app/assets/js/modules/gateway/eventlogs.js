define(['jquery', 'knockout', 'modules/common/dialog-utils', 'moment-timezone', 'date-util', 'date-picker'],
        function($, ko, dialog, moment) {

            var EventLogsViewModel = function() {

                var self = this;
                self.eventList = ko.observableArray();
                self.startDate = ko.observable(new Date());
                self.endDate = ko.observable(new Date());
                self.targetUuid = ko.observable();
                self.eventGuid = ko.observable();
                self.eventSource = ko.observable();
                self.createdAt = ko.observable();
                self.msgMap = ko.observableArray();
                self.respMap = ko.observableArray();
                self.showEventList = ko.observable(false);

                self.search = function() {
                    var searchObj = {
                        startDate: self.startDate,
                        endDate: self.endDate,
                        targetUuid: self.targetUuid,
                        eventGuid: self.eventGuid,
                        eventSource: self.eventSource
                    };
                    ko.validation.group(searchObj, {evaluate: true});
                    if (searchObj.errors().length > 0) {
                        dialog.alertError('Data validation failed, please see the error message with the failed input field!');
                        return;
                    }

                    //transform from ko observable to pure java object
                    delete searchObj.errors;
                    var searchData = ko.toJS(searchObj);
                    $.ajax({
                        type: 'POST',
                        url: "rest/gatewayservice/searchEventLogs",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(searchData),
                        success: function(data, textStatus, jqXHR) {
                            self.showEventList(true);
                            self.eventList(data);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log("errorThrown="+errorThrown);
                            dialog.alertError("Too many events found - please narrow your search criteria and try again !");
                        }
                    });
                };

                self.eventsGrid = {data: self.eventList,
                    showFilter: true,
                    enablePaging: true,
                    multiSelect: false,
                    //selectWithCheckboxOnly: true,
                    canSelectRows: false,
                    displaySelectionCheckbox: false,
                    disableTextSelection: false,
                    //sortInfo: self.sortInfo,
                    fixedViewPortHeight: false,
                    pagingOptions: {
                        pageSizes: ko.observableArray([10, 100, 500, 1000]),
                        pageSize: ko.observable(10),
                        totalServerItems: ko.observable(0),
                        currentPage: ko.observable(1)
                    },
                    showToolbar: false,
                    columnDefs: [
                        {field: 'eventGuid', displayName: 'Event GUID', width: '20%'},
                        {field: 'eventSource', displayName: 'Event Source', width: '20%'},
                        {field: 'targetUuid', displayName: 'Target UUID', width: '20%'},
                        {field: 'createdAt', displayName: 'Created At',
                            cellFilter: function(data) {
                                return moment(data).format('YYYY/MM/DD HH:mm:ss');
                            }, width: '20%'},
                        {field: 'eventGuid', displayName: 'Details', sortable: false,
                            cellTemplate:
                                    '<div class="kgAction"><button class="btn btn-default btn-sm" data-bind="click: $parent.$grid.$userViewModel.viewDetails.bind($data, $parent.entity.eventGuid)">View Details</button></div>',
                            width: '20%'
                        }
                    ]};

                self.viewDetails = function(guid) {
                    location.hash = '#/gateway/eventdetails/' + guid;
                };

                self.beforeDetails = function(context) {
                    var guid = context.params['guid'];
                    $.ajax({
                        type: 'POST',
                        url: "rest/gatewayservice/getEventDetails",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: guid,
                        success: function(data, textStatus, jqXHR) {
                            self.targetUuid(data.targetUuid);
                            self.eventGuid(data.eventGuid);
                            self.eventSource(data.eventSource);
                            self.createdAt(moment(data.createdAt).format('YYYY/MM/DD HH:mm:ss'));
                            self.msgMap(data.msgMap);
                            self.respMap(data.respMap);
                        }
                    });
                };

                self.doneDetails = function() {
                    location.hash = '#/gateway/eventlogs';
                };

            };

            return new EventLogsViewModel();
        }
);
