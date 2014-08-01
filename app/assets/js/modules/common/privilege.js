/**
 * Created by alex on 4/25/14.
 * xin.h.li@oracle.com
 */
define(['jquery'],
    function ($) {

        function Privilege() {
            var self = this;
            self.id = ko.observable();
            self.name = ko.observable();
            self.description = ko.observable();
            self.resourceType = ko.observable();
        }

        function PrivilegeService() {
            var self = this;
            self.getPrivilegeList = function (listHandler) {
                $.getJSON("rest/security/privileges", function(remotePrivileges) {
                    var privileges = $.map(remotePrivileges, function(item) {
                        var privilege = new Privilege();
                        privilege.id(item.id);
                        privilege.name(item.name);
                        privilege.description(item.description);
                        privilege.resourceType(item.resourceType);
                        return privilege;
                    });
                    listHandler(privileges);
                });
            };
        }

        return new PrivilegeService();

    });
