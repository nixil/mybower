/**
 * Created by apple on 3/19/14.
 */
define(['jquery', 'chart-util'],
    function ($, chartUtil) {
        var SqlService = function () {
            var self = this;

            self.getSqlData = function (sqlName, callback) {
                var url = "rest/data/sql/" + sqlName,
                    restCall = $.getJSON(url);
                if(callback ) {
                    restCall.success(callback);
                }
                return restCall;
            };

            self.createNamedSql = function(namedSql, callback){
                var restCall = $.post("rest/data/sql/", namedSql);
                if(callback) {
                    restCall.success(callback);
                }
                return restCall;
            };

            self.getNamedSqlList = function (callback) {
                var restCall = $.getJSON("rest/data/sql_list");
                if(callback) {
                    restCall.success(callback);
                }
                return restCall;
            };

            self.getSqlNameList = function (callback) {
                var restCall = $.getJSON("rest/data/sql_name_list");
                if(callback ) {
                    restCall.success(callback);
                }
                return restCall;
            };
        };

        return new SqlService();
    });
