/**
 * Created by apple on 4/25/14.
 */
define(['jquery', 'knockout','google-code-prettify'],
    function ($, ko, prettify) {

        function TestNamedSqlView() {
            var self = this;
            self.testSqlResult = ko.observable("");

            self.testNamedSql = function () {
                var _url = "rest/data/sql/"+self.testSqlUrl();
                self.sqlRequestURL(_url);
                $.getJSON(_url, function (data, textStatus, jqXHR) {
                        self.testSqlResult(JSON.stringify(data));
                    }
                );
            };

            self.testSqlUrl = ko.observable("double_param?cpu_low=20&cpu_high=30");
            self.sqlRequestURL = ko.observable();

            self.afterRender = function () {
                prettify.prettyPrint();
            };
        }

        return new TestNamedSqlView();

    }
);