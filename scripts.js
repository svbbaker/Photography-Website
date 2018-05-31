$(document).ready(function() {
	$('ul li').click(function(e){
		$(this).children('ul').slideToggle('medium');
	});

});