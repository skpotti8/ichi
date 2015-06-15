$(function() {

	$(".btn-top").click(function(e) {
        $(document.body).stop(true,false).animate({"scrollTop":0},500);
    });
	
	$(".menu-link a").click(function(e) {
        var relId=$(this).attr("href");
		var scrollTop=$(relId).offset().top;
		$(document.body).stop(true,false).animate({"scrollTop":scrollTop},500);
		
    });
	
});
$(window).load(function(e) {
    
});
   