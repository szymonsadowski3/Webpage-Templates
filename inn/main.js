$(document).ready(function () {
    
    
   
    var stickyNavTop = $('nav').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
            $('.sticky-fix').show();
        } else {
            $('nav').removeClass('sticky');
            $('.sticky-fix').hide();
        }
    };

    if ($(window).width() > 1000) {
            stickyNav();  
        }

    $(window).scroll(function () {
        if ($(window).width() > 1000) {
            stickyNav();  
        } 
        
        else {
            $('nav').removeClass('sticky');
            $('.sticky-fix').hide(); 
        }
    });
    
    
    
});