/**
 *
 * @param sqlData
 * @param chartDef {{ groupColumn : String required, dataColumns : Array optional}}
 * @returns {{groups: Array, data: Array}}
 *
 * @author xin.h.li@oracle.com
 */
define(['jquery'], function () {

    function ChartUtil() {
        var self = this;
        self.convertToChartData = function (sqlData, chartDef) {
            var chartData = {
                "groups": [],
                "data": []
            };
            $.each(sqlData, function (k, v) {
                if (k === chartDef.groupColumn) {
                    chartData.groups = v;
                } else {
                    if (!chartDef.dataColumns || chartDef.dataColumns.indexOf(k) !== -1) {
                        chartData.data.push({
                            "name": k,
                            "items": v
                        });
                    }
                }
            });
            return chartData;
        };
    }

    return new ChartUtil();
});


