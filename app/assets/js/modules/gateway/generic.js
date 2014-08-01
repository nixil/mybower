define(['jquery', 'knockout', 'modules/common/dialog-utils'],
        function($, ko, dialog) {

            var GenericViewModel = function() {
                var self = this;
                self.id = ko.observable();
                self.name = ko.observable();
                self.sortOrder = ko.observable();
                self.cmdString = ko.observable();
                self.output = ko.observableArray();
                self.commands = ko.observableArray();

                //////////// List page ////////////

                self.search = function() {
                    $.ajax({
                        type: 'POST',
                        url: "rest/gatewayservice/searchCommand",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: self.name(),
                        success: function(data, textStatus, jqXHR) {
                            self.commands(data);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            dialog.alertError("Error " + errorThrown);
                        }
                    });
                };

                self.genericsGrid = {data: self.commands,
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
                    showToolbar: true,
                    rightToolbarTemplate: '<button type="button" class="btn btn-sm btn-primary" data-bind="click: createCommand"><i class="fa fa-plus"></i>&nbsp; &nbsp; Create Command &nbsp; &nbsp;</button>',
                    columnDefs: [
                        {field: 'id', displayName: 'ID'},
                        {field: 'name', displayName: 'Name'},
                        {field: 'cmdString', displayName: 'Command String'},
                        {field: 'sortOrder', displayName: 'Sort Order'},
                        {field: 'id', displayName: 'Action', width: '250px', cellTemplate: '<div class="kgAction">' +
                                    '<button class="btn btn-primary btn-xs" data-bind="click: $parent.$grid.$userViewModel.editCommand.bind($data, $parent.entity.id)"><i class="glyphicon glyphicon-pencil"></i> Edit </button>' +
                                    '<button class="btn btn-default btn-xs" data-bind="click: $parent.$grid.$userViewModel.confirmDelete.bind($data, $parent.entity)"><i class="glyphicon glyphicon-remove"></i> Delete </button>' +
                                    '</div>'}
                    ]};

                self.createCommand = function() {
                    ko.validation.disableValidation();
                    self.id(null);
                    self.sortOrder(null);
                    self.cmdString(null);
                    self.name(null);
                    ko.validation.enableValidation();
                    location.hash = '#/gateway/generic/' + 0;
                };

                self.editCommand = function(id) {
                    location.hash = '#/gateway/generic/' + id;
                };

                self.confirmDelete = function(cmd) {
                    dialog.confirmationDialog('Are you sure you want to delete command with ID = ' + cmd.id + ' ?', self.deleteCommand(cmd.id), null, 'Yes|No');
                };

                self.deleteCommand = function(deleteId) {
                    if (deleteId != null) {
                        $.ajax({
                            type: 'POST',
                            url: "rest/gatewayservice/deleteCommand",
                            dataType: "json", // data type of response
                            contentType: "application/json; charset=utf-8",
                            //data: deleteId,
                            data: JSON.stringify(deleteId),
                            success: function(data, textStatus, jqXHR) {
                                $.each(self.commands(), function(idx, item) {
                                    if (item.id == deleteId) {
                                        self.commands.splice(idx, 1);
                                    }
                                });

                                dialog.notifySuccess('Operation Succeeded', 'Command with ID = ' + deleteId + ' has been removed');
                            }
                        });
                    }
                };

                //////////// Command page ////////////

                self.beforeCommand = function(context) {
                    var id = parseInt(context.params['id']);
                    if (id > 0) {
                        $.each(self.commands(), function(index, element) {
                            if (element.id == id) {
                                for (var key in element) {
                                    if (self.hasOwnProperty(key)) {
                                        self[key](element[key]);
                                    }
                                }
                            }
                        });
                    }
                };

                self.execute = function() {
                    $.ajax({
                        type: 'POST',
                        url: "rest/gatewayservice/executeCommand",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: self.cmdString(),
                        success: function(data, textStatus, jqXHR) {
                            self.output(data);
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            dialog.alertError("Error " + errorThrown);
                        }
                    });
                };

                self.save = function() {
                    var editedObj = {
                        id: self.id,
                        name: self.name,
                        sortOrder: self.sortOrder,
                        cmdString: self.cmdString
                    };
                    ko.validation.group(editedObj, {evaluate: true});
                    if (editedObj.errors().length > 0) {
                        dialog.alertError('Data validation failed, please see the error message with the failed input field!');
                        return;
                    }

                    //transform from ko observable to pure java object
                    delete editedObj.errors;
                    var editedData = ko.toJS(editedObj);
                    $.ajax({
                        type: 'POST',
                        url: "rest/gatewayservice/saveUpdateCommand",
                        dataType: "json", // data type of response
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify(editedData),
                        success: function(data, textStatus, jqXHR) {
                            if (editedData.id == null) {
                                self.commands.push(data);
                                self.id(data.id);
                                dialog.notifySuccess('Operation Succeeded', 'Command has been saved');
                            } else {
                                $.each(self.commands(), function(idx, item) {
                                    if (item.id == data.id) {
                                        var list = self.commands();
                                        list[idx] = data;
                                        self.commands(list);
                                    }
                                });
                                dialog.notifySuccess('Operation Succeeded', 'Command has been updated');
                            }
                            location.hash = '#/gateway/genericlist';
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            dialog.alertError("Error " + errorThrown);
                        }
                    });
                };

                self.cancelEdit = function() {
                    location.hash = '#/gateway/genericlist';
                };
            };

            return new GenericViewModel();
        }
);
