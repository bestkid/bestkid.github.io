$(document).ready(function(){

    // nav trigger
    $(".nav-trigger").click(function(){
        if($(this).hasClass("is-active")){
            $(this).removeClass("is-active");
            $(".mobile-menu").removeClass("active");
        }else{
            $(this).addClass("is-active");
            $(".mobile-menu").addClass("active");
        }
    });

    //hamburger
    /*$(".hamburger").click(function(){
        if($(this).hasClass("is-active"))
        {
            $(this).removeClass("is-active");
            $(".mobile-menu").removeClass("active");
        }
        else
        {
            $(this).addClass("is-active");
            $(".mobile-menu").addClass("active")
        }
    });*/
    /*$(".mobile-menu > a").click(function(){
        $(".mobile-menu").removeClass("active");
        $(".hamburger").removeClass("is-active");
    });*/


    //equalheights
    $(".kruchki-category .categories-thumb-list .categories-thumb-item h3").equalHeights();
    /*setTimeout(function(){
        $(".ac-descr").equalHeights();
    },2000);*/


    //owl carousel-content
    $(".images-list").owlCarousel({
            items: 4,
            itemsDesktop: [1170,3],
            itemsDesktopSmall: [890,2],
            itemsTablet: [600,1],
            navigation: true,
            pagination: false,
            navigationText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>','<i class="fa fa-caret-right" aria-hidden="true"></i>']
        //$(this).find(".car-cont-item h3").equalHeights();
        //$(this).find(".car-cont-item .cci-descr").equalHeights();
    });

    //animations
    //Animate CSS + WayPoints javaScript Plugin
    //Example: $(".element").animated("zoomInUp", "zoomOutDown");
    /*(function($) {
        $.fn.animated = function(inEffect, outEffect) {
            $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
                if (dir === "down") {
                    $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                } else {
                    $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                };
            }, {
                offset: "80%"
            }).waypoint(function(dir) {
                if (dir === "down") {
                    $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
                } else {
                    $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
                };
            }, {
                offset: -$(window).height()
            });
        };
    })(jQuery);*/


    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    //sscroll to id
    /*$(".carousel .sandwich .sandw-wrap .small-menu ul li a").click(function() {
        var point = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(point).offset().top }, "slow");
        return false;
    });*/
    /*$(".top-line .container .wrapper .mobile-menu ul li a[href^='#']").click(function() {
        var point = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(point).offset().top }, "slow");
        $(".hamburger").removeClass("is-active");
        $(".mobile-menu").removeClass("active");
        return false;
    });*/

    //maskedinput
    $("input[name='phone']").mask("+38 (099) 999-99-99");

    //popup forms
    $('a[href="#send-message"]').magnificPopup({
        type:'inline'
    });

    //switch language
    /*$(".lang ul li a").click(function(){
        $(".lang ul li").removeClass("current-language");
        $(this).parent().addClass("current-language");
    });*/

    //remove attr for map
    /*$(".ft-content .map iframe").removeAttr("width height");*/

    // masonry
    /*$('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: 20
    });*/

    //swiper
    var swiper = new Swiper('.products-page .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        slidesPerColumn: 3,
        paginationClickable: true,
        spaceBetween: 15,
        grabCursor: true
    });
    $('.products-page .swiper-container .swiper-slide .product-thumb a.product-popup').magnificPopup({
        type:'image'
    });

});