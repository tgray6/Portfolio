"use strict";

$(document).ready(function(){

/*! Fades in page on load */
$('body').hide();
$('body').fadeIn(500);

});

//navbar show on burger icon click on smaller screens
$('.hide').on('click', function() {
	$('nav ul').toggleClass('show');
});
//


$('.headerName').on('click', function(){
	$('nav ul').removeClass('show');
	$('.homepage').hide();
	$('.portfolioSection').hide();
	$('.contactSection').hide();
	$('.bioSection').fadeIn(500);
});


$('.homeButton').on('click', function() {
	$('nav ul').removeClass('show');
	$('.bioSection').hide();
	$('.portfolioSection').hide();
	$('.contactSection').hide();
	$('.homepage').fadeIn(500);
});


$('.bioButton').on('click', function(){
	$('nav ul').removeClass('show');
	$('.homepage').hide();
	$('.portfolioSection').hide();
	$('.contactSection').hide();
	$('.bioSection').fadeIn(500);
});


$('.portfolioButton').on('click', function(){
	$('nav ul').removeClass('show');
	$('.homepage').hide();
	$('.bioSection').hide();
	$('.contactSection').hide();
	$('.portfolioSection').fadeIn(500);
});


$('.contactButton').on('click', function(){
	$('nav ul').removeClass('show');
	$('.homepage').hide();
	$('.bioSection').hide();
	$('.portfolioSection').hide();
	$('.contactSection').fadeIn(500);
});