/*
 This is a placeholder for any js that is needed for the style guide
 */
define(['jquery', 'knockout', 'google-code-prettify', 'date-util', 'modules/common/dialog-utils'],
    function ($, ko, prettify, dateUtil, dialog) {
      var StyleViewModel = function () {
        var self = this;

        ko.bindingHandlers.stopBinding = {
          init: function () {
            return { controlsDescendantBindings: true };
          }
        };

        self.userList = ko.observableArray(null);

        $.getJSON("/assets/js/mock/usermgmtservice/list.json",
            function (data) {
              self.userList(data);
            }
        );


        /*
         self.gridOptions = { data: self.userList,
         showFilter: true,
         enablePaging: true,
         fixedViewPortHeight: true,
         columnDefs: [{field: 'userID', displayName: 'User ID'},{field: 'firstName', displayName: 'Name'},{field: 'lastName', displayName: 'Last Name'},{field: 'status', displayName: 'Status'}]};
         */

        self.gridOptionsAction = {
          data: self.userList,
          showFilter: true,
          enablePaging: false,
          fixedViewPortHeight: true,
          columnDefs: [
            {field: 'userID', displayName: 'User ID'},
            {field: 'firstName', displayName: 'Name'},
            {field: 'lastName', displayName: 'Last Name'},
            {field: 'status', displayName: 'Action', cellTemplate: '<div style="text-align:center"><button data-bind="click: $parent.$grid.$userViewModel.delete.bind($data, $parent.entity.id)">Delete</button></div>'}
          ]};

        self.delete = function (rowid, event) {
          alert('deleting... ' + rowid);
          event.stopPropagation();
        };


        self.gridOptionsFormat = {
          data: self.userList,
          showFilter: true,
          enablePaging: false,
          fixedViewPortHeight: true,
          columnDefs: [
            {field: 'userID', displayName: 'User ID'},
            {field: 'firstName', displayName: 'Name'},
            {field: 'lastName', displayName: 'Last Name'},
            {field: 'status', displayName: 'Status', cellTemplate: '<span data-bind=\"text: getProperty($parent) == 0 ? \'Disabled\' : \'Enabled\' \"></span>'}
          ]};

        self.selected = ko.observableArray([]);

        self.deleteSelect = function() {
            alert("Deleting " + self.selected().length + " rows");
        };

        self.addNew = function() {
            alert("Add new row");
        };

        self.afterRender = function () {
            prettify.prettyPrint();
            /* resize the kogrid when tab is activated */
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

                /* optionally, you may check if it's the tab that you want to resize */
                //var target = $(e.target).attr("href");
                //if ((target != '#tables')) {alert("It is not Tables tab, skip!"); return;};

                /* There are two ways to resize the grid, use the first approach
                 if you have elements other than kogrid
                 that should also be resized */

                //$(window).resize();

                $(".sampleGrid").each(function(i, element) {
                    var grid = ko.dataFor(element.children[0]); // Get an instance of the grid
                    window.kg.domUtilityService.UpdateGridLayout(grid); // Force the grid to recalculate its layout
                    grid.configureColumnWidths();
                });

            });
        };

        //
        //    Date/Time variables and functions
        //
        var now = new Date();
        self.exampleDate1= ko.observable(now);
        self.exampleDate2= ko.observable(now);
        self.exampleDate3= ko.observable(now);

        self.confirmationDialog = function() {dialog.confirmationDialog('This is a confirmation box, you should say something here.',
                                                                        function(){console.log('OK clicked');},
                                                                        function(){console.log('Cancel clicked');},
                                                                        'Yes|No');};
        self.alertSuccess = function() {dialog.alertSuccess('This is a test alert box, you should say something here.');};
        self.alertError = function() {dialog.alertError('This is a test alert box, you should say something here.');};
        self.alertWarning = function() {dialog.alertWarning('This is a test alert box, you should say something here.');};
        self.alertInfo = function() {dialog.alertInfo('This is a test alert box, you should say something here.');};
        self.showModalDialog = function() {dialog.showModalDialog('Validation Error',
            'Data validation failed, please see the error message besides the failed input field.',
            null, 'OK', null, null);};

        self.notify = function() {dialog.notify('Title goes here', 'Your message goes here!');};
        self.notifySuccess = function() {dialog.notifySuccess('Title goes here', 'Your message goes here!');};
        self.notifyInfo =function() {dialog.notifyInfo('Title goes here', 'Your message goes here!');};
        self.notifyError = function() {dialog.notifyError('Title goes here', 'Your message goes here!');};

      };

      return new StyleViewModel();
    }
);
