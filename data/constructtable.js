$(document).ready(function(){
	constructTable(full_indices);

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
});