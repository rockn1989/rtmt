'use strict';

$(function() {

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

});