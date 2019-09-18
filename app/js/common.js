$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-100 // отступ от меню
		}, 500);
	e.preventDefault();
	});

	// Меню при скроле
	$(window).scroll(function(){
		var topline = $(window).scrollTop();
		if ( topline > 650 ) {
			$(".posf").addClass('show');
		} else {
			$(".posf").removeClass('show');
		};
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

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
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

	$('.case-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.case-nav'
	});
	$('.case-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.case-slider',
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
	});

	$('.nav-phone__ico').click(function() {
		$('.nav-info').toggleClass('show');
	});
	
});
