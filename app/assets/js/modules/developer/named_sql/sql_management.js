/**
 * Created by apple on 3/24/14.
 */
define(["jquery", "knockout", "sql-service", 'google-code-prettify','modules/common/dialog-utils', 'prettify-sql'],
    function ($, ko, sqlService, prettify, dialog) {

        function NamedSqlViewModel() {
            var self = this;

            function SQLParam(name, type) {
                this.name = name ? ko.observable(name) : ko.observable();
                this.type = type ? ko.observable(type) : ko.observable();
            }

            function NamedSQL() {
                var self = this;
                self.id = ko.observable();
                self.name = ko.observable();
                self.sql = ko.observable();
                self.dataSourceJNDI = ko.observable();
                self.privileges = ko.observableArray();
                self.paramList = ko.observableArray();

                self.newParam = function () {
                    self.paramList.push(new SQLParam());
                };

                self.removeParam = function () {
                    self.paramList.remove(this);
                };

                self.sql.subscribe(function (newValue) {
                    var i;

                    if (!newValue) {
                        return;
                    }

                    // Extract all params, in the form :param_name, and add them
                    // as SQL params
                    var params = newValue.match(/\s:\w+\b/g);
                    if (!params) {
                        self.paramList.removeAll();
                    } else {
                        $.each(params, function (index, param) {
                            var p = param.split(":")[1];
                            // check to see if param is already defined
                            for (i = 0; i < self.paramList().length; i++) {
                                if (self.paramList()[i].name() === p) {
                                    return;
                                }
                            }

                            self.paramList.push(new SQLParam(p));
                        });

                        // now go through the list and remove params which are no longer in the SQL
                        for (i = 0; i < self.paramList().length; i++) {
                            if (params.indexOf(" :" + self.paramList()[i].name()) === -1) {
                                self.paramList.splice(i, 1);
                                i--;
                            }
                        }
                    }
                });

                self.resetToNew = function () {
                    self.id();
                    self.name('');
                    self.sql('');
                    self.dataSourceJNDI('');
                    self.privileges([]);
                    self.paramList([]);
                };
            }

            function Privilege() {
                var self = this;
                self.id = ko.observable();
                self.name = ko.observable();
                self.description = ko.observable();
                self.resourceType = ko.observable();
            }

            function Option(name, value) {
                this.name = name;
                this.value = value;
            }

            self.namedSqlList = ko.observableArray();
            self.formNamedSQL = new NamedSQL();
            self.rawJsonUrl = ko.observable();
            self.availablePrivileges = ko.observableArray();
            self.availableDataSources = ko.observableArray();
            self.availableDataSources.push(new Option("Gateway Portal Database", "jdbc/portal"));
            self.availableDataSources.push(new Option("Lifecycle Services Database", "jdbc/acscloud"));
            self.parameterTypes = ["int", "long", "string", "date", "date-time"];
            self.groupColumn = ko.observable();
            self.chartJsonString = ko.observable();
            self.chartJsonUrl = ko.observable();

            self.gridOptions = {
                data: self.namedSqlList,
                enablePaging: true,
                showToolbar: true,
                multiSelect: false,
                canSelectRows: false,
                displaySelectionCheckbox: false,
                disableTextSelection: false,
                fixedViewPortHeight: false,
                pagingOptions: {
                    pageSizes: ko.observableArray([20, 50, 100, 500]),
                    pageSize: ko.observable(20),
                    totalServerItems: ko.observable(0),
                    currentPage: ko.observable(1)
                },
                rightToolbarTemplate: '<button type="button" class="btn btn-primary btn-sm" data-bind="click: createNewSql"><i class="fa fa-plus"></i>&nbsp;&nbsp;Create Named SQL</button>',
                columnDefs: [
                    {field: 'id', displayName: 'ID', width: '5%'},
                    {field: 'name', displayName: 'Name', width: '20%'},
                    {field: 'sql', displayName: 'SQL', width: '35%'},
                    {field: 'privileges', displayName: 'Privileges', width: '20%',
                        cellTemplate: '<div data-bind=\"foreach: getProperty($parent)\"><span class=\"badge\" data-bind=\"text: name\"></span></div>'},
                    {field: 'id', displayName: 'Actions', width: '20%', sortable: false,
                        cellTemplate: '<div class="kgAction"><button class="btn btn-default btn-xs" data-bind="click: $parent.$grid.$userViewModel.editSql.bind($data, $parent.entity.id)"><i class="fa fa-pencil"></i>&nbsp;&nbsp;Edit</button>' +
                            '<button type="button" class="btn btn-default btn-xs" data-bind=\"click: $parent.$grid.$userViewModel.test.bind($data, $parent.entity.id)\"><i class="fa fa-check-square-o"></i>&nbsp;&nbsp;Test</button>' +
                            '<button type="button" class="btn btn-default btn-xs" data-bind=\"click: $parent.$grid.$userViewModel.remove.bind($data, $parent.entity)\"><i class="fa fa-times"></i>&nbsp;&nbsp;Delete</button></div>'
                    }
                ]
            };
            self.testSqlResults = ko.observableArray();
            self.testSqlResultsString = ko.computed(function() {
                return JSON.stringify(self.testSqlResults());
            });

            self.remove = function (selected, event) {
                var confirm = window.confirm("Please confirm to delete this item.");
                if (confirm === true) {
                    $.ajax({
                        type: "DELETE",
                        url: "rest/data/sql/" + selected.id,
                        success: function (data, textStatus, jqXHR) {
                            self.namedSqlList.remove(selected);
                        }
                    });
                } else {
                    console.log("no");
                }
            };

            self.createNewSql = function () {
                self.formNamedSQL = new NamedSQL();
                location.hash = '#/developer/sql/0';
            };

            self.editSql = function (id) {
                location.hash = '#/developer/sql/' + id;
            };

            self.test = function (id) {
                location.hash = '#/developer/sql/test/' + id;
            };

            self.removeNamedSQL = function () {
                var confirm = window.confirm("Please confirm to delete this item.");
                var selected = this;
                if (confirm === true) {
                    $.ajax({
                        type: "DELETE",
                        url: "rest/data/sql/" + this.id,
                        success: function (data, textStatus, jqXHR) {
                            self.namedSqlList.remove(selected);
                        }
                    });
                } else {
                    console.log("no");
                }
            };

            self.saveNamedSQL = function () {
                //validate param list first
                var i;
                var tmp={};
                for(i = 0; i< self.formNamedSQL.paramList().length;i ++) {
                  var paramName = self.formNamedSQL.paramList()[i].name();
                  if(tmp[paramName]===1) {
                    dialog.alertError('You have defined duplicated sql params. Please Correct before saving.');
                    return;
                  } else {
                    tmp[paramName] = 1; /*1 means nothing but defiend.*/
                  }
                }
                var namedSQL = ko.toJS(self.formNamedSQL);

                if(namedSQL.id) { //update existed
                    $.ajax({
                        type: "PUT",
                        url: "rest/namedSql/"+namedSQL.id,
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(namedSQL),
                        success: function (updated, textStatus, jqXHR) {
                            dialog.showModalDialog("Success",
                                "Update Named SQL succeed. ",
                                "Continue Edit", "Done",
                                function() { //return to named sql list
                                    location.hash = "#/developer/sql/list";
                                },
                                function() {
                                    //do nothing;
                                });
                        }
                    });
                } else { //create new
                    $.ajax({
                        type: "POST",
                        url: "rest/namedSql/",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(namedSQL),
                        success: function (created, textStatus, jqXHR) {
                            dialog.showModalDialog("Success",
                                "Create Named SQL succeed. ",
                                "Create Next", "Done",
                                function() {
                                    location.hash = "#/developer/sql/list";
                                },
                                function() {
                                    self.formNamedSQL.resetToNew();
                                });
                        }
                    });
                }
            };

            self.cancelEdit = function () {
                location.hash = '#/developer/sql/list';
            };

            self.beforeEdit = function (context) {
                var id = context.params['id'];

                // We will treat an id == 0 as a new record, and id > 0 as existing record
                if (id && !isNaN(parseInt(id, 10))) {
                    if (parseInt(id, 10) > 0) {
                        self.formNamedSQL = fetchNamedSql(parseInt(id));
                    } else {
                        loadPrivilegeList();
                    }
                }
            };

            self.beforeTest = function (context) {
                var id = context.params['id'];
                var ns;

                // We will treat an id == 0 as a new record, and id > 0 as existing record
                if (id && !isNaN(parseInt(id, 10))) {
                    ns = fetchNamedSql(parseInt(id, 10));

                    // add a value property to each parameter to hold the test values
                    $.each(ns.paramList(), function(i, v) {
                        v.testValue = ko.observable();
                    });

                    self.formNamedSQL = ns;
                }
            };

            self.afterRender = function () {
                prettify.prettyPrint();
            };

            self.resultColumns = ko.observableArray();
            self.testNamedSql = function () {
                var params = {};
                $.each(self.formNamedSQL.paramList(), function(i, v) {
                    params[v.name()] = v.testValue();
                });

                var _url = "rest/data/sql/" + self.formNamedSQL.name();
                if (self.formNamedSQL.paramList().length > 0) _url += ("?" + $.param(params));
                self.rawJsonUrl(_url);
                $.getJSON(_url, function (data) {
                        if (!data[0]) {
                            return false;
                        }

                        // peek at the first record to determine column headings
                        var columns = [];
                        var resultColumns = [];
                        for (var column in data[0]) {
                            columns.push({
                                field: column
                            });
                            resultColumns.push(column);
                        }

                        self.resultGridOptions = {
                            data: self.testSqlResults,
                            showToolbar: true,
                            multiSelect: false,
                            canSelectRows: false,
                            displaySelectionCheckbox: false,
                            disableTextSelection: false,
                            fixedViewPortHeight: false,
                            columnDefs: columns
                        };

                        self.testSqlResults(data);
                        self.resultColumns(resultColumns);

                        setupGridRefresh();
                        prettify.prettyPrint();
                    }
                );
            };

            self.generateChartJson = function() {
                var params = {};
                $.each(self.formNamedSQL.paramList(), function(i, v) {
                    params[v.name()] = v.testValue();
                });

                var _url = "rest/data/sql/chart/" + self.formNamedSQL.name() + "/" + self.groupColumn();
                if (self.formNamedSQL.paramList().length > 0) _url += ("?" + $.param(params));
                self.chartJsonUrl(_url);

                $.getJSON(_url, function (data) {
                    self.chartJsonString(JSON.stringify(data));
                    prettify.prettyPrint();
                });
            };

            self.gridRefreshActivated = false;
            var setupGridRefresh = function() {
                if (self.gridRefreshActivated) return;

                $('#results_grid_tab').on('shown.bs.tab', function (e) {
                    $(window).resize();
                });

                self.gridRefreshActivated = true;
            };

            var fetchNamedSql = function (id) {
                var ns = new NamedSQL();

                $.ajax({
                    async: false,
                    url: "rest/namedSql/" + id,
                    dataType: "json",
                    success: function(remoteSql) {
                        ns.id(remoteSql.id);
                        ns.name(remoteSql.name);
                        /*paramList must be setted before sql.
                         Because sql attribute has a subscrbed event handler which may cause duplicated param list.
                         */
                        $.each(remoteSql.paramList, function(index, remoteParam) {
                            ns.paramList.push(new SQLParam(remoteParam.name, remoteParam.type));
                        });
                        ns.sql(remoteSql.sql);
                        ns.dataSourceJNDI(remoteSql.dataSourceJNDI);
                        ns.privileges($.map(remoteSql.privileges, function (item) {
                            return item.id.toString();
                        }));
                    }
                });

                return ns;
            };

            var loadNamedSqlList = function () {
                sqlService.getNamedSqlList(function (data) {
                    self.namedSqlList(data);
                });
            };

            var loadPrivilegeList = function () {
                if (self.availablePrivileges().length === 0) {
                    $.getJSON("rest/security/privileges", function (data) {
                        self.availablePrivileges(data);
                    });
                }
            };

            self.beforeList = function () {
                loadNamedSqlList();
                loadPrivilegeList();
            };
        }

        return new NamedSqlViewModel();
    }
);
