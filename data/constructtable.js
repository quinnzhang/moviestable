var display_len = 100;
var display_increment = 100;
$(document).ready(function(){
	constructTable(indices, display_len);

	var titleclick = false;
	$("#hTitle").click(function(){
		titleclick = !titleclick;
		if (titleclick){
			col = 0;
			jsSearch();
		} else {
			col = 0.5;
			jsSearch();
		}	
	});

	var yearclick = false;
	$("#hYear").click(function(){
		yearclick = !yearclick;
		if (yearclick){
			col = 1;
			jsSearch();
		} else {
			col = 1.5;
			jsSearch();
		}	
	});

	var ratingclick = false;
	$("#hRating").click(function(){
		ratingclick = !ratingclick;
		if (ratingclick){
			col = 2;
			jsSearch();
		} else {
			col = 2.5;
			jsSearch();
		}		
	});

	var lengthclick = false;
	$("#hLength").click(function(){
		lengthclick = !lengthclick;
		if (lengthclick){
			col = 3;
			jsSearch();
		} else {
			col = 3.5;
			jsSearch();
		}
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() + $(window).height() == $(document).height()){
			var indices_len = indices.length;
			if (indices_len > display_len){
				display_len = display_len + display_increment;
				incrementTable(indices, display_len, display_increment);
			}
		}
	})
});