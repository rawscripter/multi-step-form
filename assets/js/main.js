(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
            $('#mobile-menu-active').meanmenu({
                meanScreenWidth: "767",
                meanMenuContainer: '.menu-prepent',
             });



        $('.menu-open').click( function (){
                  
                $('.body-left-bar').toggleClass('activee');  
                $('.menu-open').toggleClass('toggle');  
                  
        });

        
        $(document).ready(function() {
  $('select').niceSelect();
});
        
        
       
              
        $(".single-slider-item").owlCarousel({
            items:5,
            nav:true,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:4,
                   
                },
                1000:{
                    items:5,
                   
                }
            }
            
          
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	