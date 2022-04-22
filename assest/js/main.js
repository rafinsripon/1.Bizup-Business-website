
$(document).ready(function() {

    //TEAM SLIDER ACTIVE
    $('.teamSlider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //TESTIMONIAL SLIDER ACTIVE
    $('.testiArea').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //BLOG SLIDER ACTIVE
    $('.blogSlider').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    //mixitup active
    var mixer = mixitup('.filtering');

    //WOW ACTIVE
    new WOW().init();

    // One Page Nav
    var top_offset = $('.header-area').height() - 123;
    $('.mainMenu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    // scrollToTop active
    $.scrollUp({
	    scrollName: 'scrollUp', // Element ID
	    topDistance: '100', // Distance from top before showing element (px)
	    topSpeed: 300, // Speed back to top (ms)
	    animation: 'fade', // Fade, slide, none
	    animationInSpeed: 200, // Animation in speed (ms)
	    animationOutSpeed: 200, // Animation out speed (ms)
	    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	
    });


});

//PRELOADER
$(window).on('load', function() {
    $("#proloader").delay(1000).fadeOut(500);
});

//HUMBARGAR_MENU
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}


window.addEventListener("scroll", function(){
    var header = document.querySelector(".headerArea");
    header.classList.toggle("sticky", window.scrollY > 0);

});




