define(['jquery', 'knockout'],
    function($, ko) {

        console.log("defining service access definition viewmodel...");
        return {sads: [{name: 'HTTP'},
                      {name: 'TCP'},
                      {name: 'SNMP'},
                      {name: 'Database'}],
                unload: function() {
                    console.log("try unload probe module...");

                    requirejs.undef('modules/monitors/probes');
                    /*

                    var context = require.s.contexts['_'];
                    //console.log(context);

                    console.log(context.defined);
                    //delete context.defined['modules/monitors/probes'];

                    console.log(context.specified);
                    //delete context.specified['modules/monitors/probes'];

                    console.log(context.loaded);
                    //delete context.loaded['modules/monitors/probes'];

                    var scripts = document.getElementsByTagName('script');
                    for (var i = scripts.length - 1; i >= 0; i--) {
                        var script = scripts[i];
                        if (script.getAttribute('data-requiremodule') === 'modules/monitors/probes') {
                            console.log("found script: ");
                            console.log(script);
                            script.parentNode.removeChild(script);
                            break;
                        }
                    }
                    */

                }}
    }
);
