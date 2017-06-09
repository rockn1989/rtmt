'use strict';

$(function() {

	/*** SLIDERS ***/

	$('.main-slider').slick({
				arrows: false,
				dots: true,
				infinity: true,
				fade: true,
				cssEase: 'linear',
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 940,
						settings: {
							slidesToShow: 1,
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

	$('.pathners-slider').slick({
				arrows: true,
				dots: false,
				infinity: true,
				autoplay: true,
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

	/* DETAIL SLIDER */

	 $('.detail-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.detail-preview-slider'
	});

	$('.detail-preview-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.detail-slider',
	  dots: false,
	  arrows: false,
	  infinity: true,
	  centerMode: true,
	  focusOnSelect: true,
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

	/*** MOBILE LEFT MENU ***/

	$('.mobile-menu .uk-offcanvas svg.page-icon').on('click', function(e) {
		e.preventDefault();
		$(this)
			.toggleClass('open')
			.parent()
			.siblings('ul')
			.slideToggle('350');
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


	/*** CATALOG LEFT MENU ***/

	$('.catalog li.catalog-title:not(".active")').each(function(i, el) {
		$(el).find('ul').addClass('hidden');
	});

	$('.catalog a.title-link').on('click', function(e) {
		e.preventDefault();
		$(this)
			.toggleClass('active')
			.siblings('ul')
			.slideToggle(350);
	});

	$('.catalog svg.page-icon').on('click', function(e) {
		e.preventDefault();

		$('.catalog li.catalog-title').each(function(i, el) {
			$(el)
				.find('ul')
				.slideUp('250', function() {
					$(el).removeClass('active');
				});
		});
		if($(this).closest('li').hasClass('active')) {
			$(this)
				.closest('li')
				.find('ul')
				.slideUp('350', function() {
					$(this).closest('li').removeClass('active');
				});
		} else {
			$(this)
				.closest('li')
				.find('ul')
				.slideDown('350', function() {
					$(this).closest('li').addClass('active');
				});
		}

	});

	/* FORM MASK */

	$('input[name="auth-tel"]').mask("+7 (999) 999-9999");

	/* FORM EVENTS */

	$('.default-form input, .default-form textarea').on('focus', function() {
		$(this).siblings('label').addClass('focus');
	});

	$('.default-form input, .default-form textarea').on('blur', function() {
		if($(this).val().length <= 1) {
			$(this).siblings('label').removeClass('focus');
		} 
	});

	$('.js__auth-file').on('change', function() {
		$('.delete-file').toggleClass('hidden');
		$('.upload-file span').text($(this).val().replace(/C:\\fakepath\\/i, ''));
	});

	$('.delete-file').on('click', function() {
		$('.js__auth-file').val('');
		$('.upload-file span').text('');
		$(this).toggleClass('hidden');
	})

	/*** FORM VALIDATE ***/
/*
	$('.auth-form').validate({
		rules: {
			name: {
				reqired: true,
				minlenght: 4,
				maxlength: 32
			}
		},
		submitHandler: function() {
		    return false;
		  }
	});
*/
	/*** DISABLED UIKIT ANIMATION FOR MOBILE ***/

	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		}
	});


/*** YANDEX MAP ***/
  if($('div').is('.map')) {
	  ymaps.ready(init);

	  function init(){

	      var myMap, myMap2;
	   		if($('div').is('#map-1')) {
		      myMap = new ymaps.Map("map-1", {
		          center: [55.7847,37.6428],
		          zoom: 15,
		          controls: []
		      });

		      myMap.controls.add("zoomControl", {
	          position: {top: 15, left: 15}
	      	});

		      var myPlacemark = new ymaps.Placemark([55.7847,37.6428] , {},
		          { iconLayout: 'default#image',
		            iconImageHref: 'img/location.png',
		            iconImageSize: [40, 50],
		            iconImageOffset: [0, -65] });

		      myMap.geoObjects.add(myPlacemark);
	    	}
	      // myMap.behaviors.disable('scrollZoom');

	      /* MAP 2*/
	      if($('div').is('#map-2')) {
		      myMap2 = new ymaps.Map("map-2", {
		          center: [55.4967,65.3212],
		          zoom: 15,
		          controls: []
		      });
		      myMap2.controls.add("zoomControl", {
		          position: {top: 15, left: 15}
		      });


		      var myPlacemark = new ymaps.Placemark([55.4967,65.3212] , {},
	          { iconLayout: 'default#image',
	            iconImageHref: 'img/location.png',
	            iconImageSize: [40, 50],
	            iconImageOffset: [-25, -66] });

		      myMap2.geoObjects.add(myPlacemark);

	    	}

	  }
  }


/*** TOGGLE TEXT ***/

$('.show-text').on('click', function(e) {
	e.preventDefault();
	$(this)
		.toggleClass('open')
		.siblings('.hidden-text')
		.slideToggle('350');
})

/*** SHOW COMPANY IMG ***/

if($('div').is('.company-img-list')) {
	$('.item-img').each(function(i, el) {
		if(i >= 0 && i <= 3) {
			return;
		} else {
			$(el).addClass('hidden');
			$(el).parent().addClass('hidden');
		}
	})
}

$('.show-company-img').on('click', function(e) {
	e.preventDefault();
	var hiddenBlocks = $('.item-img.hidden').length;
	if(hiddenBlocks > 4) {
		$('.item-img.hidden').each(function(i, el) {
			if(i <= 3) {
				$(el).removeClass('hidden')
				$(el).parent().removeClass('hidden')
			}
		});
	} else {
		$('.item-img.hidden').each(function(i, el) {
			$(el).removeClass('hidden')
			$(el).parent().removeClass('hidden')
		});
	}

})

});

