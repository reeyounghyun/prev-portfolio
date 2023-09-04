$(document).ready(function () {
	//해더배너
	$('.head_b_close').click(function () {
		$('.head_banner').hide();
	});

	//헤더 언어선택
	$('.language').mouseenter(function () {
		$('>ul', this).stop().slideDown(200);
		$('.language').mouseleave(function () {
			$('>ul', this).stop().slideUp(200);
		});
	});
	//ALL 카테고리
	$('.gnb_all_btn').click(function () {
		$('.cate_mask').stop().addClass('on');
		$('.category').stop().addClass('on');
		$('body').css('overflow', 'hidden');
		$('body').css('height', '100vh');
		$('.cate_mask').click(function () {
			$(this).stop().removeClass('on');
			$('.category').stop().removeClass('on');
			$('body').css('overflow', 'visible');
			$('body').css('height', '100%');
		});
	});
	$('.cate_close button').click(function () {
		$('.cate_mask').stop().removeClass('on');
		$('.category').stop().removeClass('on');
		$('body').css('overflow', 'visible');
		$('body').css('height', '100%');
	});
	$('.quick_menu input').click(function () {
		$('.quick_menu').stop().toggleClass('on');
	});

	//찜하기 버튼
	$('.wish_btn').click(function () {
		$('>i', this).stop().toggleClass('on');
	});

	//메인페이지 중간 배너
	$(
		'.vb_banner .vbb_1 .vbb_inner, .vb_banner .vbb_2 .vbb_inner, .sbb_inner, .sbb2_s_inner, .sbb2_l_inner'
	).slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700,
		pauseOnHover: false,
		autoplaySpeed: 3000,
		prevArrow:
			"<button type='button' class='slick-prev'><i class='xi-angle-left-thin'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next'><i class='xi-angle-right-thin'></i></button>",
	});
	$('.control_btn .vbb_stop').click(function () {
		$(this).toggleClass('stop');
		if ($(this).hasClass('stop')) {
			$(this).parents('.slide_box').children('div').slick('slickPause');
		} else {
			$(this).parents('.slide_box').children('div').slick('slickPlay');
		}
	});

	//메인 베스트 상품
	$('.best_prd').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700,
		pauseOnHover: false,
		autoplaySpeed: 3000,
		prevArrow:
			"<button type='button' class='slick-prev'><i class='xi-angle-left-thin'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next'><i class='xi-angle-right-thin'></i></button>",
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	AOS.init();

	//list 상세상품 검색
	$('.list_search_btn button').click(function () {
		$('.sub_search_cover').stop().slideToggle();
		if ($('.list_search_btn').find('i').hasClass('xi-search')) {
			$('.list_search_btn').find('i').removeClass('xi-search');
			$('.list_search_btn').find('i').addClass('xi-close-thin');
		} else {
			$('.list_search_btn').find('i').addClass('xi-search');
			$('.list_search_btn').find('i').removeClass('xi-close-thin');
		}
	});

	$('.sbb_close').click(function () {
		$('.sub_search_cover').stop().slideUp();
		if ($('.list_search_btn').find('i').hasClass('xi-search')) {
			$('.list_search_btn').find('i').removeClass('xi-search');
			$('.list_search_btn').find('i').addClass('xi-close-thin');
		} else {
			$('.list_search_btn').find('i').addClass('xi-search');
			$('.list_search_btn').find('i').removeClass('xi-close-thin');
		}
	});

	//상세페이지 썸네일
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		arrows: false,
		focusOnSelect: true,
	});

	//상세 리뷰
	$('.rc_list > li').click(function () {
		$(this).find('.rcl_txt').stop().slideToggle();
		$(this).find('.rcl_img').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			centerMode: false,
			arrows: true,
			prevArrow:
				"<button type='button' class='slick-prev'><i class='xi-angle-left-thin'></i></button>",
			nextArrow:
				"<button type='button' class='slick-next'><i class='xi-angle-right-thin'></i></button>",
		});
	});
	$('.rcl_txt').on('click', function (e) {
		e.stopImmediatePropagation();
	});

	//상세 q&a
	$('.dql_cover > ul > li').click(function () {
		$(this).find('.dqlcc_coment').stop().slideToggle();
	});
});

//카테고리 아코디언 메뉴
$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		// more then one submenu open?
		this.multiple = multiple || false;

		var dropdownlink = this.el.find('.dropdownlink');
		dropdownlink.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
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
	};

	var accordion = new Accordion($('.accordion-menu'), false);
});
//팝업 js
// 쿠키 생성
function setCookie(name, value, expiredays) {
	// 쿠키저장
	var todayDate = new Date(); //date객체 생성 후 변수에 저장
	todayDate.setDate(todayDate.getDate() + expiredays);
	// 시간지정(현재시간 + 지정시간)
	document.cookie = name + '=' + value + '; path=/; expires=' + todayDate.toUTCString() + ';';
}
// $(function () {
// 	$('.popup_box').draggable({ containment: 'parent', scroll: false }); // 레이어 팝업 창 드래그 가능
// 	//{containment:'parent', scroll:false} 화면 영역 밖으로 드래그 안됌.

// 	if (document.cookie.indexOf('popToday=close') < 0) {
// 		// 쿠키 저장여부 체크
// 		document.getElementById('popup_layer').style.display = 'block';
// 	} else {
// 		document.getElementById('popup_layer').style.display = 'none';
// 	}
// });

//오늘하루만보기 닫기버튼 스크립트
function closeToday() {
	setCookie('popToday', 'close', 1);
	$('#popup_layer').css('display', 'none');
	document.getElementById('popup_layer').style.display = 'none';
}
//그냥 닫기버튼 스크립트
function closePop() {
	document.getElementById('popup_layer').style.display = 'none';
}
