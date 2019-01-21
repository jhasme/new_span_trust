$(document).ready(function () {
    $(function(){
        var current_page_URL = location.href;
        $( "a" ).each(function() {
            if ($(this).attr("href") !== "#") {
                var target_URL = $(this).prop("href");
                if (target_URL === current_page_URL) {
                    $('nav a').parents('li, ul').removeClass('active');
                    $(this).parent('li').addClass('active');
                    return false;
                }
            }
        });
        $('div.navbar-header > a > img.navbar-brand').addClass('navbar-height-toggle');
        $('ul.navbar-nav').addClass('navbar-nav-height-toggle');
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('div.navbar-header > a > img.navbar-brand').removeClass('navbar-height-toggle');
                    $('ul.navbar-nav').removeClass('navbar-nav-height-toggle');
                    $(".navbar").fadeIn();
                } else {
                    $('div.navbar-header > a > img.navbar-brand').addClass('navbar-height-toggle');
                    $('ul.navbar-nav').addClass('navbar-nav-height-toggle');
                }
            });
        });
    }); 
}); 
