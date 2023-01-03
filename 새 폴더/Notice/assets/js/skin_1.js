$(document).ready(function () {
	
	//헤더 언어선택
	$(".language").mouseenter(function () {
		$(">ul", this).stop().slideDown(200);
		$(".language").mouseleave(function () {
			$(">ul", this).stop().slideUp(200);
		});
	});

	//로고 옆에 있는 슬라이드
	$('.bter_list').show().slick({
		autoHeight : true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		arrows: true,
		dots: false,
		autoplay: false,
		prevArrow: '.brer-slick-prev',
		nextArrow: '.brer-slick-next',
		autoplaySpeed: 1000,
			responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					centerPadding: '180px'
				}
            },
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					centerPadding: '180px'
				}
            }
        ]
	});

	//실시간 검색 순위
	var count = $('.rank-list li').length;
	var height = $('.rank-list li').height();

	function step(index) {
		$('.rank-list ol').delay(2000).animate({
			top: -height * index,
		}, 500, function () {
			step((index + 1) % count);
		});
	}

	step(1);

	//헤더 my 페이지
	$(".tit_my_p").mouseenter(function () {
		$(">ul", this).stop().slideDown(200);
		$(".tit_my_p").mouseleave(function () {
			$(">ul", this).stop().slideUp(200);
		});
	});

	//메인 슬라이드
	$('.visual_slider').show().slick({
		centerMode: true,
		arrows: true,
		dots: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 5000,
		prevArrow:0,
		nextArrow:0,
	});
	

	//메인 아래 슬라이드
	$('.sub_s').show().slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: true,
		autoplaySpeed: 2000,
		prevArrow: 0,
		nextArrow: 0,
		dots: true,
	});

	//new item 슬라이드
	$('.newitem_slider').show().slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		centerPadding: '180px',
		prevArrow: 0,
		nextArrow: 0,
		responsive: [
			{
				breakpoint: 1980,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 4,
				}
            },
			{
				breakpoint: 1280,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 4,
				}
            },
			{
				breakpoint: 990,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 4,
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 3,
				}
            },
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '30px',
					slidesToShow: 2,
				}
            }
        ],
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: true,
		},

	});

	//photo review 슬라이드
	$('.pr_slider').show().slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		centerPadding: '180px',
		prevArrow: 0,
		nextArrow: 0,
		responsive: [
			{
				breakpoint: 1980,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '180px',
					slidesToShow: 6
				}
            },
			{
				breakpoint: 1280,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '180px',
					slidesToShow: 5
				}
            },
			{
				breakpoint: 990,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '180px',
					slidesToShow: 4
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '180px',
					slidesToShow: 2
				}
            },
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '180px',
					slidesToShow: 1
				}
            }
        ],
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: true,
		},

	});
	
	//instantly glve 10,000 points 배너
	$('.h_banner').show().slick({
		autoHeight : true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: false,
		arrows: true,
		dots: false,
		autoplay: true,
		prevArrow: '.slick-prev',
		nextArrow: '.slick-next',
		autoplaySpeed: 5000,
	});
	

	//lookbook
	$('.look_rel').show().slick({
		centerMode: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		pauseOnHover: true,
		draggable: true,
		responsive: [
			{
				breakpoint: 1980,
				settings: {
					slidesToShow: 4,
					slidesToScroll:2,
				}
            },
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 3,
				
				}
            },
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 3,
					
				}
            },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				
				}
            },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				
				}
            }
        ]
	}); //메인 슬라이드

	//ALL 카테고리
	$(".gnb_all_btn").click(function () {
		$(".cate_mask").stop().addClass('on');
		$(".category").stop().addClass('on');
		$("body").css("overflow", "hidden");
		$("body").css("height", "100vh");
		$(".cate_mask").click(function () {
			$(this).stop().removeClass('on');
			$(".category").stop().removeClass('on');
			$("body").css("overflow", "visible");
			$("body").css("height", "100%");
		});
	});

	$(".cate_close button").click(function () {
		$(".cate_mask").stop().removeClass('on');
		$(".category").stop().removeClass('on');
		$("body").css("overflow", "visible");
		$("body").css("height", "100%");
	});

	$(".quick_menu input").click(function () {
		$(".quick_menu").stop().toggleClass('on');
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
	//팝업 js
	
	 //list 상세상품 검색
    $(".list_search_btn button").click(function(){
        $(".sub_search_cover").stop().slideDown();
        $(".sbb_close").click(function(){
            $(".sub_search_cover").stop().slideUp();
        });
    });
	
	// 쿠키 생성
	function setCookie(name, value, expiredays) { // 쿠키저장
		var todayDate = new Date(); //date객체 생성 후 변수에 저장
		todayDate.setDate(todayDate.getDate() + expiredays);
		// 시간지정(현재시간 + 지정시간)
		document.cookie = name + "=" + value + "; path=/; expires=" + todayDate.toUTCString() + ";"
	}
	
	   //모바일 구매하기
    $(".sub_de_bbuy_fake").click(function(){
        $(this).stop().addClass("on");
        $(".detain_mo_option").stop().addClass("on");
        $(".detain_mo_close_btn").click(function(){
            $(".sub_de_bbuy_fake").stop().removeClass("on");
            $(".detain_mo_option").stop().removeClass("on");
        });
    });
    //상품문의 slidedown
    $(".dql_con_c_cver").click(function(){
        $(this).parent().find(".dqlcc_coment").stop().slideToggle();
    });
    
    //상세페이지 썸네일
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        arrows:false,
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
    
    //FAQ
	$(".sub_faq_2").click(function(){
		$(this).parent(".sub_faq_ibox").next(".sub_faq_view").toggleClass("on");
	})

//	 AOS.init();
	
	$('.detall_slider').show().slick({
		centerMode: true,
        autoplay:true,
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		centerPadding: '180px',
		prevArrow: '.slick_prev_por', 
        nextArrow: '.slick_next_por',

		responsive: [
			{
				breakpoint: 1980,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 5,
				}
            },
			{
				breakpoint: 1280,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 4,
				}
            },
			{
				breakpoint: 990,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '100px',
					slidesToShow: 4,
				}
            },
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 3,
				}
            },
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '30px',
					slidesToShow: 2,
				}
            }
        ],
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: true,
		},

	});

});