define(['jquery', 'knockout', 'app', 'sammy', 'modules/common/user'],
    function ($, ko, app, sammy, user, login) {
    
        console.log('defining routes...');
        
        function RoutesModel() {
        
            var self = this;
    
            /**
             * route configuration parsed from json file
             */
            self.routeConfig = {};
    
            self.configureRoutes = function(data) {
    
                if (typeof data === 'string') {
                    data = JSON && JSON.parse(data) || $.parseJSON(data);
                }
                /**
                 * Sort the menu by order property, to keep the navigation bar in a consolidate order.
                 */
                data.sort(function(a,b) {
                    return a.order - b.order;
                });

                /* turn the returned List into a Map */
                self.routeConfig = {};
                $.each(data, function(idx, item) {
                    self.routeConfig[item.path] = item;
                });
                
    
                /**
                 * create the routes defined in the route.json
                 */
                self.routes = new sammy(function () {

                    var routeHandler = function () {

                        var eventContext = this;

                        /* eventContext.path is like '/index.html#/myservices', we only need the hash part */
                        var hash = '#' + eventContext.path.split('#')[1];

                        var rt = self.routeConfig[hash];

                        //if the rt can't be found, it is a path with named param
                        if (!rt) {
                            //need to find the Sammy route object to get the originalPath
                            var route = self.routes.lookupRoute(eventContext.verb, eventContext.path);
                            rt = self.routeConfig[route.originalPath];
                        }

                        // if the templateNamePath is not specified, use the path as the location
                        if (!rt.templateNamePath) {
                            rt.templateNamePath = 'modules/' +
                                hash.charAt(1) === '/' ? hash.substring(2) : hash.substring(1);
                        }

                        /* dynamically downloading the viewModel js file*/
                        if (rt.viewModelNamePath) {
                            require([rt.viewModelNamePath], function (viewModel) {

                                /* apply the beforeRoutingAction method if specified in routes.json */
                                if (rt.beforeRoutingAction &&
                                    typeof(viewModel[rt.beforeRoutingAction]) === 'function') {
                                    viewModel[rt.beforeRoutingAction](eventContext);
                                }

                                /* Create the object that will hold the app template configuration */
                                var template = new app.TemplateHolder(rt.templateNamePath,
                                    viewModel, rt.animation);

                                /* Add the after render listener, if one is specified */
                                if (rt.afterRenderAction &&
                                    typeof(viewModel[rt.afterRenderAction]) === 'function') {
                                    template.afterRender = viewModel[rt.afterRenderAction];
                                }

                                /* set the app.template observerable to apply the template */
                                app.template(template);

                                /* apply the afterRoutingAction method if specified in routes.json */
                                if (rt.afterRoutingAction &&
                                    typeof(viewModel[rt.afterRoutingAction]) === 'function') {
                                    viewModel[rt.afterRoutingAction](eventContext);
                                }

                                /*
                                 Active Proper Menu
                                 */
                                activeMenuItem(rt.menu || matchMenuByPathPattern(rt.path));
                            });
                        } else {
                            /* set the app.template observerable to apply the template */
                            app.template(new app.TemplateHolder(rt.templateNamePath));
                        }
                    };


                    /* loop through all the routes in the json */
                    for (var path in self.routeConfig) {
    
                        console.log('define route path: ' + path);

                        /*skip route define for hash only path*/
                        if(path === "#") {
                            continue;
                        }
                        // define routes
                        this.route(self.routeConfig[path].verb ? self.routeConfig[path].verb : 'get', path, routeHandler);

                        /* a workaround for Sammyjs to store the original path of a route
                         * Sammyjs will replace route path /xxx/:id into /xxx/([^\/]+)
                         * we have to save the original one for looking up viewmodel in self.routeConfig
                         */
                        var routeArray = self.routes.routes[self.routeConfig[path].verb];
                        routeArray[routeArray.length - 1].originalPath = path;
                    }
                });

                //generate navigation menu data structure from routing table
                app.nagivationMenu.generateMenu(data);

                function activeMenuItem(menuText) {
                    if(!menuText) {
                        return;
                    }
                    $("#side-menu span.menu-label").each(function () {
                        var _$label = $(this);
                        if (menuText == _$label.text()) {
                            _$label.parents("li")
                                .addClass("active")
                                .parent()
                                .collapse('show');
                            return false;
                        }
                        return true;
                    });
                }

                function matchMenuByPathPattern(path) {
                    var parts = path.split("/");
                    var length = parts.length;
                    for (var i = length; i >= 0; i--) {
                        var composited = parts.slice(0, i).join("/");
                        var routeConfig = self.routeConfig[composited];
                        if (routeConfig && routeConfig.menu) {
                            return routeConfig.menu;
                        }
                    }
                    return null;
                }
            };
    
    
            /* define the common routes for all users */
            self.routes = new sammy(function () {
    
                /* login action */
                this.get('#/login', function() {
    
                    var loginModule = 'modules/common/login';
                    require([loginModule], function(loginModel) {

                        /*
                         * send user to #myservice page if already logged in
                         * if user navigate back from external page, the user.userLoggedIn() may be lost
                         * but user session may still be valid, so need to the check with the server
                         */
                        if (user.userLoggedIn() || loginModel.isLoggedIn()) {
                            
                            location.hash = '#/commonDashboard';
                            
                        } else {
                        
                                app.template({
                                    pageTemplate: 'login',
                                    templateData: loginModel });
                        }
                   });                        
                    
                });

                /* logout action */
                this.get('#/logout', function() {

                    var loginModule = 'modules/common/login';
                    require([loginModule], function(loginModel) {
                            loginModel.logout();
                            location.hash = '#/login';
                    });
                });
    
    
                /* default action, when no route matched */
                this.notFound = function(){
                    //check if it's a page anchor, which will not starts with '/'
                    if (this.path && this.path.split('#')[1].charAt(0) === '/') {
                        // apply a empty template for now, should show a No Permission warning
                        app.template({ pageTemplate: null, templateData: null });
                    }
                };
    
            });
    
    
            /* Default route when the starting page loaded */
            self.runDefault = function (loc) {
                if (loc) {
                    self.routes.run(loc);
                } else {
                    self.routes.run('#/lifecycle/commonDashboard');
                }
            };

        }

        return new RoutesModel();
        
    });