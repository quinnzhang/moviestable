var display_len = 100;
var display_increment = 100;
var noNA = true;
var desc_text = jsontoString(function(){/*!
	<div id ="desc_text"> This is a client-side, javascript-based table to help filter,
	sort, and search movies from IMDB. Initial loading may take a couple of minutes.
		<ul>
			<li>Click on the Title, Year, Rating, or Length header to sort.</li>
			<li>The input boxes will search and filter 500 ms after each keystroke.</li>
			<li>Proper inputs for the Title search box are alphanumeric characters</li>
			<li>Proper inputs for the Year, Rating, and Length input boxes are numbers, 
			both float and int.</li>
			<li>Type in the category you want to filter genre by. If you want to 
			filter by multiple categories, type a space between each one (i.e. "action crime")</li>
		</ul>
	To close this description, simply click the text again.
	</div>
	*/});

$(document).ready(function(){
	constructTable(indices, display_len);
	var indices_len = indices.length;

	/*var desc_click = false;
	$("#description").click(function(){
		desc_click = !desc_click;
		if (desc_click){
			$(this).append(desc_text);
			$("#desc_text").css("color", "black");
		} else {
			$("#desc_text").remove();
		}

	});*/

	$("tr").hover(
		function(){
			$(this).css("background", "#F5FABE");
		},
		function(){
			$(this).css("background", "");
		}
	);

	$(".tHeaders").hover(
		function(){
			$(this).css("background", "#DCFCDC");
		},
		function(){
			$(this).css("background", "");
		}
	);

	var titleclick = false;
	$("#hTitle").click(function(){
		titleclick = !titleclick;
		if (titleclick){
			col = 0;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#titleA").css('color', 'red');
		} else {
			col = 0.5;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#titleD").css('color', 'red');
		}	
	});

	var yearclick = false;
	$("#hYear").click(function(){
		yearclick = !yearclick;
		if (yearclick){
			col = 1.5;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#yearD").css('color', 'red');

		} else {
			col = 1;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#yearA").css('color', 'red');
		}	
	});

	var ratingclick = false;
	$("#hRating").click(function(){
		ratingclick = !ratingclick;
		if (ratingclick){
			col = 2.5;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#ratingD").css('color', 'red');

		} else {
			col = 2;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#ratingA").css('color', 'red');
		}		
	});

	var votesclick = false;
	$("#hVotes").click(function(){
		votesclick = !votesclick;
		if (votesclick){
			col = 4;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#votesD").css('color', 'red');
		} else {
			col = 4.5;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#votesA").css('color', 'red');
		}		
	});

	var lengthclick = false;
	$("#hLength").click(function(){
		lengthclick = !lengthclick;
		if (lengthclick){
			col = 3;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#lengthA").css('color', 'red');
		} else {
			col = 3.5;
			jsSearch(indices);
			$(".sort").css('color', 'gray');
			$("#lengthD").css('color', 'red');
		}
	});


	var noNA2 = true;
	$("#filterNA").click(function(){
		noNA2 = !noNA2;
		noNA = !noNA;

		if (noNA2){
			$("#filterNA").css("color", "red");
			$(".sort").css('color', 'gray');
			$("#sTitle").val('');
			$("#sBefore").val('');
			$("#sAfter").val('');
			$("#sBetter").val('');
			$("#sWorse").val('');
			$("#sMore").val('');
			$("#sLess").val('');
			$("#sLonger").val('');
			$("#sShorter").val('');
			$("#sGenre").val('');
			titleclick = false;
			yearclick = false;
			ratingclick = false;
			votesclick = false;
			lengthclick = false;
			full_indices = filterNA(all_indices);
			constructTable(full_indices, display_len);
		} else {
			$("#filterNA").css("color", "gray");
			$(".sort").css('color', 'gray');
			$("#sTitle").val('');
			$("#sBefore").val('');
			$("#sAfter").val('');
			$("#sBetter").val('');
			$("#sWorse").val('');
			$("#sMore").val('');
			$("#sLess").val('');
			$("#sLonger").val('');
			$("#sShorter").val('');
			$("#sGenre").val('');
			titleclick = false;
			yearclick = false;
			ratingclick = false;
			votesclick = false;
			lengthclick = false;			
			full_indices = all_indices;
			constructTable(full_indices, display_len);
		}
	});

	$(window).scroll(function(){
		if ($(window).scrollTop() + $(window).height() == $(document).height()){
			if (indices_len > display_len){
				display_len = display_len + display_increment;
				incrementTable(indices, display_len, display_increment);
			}
		}
	})
});