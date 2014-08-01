define(['jquery','metismenu'], function($, metis) {

    this.initNavigationMenu = function() {

        $('#side-menu').metisMenu();

        //Loads the correct sidebar on window load,
        //collapses the sidebar on window resize.
            $(window).bind("load resize", function() {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            })
    };

    return this;

});
