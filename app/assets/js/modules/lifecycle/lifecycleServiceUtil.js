define(['jquery', 'knockout'],
        function($, ko) {
            console.log("defining LifeCycle Service Util  module...");
            function LifeCycleServiceUtil() {
                var self = this;
                self.serviceList = [];
                self.serviceParamList = {};
                self.propValidationRules = [];
                var monthList = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
                self.propValidationRules.push({PARAMETER_NAME: 'CONTRACT_ID', SCOPE: 'ENGAGEMENT', MANDATORY: 'Y', DATA_TYPE: 'N'});
                var alltimeZone = [];
                self.timezoneListVar = function() {
                    if ($.isEmptyObject(alltimeZone)) {
                        $.ajax({
                            type: 'POST',
                            url: "rest/lifecycle/sql",
                            dataType: "json",
                            data: JSON.stringify({"NAME": "timezone_list"}),
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR) {
                                ko.utils.arrayForEach(data, function(property) {
                                    alltimeZone.push(property.TZNAME);
                                });
                            }
                        });
                    }
                    return alltimeZone;
                };
                init();

                self.sortFn = function(a, b) {
                    if (a == b)
                        return 0;
                    if (a < b)
                        return -1;
                    return 1;
                };

                ko.observableArray.fn.pushAll = function(valuesToPush) {
                    var underlyingArray = this();
                    this.valueWillMutate();
                    ko.utils.arrayPushAll(underlyingArray, valuesToPush);
                    this.valueHasMutated();
                    return this;
                };

                self.lifecycleStatus = {
                    new : "New",
                    sentToGateway: "SentToGateway",
                    analysed: "Analysed",
                    published: "Published",
                    scoped: "Scoped",
                    cancelled: "Cancelled",
                    active: "Active",
                    closed: "Closed"
                };
                self.numericRule = {
                    required: true,
                    pattern: {
                        message: 'Please Enter Numeric Value',
                        params: '^[0-9]*$'
                    }
                };

                function init() {
                    self.timezoneListVar();
                }

                self.engStatusList = function() {
                    var statusList = [
                        {name: "New", value: "New"},
                        {name: "Active", value: "Active"},
                        {name: "Scoped", value: "Scoped"},
                        {name: "Cancelled", value: "Cancelled"},
                        {name: "Closed", value: "Closed"}
                    ];
                    return statusList;
                };


                self.newEngagement = function() {
                    var eng = {
                        engagementId: ko.observable().extend(self.numericRule),
                        serviceId: ko.observable().extend(self.numericRule),
                        description: ko.observable().extend({required: true}),
                        createBy: ko.observable(),
                        createDate: ko.observable(),
                        lastModifyBy: ko.observable(),
                        status: ko.observable(),
                        title: ko.observable(),
                        properties: ko.observableArray([])
                    }
                    return eng;
                };

                self.newscenario = function() {
                    var scenario = {
                        engagementId: ko.observable(null).extend(self.numericRule),
                        scenarioId: ko.observable().extend(self.numericRule),
                        description: ko.observable(null),
                        createBy: ko.observable(null),
                        createDate: ko.observable(null),
                        lastModifyBy: ko.observable(null),
                        status: ko.observable(null),
                        properties: ko.observableArray([])
                    }

                    return scenario;
                };

                self.newProperty = function() {
                    var prop = {
                        id: ko.observable(),
                        scope: ko.observable(),
                        name: ko.observable(),
                        value: ko.observable(),
                        dateValue: ko.observable(),
                        refId: ko.observable()
                    }
                    return prop;
                };

                self.resetObject = function(object) {
                    console.log("Resetting all properties of object to null...");
                    for (key in object) {
                        if (key == 'properties') {
                            if (object[key] !== null)
                                object[key].removeAll();
                            else
                                object[key] = ko.observableArray();
                        } else {
                            if (ko.isObservable(object[key]))
                                object[key](null);
                            else
                                object[key] = null;
                        }

                    }
                };

                self.populateEngagement = function(data, eng)
                {
                    console.log("populateEngagement.....:");
                    for (key in data) {
                        if (eng[key] && key !== 'properties')
                        {
                            eng[key](data[key]);
                        }
                    }
                    if (data.properties)
                    {
                        console.log("Populating  Properties.......")
                        var props = $.map(data.properties, function(item) {
                            var prop = self.newProperty();
                            self.populateProperty(item, prop, eng.serviceId());
                            return prop;
                        });

                        eng.properties(props);
                    }

                    console.log("Returning  Engagement:" + ko.toJSON(eng));

                };
                self.populateScenario = function(data, scenario)
                {
                    console.log("populateScenario.....:");

                    for (key in data) {
                        if (scenario[key] && key !== 'properties')
                        {
                            scenario[key](data[key]);
                        }
                    }

                    if (data.properties)
                    {
                        console.log("Populating  Properties.......")
                        var props = $.map(data.properties, function(item) {

                            var prop = self.newProperty();
                            self.populateProperty(item, prop, data.serviceId);
                            return prop;
                        });

                        scenario.properties(props);

                        console.log("Returning  scenario:" + ko.toJSON(scenario));
                        return scenario;
                    }
                    ;

                };
                self.populateProperty = function(data, prop, serviceId)
                {

                    for (key in data) {
                        if (prop[key])
                        {
                            prop[key](data[key]);
                        }
                    }

                    if (serviceId)
                        bindPropertyValidation(prop, serviceId);
                    else
                    {
                        bindPropertyValidation(prop);
                    }

                    return prop;
                };


                function bindPropertyValidation(prop, serviceId)
                {
                    console.log("Binding Validations for Prop:" + ko.toJSON(prop) + " with the serviceId:" + serviceId);
                    var paramDef;
                    paramDef = ko.utils.arrayFirst(self.propValidationRules, function(item) {
                        return (item.PARAMETER_NAME.indexOf(prop.name()) != -1 && item.SCOPE.indexOf(prop.scope()) != -1);
                    });

                    if (serviceId && serviceId != null && paramDef == null)
                    {
                        paramDef = ko.utils.arrayFirst(self.getServiceParamDef(serviceId), function(item) {
                            return (item.PARAMETER_NAME.indexOf(prop.name()) != -1 && item.SCOPE.indexOf(prop.scope()) != -1);
                        });
                    }
                    if (paramDef != null)
                    {
                        if (ko.isObservable(prop.value))
                        {
                            var rule = {};
                            if (paramDef.MANDATORY == 'Y')
                                rule['required'] = true;
                            else
                                rule['required'] = false;
                            if (paramDef.DATA_TYPE == 'N')
                            {
                                if (paramDef.LOWER_VALUE != null)
                                    rule['min'] = paramDef.LOWER_VALUE;
                                if (paramDef.UPPER_VALUE != null)
                                    rule['max'] = paramDef.UPPER_VALUE;
                                rule['pattern'] = {
                                    message: 'Please Enter Numeric Value',
                                    params: '[0-9]'
                                };
                            }
                            //Applying validation bindings
                            prop.value.extend(rule);
                        }
                    }

                }
                self.newSrcConfigRow = function()
                {
                    var configRow = {
                        TARGET_GUID: null,
                        SPECINT_OVERRIDE: null,
                        MEM_PCT_GROWTH: null,
                        CPU_PCT_GROWTH: null,
                        DISK_PCT_GROWTH: null,
                        IO_PCT_GROWTH: null,
                        INC_RAC_DISK_ANALYSIS: null,
                        HCC_COMPRESS_SEG_SIZE_GB: null,
                        ADV_COMPRESS_SEG_SIZE_GB: null,
                        EXCLUDE_TARGET: null
                    };
                    return configRow;
                };

                self.populateSrcConfigRows = function(props, rowList, serviceId)
                {
                    console.log("Populating Source Config Rows.....");
                    if (props && props().length > 0)
                    {
                        $.each(props(), function(idx, item) {
                            if (item.scope() && item.refId() && item.scope() == 'SOURCE')
                            {
                                var configRow = null;
                                $.each(rowList(), function(idx, configItem)
                                {
                                    // console.log("configRow ......." + ko.toJSON(configItem));
                                    if (configItem.TARGET_GUID() == item.refId())
                                    {
                                        //console.log("Found configRow for refId:" + item.refId());
                                        configRow = configItem;
                                        return false;
                                    }
                                });
                                if (configRow == null)
                                {
                                    configRow = self.newSrcConfigRow();
                                    configRow.TARGET_GUID = item.refId;
                                    rowList().push(configRow);
                                }
                                for (key in configRow) {
                                    if (item.name() == key)
                                    {
                                        configRow[key] = item.value;
                                        break;
                                    }
                                }
                            }

                        });

                    }
                    //create new properties if not exists in input props
                    $.each(rowList(), function(idx, configItem)
                    {
                        for (key in configItem) {
                            if (configItem[key] == null)
                            {
                                var prop = self.newProperty();
                                self.populateProperty({scope: 'SOURCE', name: key, refId: configItem.TARGET_GUID}, prop, serviceId);
                                props.push(prop);

                            }
                        }

                    });

                };

                self.getProperty = function(propList, filters) {
                    var prop = ko.utils.arrayFirst(propList(), function(item) {

                        if (filters.scope && filters.name && filters.refid)
                        {
                            return (item.scope().indexOf(filters.scope) !== -1 && item.name().indexOf(filters.name) !== -1 && item.refId().indexOf(filters.refId) !== -1);
                        }
                        else
                        if (filters.scope && filters.name)
                        {
                            return (item.scope().indexOf(filters.scope) !== -1 && item.name().indexOf(filters.name) !== -1);
                        }
                        if (filters.name)
                        {
                            return item.name().indexOf(filters.name);
                        }
                        else
                            false;

                    });

                    if (prop == null)
                    {
                        console.log("Creating new Property for the filters:" + JSON.stringify(filters));
                        prop = self.newProperty();
                        self.populateProperty(filters, prop, filters.serviceId);
                        propList.push(prop);
                    }
                    return prop;

                };


                self.getServiceList = function() {
                    if (self.serviceList.length < 1)
                    {
                        console.log("Getting ServiceList.....");
                        $.ajax({
                            type: 'POST',
                            url: "rest/lifecycle/sql",
//                            url: "rest/lifecycle/sql/service_list",
                            dataType: "json",
                            async: false,
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({NAME: "service_list"}),
                            success: function(data, textStatus, jqXHR) {
                                ko.utils.arrayForEach(data, function(item) {
                                    self.serviceList.push(item);
                                })
                            }
                        });
                    }
                    return self.serviceList;
                };


                self.getServiceParamDef = function(serviceId) {
                    if (!self.serviceParamList[serviceId])
                    {
                        console.log("Getting ServiceParamDef.... for serviceId:" + serviceId);
                        $.ajax({
                            type: 'POST',
                            url: "rest/lifecycle/sql",
                            dataType: "json",
                            async: false,
                            contentType: "application/json; charset=utf-8",
                            data: JSON.stringify({NAME: "service_param_list", SERVICE_ID: serviceId}),
                            success: function(data, textStatus, jqXHR) {
                                self.serviceParamList['' + serviceId] = data;

                            }
                        });
                    }
                    return self.serviceParamList[serviceId];
                }


                self.getNewHexId = function() {
                    return Math.floor((Math.random() * (65535 - 4106 + 1)) + 4106).toString(16).toUpperCase();
                }



                function formatHrORMin(n) {
                    return n > 9 ? "" + n : "0" + date.getHours();
                }


                self.formatDate = function(d) {
                    console.log("Converting date to a specified date format");
                    date = new Date(d);
                    var str = date.getDate() + "-" + monthList[date.getMonth()] + "-" + date.getFullYear() + " " + formatHrORMin(date.getHours()) + ":" + formatHrORMin(date.getMinutes());
                    return str;
                };

            }
            return new LifeCycleServiceUtil();
        }
);