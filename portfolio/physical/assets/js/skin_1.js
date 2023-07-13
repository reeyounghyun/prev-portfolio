$(document).ready(function () {
    
    // 마스터 셀러 button.js
    var section3Offset = $('.top_link_blank').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > section3Offset.top) {
            $('.top_link_blank').css("position", 'fixed');
        } else {
            $('.top_link_blank').css("position", 'sticky');
        }
    });

    //메뉴 바
    var section2Offset = $('.side_m').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > section2Offset.top) {
            $('.side_m').css("position", 'fixed');
        } else {
            $('.side_m').css("position", 'sticky');
        }
    });

    //ALL 카테고리
    $(".side_all_btn").click(function () {
        $(".slid_mask").stop().addClass('on');
        $(".mask_category").stop().addClass('on');
        $("body").css("overflow", "hidden");
        $("body").css("height", "100vh");
        $(".slid_mask").click(function () {
            $(this).stop().removeClass('on');
            $(".mask_category").stop().removeClass('on');
            $("body").css("overflow", "visible");
            $("body").css("height", "100%");
        });
    });

    $(".mask_close button").click(function () {
        $(".slid_mask").stop().removeClass('on');
        $(".mask_category").stop().removeClass('on');
        $("body").css("overflow", "visible");
        $("body").css("height", "100%");
    });

    //찜하기 버튼
    $(".wish_btn").click(function () {
        $(">i", this).stop().toggleClass("on");
    });

    //버튼 툴팁
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    //index.html 슬라이드

    $('.banner_img').slick({
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });


    $('.single_item').slick({
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });

    $('.right_single').slick({
        autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });

    //상세페이지 썸네일
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true
    });

    //제품 상세페이지 하단부 제품 상세컷
    $('.detail_slide .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.detail_slide .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

});

//카테고리 아코디언 메뉴
$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
});