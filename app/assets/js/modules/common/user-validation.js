define(['jquery', 'knockout', 'modules/common/user', 'routes'],

    function($, ko, user, rt) {

        console.log("defining user login module...");

        function UserValidationViewModel() {

            var self = this;

            self.credential = user;
            
            /* 
             * method used to check if user session already exists on the server,
             * this is useful when user navigate away from the application's page and navigate back again,
             * at this time user's session (jessionid and cookie) are still valid on the server and browser
             */
            self.isLoggedIn = function(successCallback, failedCallBack) {
                $.ajax({
                    type: 'GET',
                    url: "rest/userservice/is_user_login",
                    dataType: "json", // data type of response
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR) {
                        if (data && data.isloggedin) {
                            user.id(data.id);
                            user.userLoggedIn(data.isloggedin);
                            user.userName(data.username);
                            user.userId(data.userid);
                            user.firstName(data.firstname);
                            user.lastName(data.lastname);
                            user.email(data.email);
                            user.phoneNumber(data.phonenumber);
                            user.timeZone(data.timezone);
                            user.dateFormat(data.dateformat);
                            user.timeFormat(data.timeformat);
                            user.status(data.status);
                            user.userType(data.usertype);
                            user.privileges(data.privileges);
                            rt.configureRoutes(data.routes);
                            successCallback();
                        } else {
                            failedCallBack();
                        }
                    },
                    error: function(data, textStatus, jqXHR) {
                        if (textStatus == 'parseerror') {
                            //a configuration error in the json file
                            alert(textStatus + ": " + jqXHR.message);
                        }
                        failedCallBack();
                    }

                });
            };


            /*
             * logout action
             */
            self.logout = function() {

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

            };

            /*
             * check if user has certain privilege
             */
            self.hasPrivilege = function(privilege) {
                return (user.privileges().indexOf(privilege) >= 0);
            };

        }

        return new UserValidationViewModel();
    }
);
