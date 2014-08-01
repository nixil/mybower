/**
 * This function check if the module to be loaded is from another page
 * If yes, it will unload all modules previously loaded for the previous page
 * Doing this to make sure the browser memory is not over blown by javascript modules
 */
requirejs.onResourceLoad = function (context, map, depArray) {
    //console.log("url: " + window.location.href + " loading...");
    //console.log(map);

    if (typeof _gLoadedModules === 'undefined') _gLoadedModules = [];
    if (typeof _gLastUrl === 'undefined') _gLastUrl = window.location.href;

    if (_gLastUrl === window.location.href){
        _gLoadedModules.push(map.name);
    } else {
        //console.log("change to url detected");

        var newUrl = window.location.href.split('#');
        var oldUrl = _gLastUrl.split('#');

        var getModuleName = function(url) {
            if (url) {
                return url[0] === '/' ? url.split('/')[1] : url.split('/')[0];
            } else {
                return '';
            }
        };

        var newModule = getModuleName(newUrl[1]);
        var oldModule = getModuleName(oldUrl[1]);

        if (newUrl[0] === oldUrl[0] && newModule !== oldModule) {

                //console.log("try to unload all the module for: " + oldUrl);
                //console.log(_gLoadedModules);

                for (var i in _gLoadedModules) {
                    var moduleName = _gLoadedModules[i];
                    //console.log(moduleName + " : " + moduleName.indexOf('modules/') + " : " + moduleName.indexOf('modules/common/'));
                    if (moduleName &&
                        moduleName.indexOf('modules/') === 0 &&
                        moduleName.indexOf('modules/common/') === -1) {
                            console.log("try unload module: " + moduleName);
                            requirejs.undef(moduleName);
                    }
                }
                _gLoadedModules = [];
        }

        _gLoadedModules.push(map.name);
        _gLastUrl = window.location.href;
    }


    //Todo: save the modules loaded for current url
};