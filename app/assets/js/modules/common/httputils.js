define(['jquery', 'debug_option', 'modules/common/dialog-utils', 'modules/common/user'],

    function($, debugOption, dialog, user) {

        /*
         * this module overload the $.ajax to redirect the url to a mock json file if _DEBUG is true
         * it should be initialized during app initialization
         */
        var _DEBUG = debugOption.runWithoutServer;

        console.log("defining httputils... _DEBUG: " + _DEBUG);

        // maintain a pointer to the existing function
        var oldAjax = $.ajax;

        // overwriting the jQuery ajax
        $.ajax = function()
        {

            //rewrite the url to a json file
            if (_DEBUG) {

                var url = arguments[0];

                // If url is an object, simulate pre-1.5 signature
                if ( typeof url === "object" ) {

                    url.url = convertUrl(url.url);

                } else if ( typeof  url === "string" ) {

                    url = convertUrl(url);

                }

                arguments[0] = url;

            }

            // original behavior - use function.apply to preserve context
            return oldAjax.apply(this, arguments);

        };

        function convertUrl(url) {

            if ( url && (/^rest\//).test(url) ) {

                url = url.replace(/rest/, '/assets/js/mock') + '.json';

            }

            return url;

        }


        /* define jquery ajax global event to handle error */
        $(document).bind("ajaxSend", function(){

            $("#loading").show();

        }).bind("ajaxComplete", function(){

            $("#loading").hide();


        }).bind("ajaxError ", function(event, jqxhr, settings, exception) {

                if (settings.error) return;

                var message;
                var statusErrorMap = {
                    '400' : "Server understood the request but request was invalid: ",
                    '401' : "Unauthorised access.",
                    '403' : "Forbidden resource can't be accessed",
                    '500' : " ",
                    '503' : "Service Unavailable"
                };
                if (jqxhr.status) {
                    message = statusErrorMap[jqxhr.status];
                    if (!message){
                        message = "Unknow Error \n.";
                    }
                } else if (exception == 'parsererror'){
                    message = "Error.\nParsing JSON Request failed.";
                } else if (exception == 'timeout'){
                    message = "Request Time out.";
                } else if (exception == 'abort'){
                    message = "Request was aborted by the server";
                } else {
                    message="Unknown Error \n.";
                }

                if (jqxhr.status == '403' || jqxhr.responseText == 'HTTP 403 Forbidden') {
                    message = jqxhr.responseText + "<br/>" + "You tried to access forbidden resource or your session has timed out, please login again! " ;
                    dialog.alertError(message, function() {
                        $.ajax({
                            type: 'GET',
                            url: "rest/userservice/user_logout",
                            dataType: "json", // data type of response
                            contentType: "application/json; charset=utf-8"
                        });

                        user.userLoggedIn(false);
                        user.userName(null);
                        user.userId(null);

                        window.location.href = "login.html";
                    });
                } else {
                    message = "Error occurred when request action from server: " + message + "<br/>" + jqxhr.responseText;
                    dialog.alertError(message);
                }
        });

        /* nothing to return */
        return {};
    }
);
