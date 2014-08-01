/**
 * Require.js boostrap javascript
 */

//

requirejs.config({

    urlArgs: "v3.8",
    // Path mappings for the logical module names
    paths: {
        'knockout': '/bower_components/knockout/dist/knockout',
        'knockout.global': 'knockout.global',
        'knockout-validation': '/bower_components/knockout-validation/Dist/knockout.validation',
        //'knockout-validation': 'https://rawgithub.com/ericmbarnard/Knockout-Validation/master/Src/knockout.validation',
        'jquery': '/bower_components/jquery/dist/jquery',
        'jqueryui': '/lib/jquery-ui/jquery-ui-1.10.4.custom.min',
        'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap.min',
        'text': '/bower_components/text/text',
        'koext': '/lib/koexternaltemplateengine/koExternalTemplateEngine_all',
        'sammy': '/bower_components/sammy/lib/sammy',
        'ojs': '/lib/oj/v1.0/min',
        'ojL10n': '/lib/oj/v1.0/ojL10n',
        'ojtranslations': '/lib/oj/v1.0/resources',
        'chart-util': 'modules/common/chart-util',
        'sql-service': 'modules/common/sql-service',
//        'clipboard': 'lib/zeroclipboard/ZeroClipboard',
        'date-picker': '/bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min',
        'date-util': 'modules/common/date-util',
        'moment': '/bower_components/moment/min/moment.min',
        'moment-timezone': '/bower_components/moment-timezone/builds/moment-timezone.min',
        // 'moment-timezone-data': 'lib/moment/moment-timezone-data',
        'kogrid': '/bower_components/koGrid/koGrid-2.0.6',

        //these are javascript code for styling need
        'metismenu': '/bower_components/metisMenu/dist/jquery.metisMenu',
        'acs-nav': '/lib/acs/acs-nav',
        'retina': '/bower_components/retina.js/dist/retina.min',
        'pnotify': '/lib/pnotify/pnotify.custom',
        'google-code-prettify': '/lib/prettify/prettify',
        'prettify-sql': 'lib/prettify/lang-sql'
    },

    // Shim configurations for modules that do not expose AMD
    shim: {
        'koext': {
            deps: ['jquery', 'knockout', 'knockout.global']
        },
        'jquery': {
            exports: ['jQuery', '$']
        },
        'jqueryui': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'sammy': {
            deps: ["jquery"],
            exports: "Sammy"
        },
        'metismenu': {
            deps: ['jquery']
        },
//        'clipboard': {
//            deps: ["jquery"],
//            exports: "ZeroClipboard"
//        },
        'date-picker': {
            deps: ['jquery']
        },
        'prettify-sql': {
            deps: ['google-code-prettify'],
            exports: 'prettify-sql'
        },
        'retina': {
        },
        'kogrid': {
            deps: ['jquery','knockout']
        }
    },

    map: {
        '*': {'knockout': 'knockout.global'}, // All modules referencing 'knockout' will be loading 'knockout.global'
        'knockout.global': {'knockout': 'knockout'} // 'knockout.global' itself will be referencing the original 'knockout'
    },

    wrapShim: true
});


//load the onresourceload.js before any other module to
//hook into the requirejs loading event
//require(['modules/common/onresourceload'], function () {

    /**
     * A top-level require call executed by the Application.
     */
    require(['modules/common/onresourceload',
            'knockout',
            'knockout.global',
            'routes',
            'app',
            // 'modules/common/user-validation',
            'koext',
            'bootstrap',
            'modules/common/httputils',
            'retina',
            'kogrid'],


        // this callback gets executed when all required modules are loaded
        function (ignore, ko, ignore2, routes, app) {
            /**
             * configure the external template engine to load template file from '/templates' folder
             */
            infuser.defaults.templateUrl = "templates";
            infuser.defaults.templateSuffix = ".tmpl.html?" + "v3.8";

            /* apply templates */
            $(document).ready(function () {

                // ko.validation.registerExtenders();

                /* apply data to header and footer, content*/
                ko.applyBindings(app, document.getElementById('header'));
                ko.applyBindings(app.nagivationMenu, document.getElementById('menu'));
                ko.applyBindings(app, document.getElementById('footer'));
                ko.applyBindings(app.template, document.getElementById('mainContent'));

                /* load the default page no prior url */
                routes.runDefault(window.location.hash);

                // //check if user is logged
                // validation.isLoggedIn(
                //     //if logged in already
                //     function () {
                //         //register knockout validation custom rules
                //         ko.validation.registerExtenders();

                //         /* apply data to header and footer, content*/
                //         ko.applyBindings(app, document.getElementById('header'));
                //         ko.applyBindings(app.nagivationMenu, document.getElementById('menu'));
                //         ko.applyBindings(app, document.getElementById('footer'));
                //         ko.applyBindings(app.template, document.getElementById('mainContent'));

                //         /* load the default page no prior url */
                //         routes.runDefault(window.location.hash);

                //     },
                //     //if not logged in
                //     function () {
                //         //go to the login page and
                //         // remember the current url for returning back to it
                //         window.location.href = "login.html?r=" + encodeURIComponent(window.location);
                //     });

            });

        }
    );

//});


