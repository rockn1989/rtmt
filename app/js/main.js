'use strict';

$(function() {

/*** SLIDERS ***/

$('.pathners-slider').slick({
			arrow: true,
			dots: false,
			infinity: true,
			//autoplay: true,
			autoplaySpeed: 2000,
			speed: 1200,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '<div class="btn-slide slick-prev"><i class="icon-button-prev"><svg width="29px" height="20px" class="slider-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icon-svg/sprite-svg.svg#slim-left"></use></svg></i></div>',
			nextArrow: '<div class="btn-slide slick-next"><i class="icon-button-next"><svg width="29px" height="20px" class="slider-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/icon-svg/sprite-svg.svg#slim-right"></use></svg></i></div>',
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 940,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

/*** SVG FOR ALL BROWSERS ***/
	svg4everybody();

/*** HEADER SEARCH FORM ***/

$('.contacts-search').on('click', function(e) {
	e.preventDefault();
	$('.contacts .uk-grid').fadeOut(350, function() {
		$('.search-form').fadeIn('350', function() {
			$('.search-form input').focus();
		});
		$('.search-form').toggleClass('uk-animation-slide-right');
	});
});

$('.search-form a.uk-modal-close').on('click', function() {
	$('.search-form').fadeOut('350', function() {
		$(this).toggleClass('uk-animation-slide-right');
		$('.contacts .uk-grid').fadeIn('350');
	});
});

$('#mobile-form').on('click', function() {
	$('.mobile-form').fadeToggle('350');
});

/*** FOOTER TOGGLE LIST MOBILE ***/

$('[data-role="toggle-list"]').on('click', function() {
	if($(window).width() <= 767) {
		$(this)
			.siblings('[data-role="target-list"]')
			.slideToggle('350', function() {
				$(this).toggleClass('hidden').removeAttr('style')
			});
	}
});


/*** DISABLED UIKIT ANIMATION FOR MOBILE ***/

UIkit.on('beforeready.uk.dom', function () {
	if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
		UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
	}
});

});