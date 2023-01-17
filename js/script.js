$(document).ready(function () {

    var swiper = new Swiper(".color_slide", {
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
// 메인 상단 슬라이드

$(document).ready(function(){
    $(".bnt_le").click(function () {
        if ($(".btn_a").hasClass("active")) {
            $(".btn_a").removeClass("active");
            $("this").removeClass("active");
        } else {
            $(".btn_a").addClass("active");
            $(this).addClass("active");
        }
    })

    $('.bnt_le').click(function(){
        $('.bnt_le').css({"border": "1px solid #5e2bb8"});
    });

}); //인천/김포 출발 셀렉트 박스

$(document).ready(function(){

    // $(".aside>ul>li>a").click(function(){
    //     $(".aside ul li a .menu_sub").addClass('onfoo');
    //     $(this).addClass("onfoo");
    //     $(".")
    // });
});


$(document).ready(function(){
    var swiper = new Swiper(".rank_list", {
        direction: 'vertical',   
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    });
}); //실시간 검색 순위


$(document).ready(function(){
    var swiper = new Swiper(".notice", {
        direction: 'vertical',   
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    });
}); //공지사항


$(document).ready(function(){

});


$(document).ready(function(){
    var swiper = new Swiper(".footer_swiper", {
        slidesPerView:3,
        slidesPerGroup:3,
        loop: true,
        navigation: {
            nextEl: ".next-footer",
            prevEl: ".prev-footer",
        },
    });

}); //foo_bit js footer 슬라이드


$(document).ready(function(){
    $(".list_close").click(function(){
        $(".banner_wrap").css("display",'none')
    });
}); // 상단 배너 x버튼







$(document).ready(function () {

     // alert("클릭해주셔서 감사합니다^^");







    // $(".prd_add_btn").click(function(){
    //     $(".prdItemList ul li").addClass('add');
    //     $(this).addClass("add");
    //     $(".prd_remove_btn").removeClass("add");
    // });

    // $(".prd_remove_btn").click(function(){   
    //     $(".prdItemList ul li").removeClass('add');
    //     $(this).addClass("add");
    //     $(".prd_add_btn").removeClass("add");
    // }); 
    //indexsub_add button

    // $(".gnb_in .menu_wrap .n_l .r_all_m").click(function () {
    //     if ($(".n_l .r_all_m .all_sam").hasClass("off")) {
    //         $(".n_l .r_all_m .all_sam").removeClass("off");
    //         $("this").removeClass("off");
    //     } else {
    //         $(".n_l .r_all_m .all_sam").addClass("off");
    //         $(this).addClass("off");
    //     }
    // })

    // 메뉴

    // $(".btn_close").click(function () {
    //     if ($(".n_l .r_all_m .all_sam").hasClass("on")) {
    //         $(".n_l .r_all_m .all_sam").removeClass("on");
    //         $("this").removeClass("on");
    //     } else {
    //         $(".n_l .r_all_m .all_sam").addClass("off");
    //         $(this).addClass("off");
    //     }
    // })






    // var count = $('.rank-list li').length++;
    // var height = $('.rank-list li').height();

    // function step(index) {
    //     $('.rank-list ol').delay(2000).animate({
    //         top: -height * index,
    //     }, 1000, function () {
    //         step((index + 1) % count);
    //     });
    // }

    // step(1);

 
    // $(".btn_pause").on('slideChange', function (e) {

    //     var sw = 0;

    //     if (sw == 0) {
    //         $('.btn_pause').addClass('on');
    //         mySwiper.autoplay.stop();
    //         sw = 1;
    //     } else {
    //         $('.btn_pause').removeClass('on');
    //         mySwiper.autoplay.start();
    //         sw = 0;
    //     }
    // });

 
    //travel_sug js
    var swiper = new Swiper(".tr_sug", {
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints:{
            1920: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            1280: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
              },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
                centeredSlides: false,
              },
        }
    });

    // 고객님만을 위한 추천여행js 
    var swiper = new Swiper(".off_slide", {
        spaceBetween: 10,
        loop : true,   
        slidesPerView: 4,
        navigation: {
            nextEl: ".offer-next",
            prevEl: ".offer-prev",
        },
        breakpoints:{
            1280: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            768:{
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
              },
            375:{
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
              },
        }
    });

    $('.but_tit a').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.but_tit a').removeClass('acitve');
        $('.tab_content').removeClass('acitve');
        $(this).addClass('acitve');
        $("#" + tab_id).addClass('acitve');
    });
    //패키지 항공 호텔 탭 버튼

    $('.but_tits span button').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.but_tits span button').removeClass('acitve');
        $('.tits_cons').removeClass('acitve');
        $(this).addClass('acitve');
        $("#" + tab_id).addClass('acitve');
    });
    //왕복 편도 다구간 탭 버튼

    $('.but_titsx span button').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.but_titsx span button').removeClass('play');
        $('.content_wrap').removeClass('play');
        $(this).addClass('play');
        $("#" + tab_id).addClass('play');
    });
    //마침내 특가

    $(".prd_add_btn").click(function () {
        if ($(this).hasClass("add")) {
            $(".prd_add_btn").removeClass("add");
            $(this).removeClass("add");
        } else {
            $(".prd_add_btn").addClass("add");
            $(this).addClass("add");
        }

        if ($(this).hasClass("active")) {
            $(".prd_add_btn").removeClass("add");
        } else {
            $(".prd_add_btn").addClass("add");
        }
    })

    // footer 하나투어
    $(".hana_mb").click(function () {
        if ($(".fl .footer_licensee span").hasClass("on")) {
            $(".fl .footer_licensee span").removeClass("on");
            $("this").removeClass("on");
        } else {
            $(".fl .footer_licensee span").addClass("on");
            $(this).addClass("on");
        }
    })

    $(".hea_wrap a.btn .ico").click(function(){
       if($(".quick_menu").hasClass("off")) {
        $(".quick_menu").removeClass("off");
        $("this").removeClass("off");
        }else{
            $(".quick_menu").addClass("on");
            $(this).addClass("on");
        }

    });
    //모바일 햄버거 메뉴

    $(".quick_menu>a").click(function(){
        $(".quick_menu").toggleClass("acitve");
    });

    //모바일 메뉴 취소버튼

    
    // $(".quick_menu>a").click(function(){
    //     if($(".quick_menu").hasClass("acitve")) {
    //      $(".quick_menu").removeClass("acitve");
    //      $("this").removeClass("acitve");
    //      }else{
    //          $(".quick_menu").addClass("acitve");
    //          $(this).addClass("acitve");
    //      }

    //  });

    $(".prd_add_btn").click(function(){
        $(".prdItemList ul li").addClass('add');
      $(this).addClass("add");
      $(".prd_remove_btn").removeClass("add");
   });
   
   $(".prd_remove_btn").click(function(){   
      $(".prdItemList ul li").removeClass('add');
      $(this).addClass("add");
      $(".prd_add_btn").removeClass("add");
    }); //indexsub_add button
		

    var swiper = new Swiper(".bann_slider", {
        centeredSlides: true,
        loop : true,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


});