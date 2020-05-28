$(function () {
	$(".menu-btn").click(function(){
		$(".menu-btn, .header-menu").toggleClass('active');
	});
	$('.interested-button').click(function(){
		$('.modal').addClass('active');
	});
	$(".form-submit").click(function(){
		$('.modal').removeClass('active');
	});
})