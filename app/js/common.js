$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-100 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.nav-mob__link').click(function() {
		$('.nav-mob').toggleClass('show');
	});
	$('.nav-list__item').click(function() {
		$('.nav-mob').removeClass('show');
	});

	// Отправка формы
	$('form').submit(function() {
		var data = $(this).serialize();
		var goalId = $(this).find('input[ name="goal"]').val();
		data += '&ajax-request=true';
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			dataType: 'json',
			data: data,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open('<div class="thn"><h3>Заявка отправлена!</h3><p>С Вами свяжутся в ближайшее время.</p></div>');
				//gtag('event','submit',{'event_category':'submit','event_action':goalId});
				//fbq('track', 'Lead');
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	$('.portfolio-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.portfolio-nav'
	});
	$('.portfolio-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.portfolio-slider',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
		]
	});

	$('.case-slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav1'
	});
	$('.case-nav1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider1',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});

	$('.case-slider2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav2'
	});
	$('.case-nav2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider2',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});

	$('.case-slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav3'
	});
	$('.case-nav3').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider3',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});

	$('.case-slider4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav4'
	});
	$('.case-nav4').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider4',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});

	$('.case-slider5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav5'
	});
	$('.case-nav5').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider5',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});

	$('.case-slider6').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav6'
	});
	$('.case-nav6').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider6',
		dots: false,
		arrows: false,
		focusOnSelect: true,
	});

	$('.mathHeight').matchHeight();
	$('.offer-item__txt_grey').matchHeight();

	$('.calculator').change(function() {
		var	type = $('#type').find('option:selected').data('id');
		if (type == 1) {
			$(this).find('.calculator-content').css('display', 'none');
			$(this).find('.pool').css('display', 'flex');
		} 
		if (type == 2) {
			$(this).find('.calculator-content').css('display', 'none');
			$(this).find('.hamam').css('display', 'flex');
		}
		if (type == 3) {
			$(this).find('.calculator-content').css('display', 'none');
			$(this).find('.banya').css('display', 'flex');
		}
		if (type == 4) {
			$(this).find('.calculator-content').css('display', 'none');
			$(this).find('.sauna').css('display', 'flex');
		}
	});

	$('.nav-phone__ico').click(function() {
		$('.nav-info').toggleClass('show');
	});

	$(".scroll").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var top = block.offset().top-400;
			} else {
				var top = block.offset().top+400;
			}
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animatedIn');
				}
			}
		});
	});

	var trigerHeight = $('.dots-control__img').innerHeight();
	$('.dots-control').css('height', trigerHeight);
	$(window).on('resize', function() {
		var trigerHeight = $('.dots-control__img').innerHeight();
		$('.dots-control').css('height', trigerHeight);
	});
	
	$('.hover1').mouseover(function() {
		$('.d1 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d1 span').css('opacity', '0');
	});
	$('.hover2').mouseover(function() {
		$('.d2 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d2 span').css('opacity', '0');
	});
	$('.hover3').mouseover(function() {
		$('.d3 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d3 span').css('opacity', '0');
	});
	$('.hover4').mouseover(function() {
		$('.d4 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d4 span').css('opacity', '0');
	});
	$('.hover5').mouseover(function() {
		$('.d5 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d5 span').css('opacity', '0');
	});
	$('.hover6').mouseover(function() {
		$('.d6 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d6 span').css('opacity', '0');
	});
	$('.hover7').mouseover(function() {
		$('.d7 span').css('opacity', '1');
	}).mouseout(function() {
		$('.d7 span').css('opacity', '0');
	});
});
