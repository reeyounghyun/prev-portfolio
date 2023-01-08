$(document).ready(function () {

    var swiper = new Swiper(".color_sli", {
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,

        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    $('.Start').on('click', function() {
        swiper.autoplay.stop();
    });
    $('.Stop').on('click', function() {
        swiper.autoplay.start();
    });

    swiper.on('slideChange', function(e) {
        if (swiper.activeIndex == "0") {
            $(".wrapper").css("background-color", "#E2DAF2");
        } else if (swiper.activeIndex == "1") {
            $(".wrapper").css("background-color", "#E4EFD0");
        } else if (swiper.activeIndex == "2") {
            $(".wrapper").css("background-color", "#F1E6CC");
        } else if (swiper.activeIndex == "3") {
            $(".wrapper").css("background-color", "#D5EAFD");
        } else if (swiper.activeIndex == "4") {
            $(".wrapper").css("background-color", "#E2DAF2");
        } else if (swiper.activeIndex == "5") {
            $(".wrapper").css("background-color", "#E4EFD0");
        } else {
            $(".wrapper").css("background-color", "#F1E6CC");
        }

    });


});