var table_len = mov.length;
var all_indices = [];

for (var i = 0; i < table_len; i++){
	all_indices.push(i);
}

var filterNA = function(input_indices){
	var input_len = input_indices.length;
	var noNA_indices = [];


	for (var i = 0; i < input_len; i++){
		if (mov[input_indices[i]].year > 0 && 
			mov[input_indices[i]].rating > 0 &&
			mov[input_indices[i]].votes > 0 &&
			mov[input_indices[i]].length > 0){
			noNA_indices.push(input_indices[i]);
		}
	}
	
	return noNA_indices;
};

if (noNA){
	var full_indices = filterNA(all_indices);
} else {
	var full_indices = all_indices;
}

var col = 9999;
var indices = full_indices;

var strParentheses = function(n){
	var str = ""
	for (var i = 0; i < n; i++){
		str = str+")";
	}
	return str;
};

var _timer = 0;
var jsSearchDelay = function(){
	if (_timer){
		window.clearTimeout(_timer);
	}

	_timer = window.setTimeout(function() {
		jsSearch();
	}, 500);
}


/* checks to see which input fields have values in them and calls appropriate function*/
var jsSearch = function(input_indices){
	var input_id = ["sTitle","sBefore","sAfter","sBetter","sWorse","sMore","sLess","sLonger","sShorter","sGenre"];
	var filter_array = [];
	input_indices = (typeof optionalArg === "undefined") ? full_indices : input_indices;

	// find the filters that have a non-empty input
	for (var i = 0; i < 10; i++){
		if (document.getElementById(input_id[i]).value != ""){
			filter_array.push(input_id[i]);
		}
	}

	// constructs a string using the input filters that have non-empty values
	if (filter_array){
		var filter_len = filter_array.length;
		var function_str = ""
		for (var i = 0; i < filter_len; i++){
			if (i+1 == filter_len){
				function_str = function_str+filter_array[i]+
								"(input_indices"+strParentheses(filter_len);
			} else {
				function_str = function_str+filter_array[i]+"(";
			}
		}
	} 

	var output_indices = full_indices;
	// if function str isn't null, then eval the function and construct table
	if (function_str != ""){
		// add sort to the filtered array if a column header is clicked
		if (col != 9999){
			function_str = "arraySort(" + function_str + ")";
		}

		output_indices = eval(function_str);
		constructTable(output_indices, display_increment);
	} else { // if str is null, then construct entire table
		if (col != 9999){
			output_indices = arraySort(full_indices);
		}
		constructTable(output_indices, display_increment);
	}

	// set global indices array to indices array after filter/sort
	indices = output_indices;
	display_len = 100;
	return 0;
};

var sTitle = function(input_indices){
	var input_len = input_indices.length;
	var title_key = document.getElementById("sTitle").value;
	var regtitlekey = new RegExp(title_key, 'i');
	var title_indices = [];

	if (title_key === ""){ // if nothing entered, fill indices inputted
		title_indices = input_indices;
	} else { // if using search, find matches and fill array with indices of matches
		for (var i = 0; i < input_len; i++){
			// use index specified by input_indices array and find the title in big table
			var mov_title = mov[input_indices[i]].title; 
			if (mov_title.match(regtitlekey)){
				title_indices.push(input_indices[i]);
			}
		}
	}

	return title_indices;
};

var sBefore = function(input_indices){
	var input_len = input_indices.length;
	var year = document.getElementById("sBefore").value;
	var yearfloat = parseFloat(year);
	var year_indices = [];

	if (year === ""){ // if not using, use input_indices
		year_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].year < yearfloat){
				year_indices.push(input_indices[i]);
			}
		}
	}
	
	return year_indices;
};

var sAfter = function(input_indices){
	var input_len = input_indices.length;
	var year = document.getElementById("sAfter").value;
	var yearfloat = parseFloat(year);
	var year_indices = [];

	if (year === ""){ // if not using, use input_indices
		year_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].year > yearfloat){
				year_indices.push(input_indices[i]);
			}
		}
	}
	
	return year_indices;
};

var sBetter = function(input_indices){
	var input_len = input_indices.length;
	var score = document.getElementById("sBetter").value;
	var scorefloat = parseFloat(score);
	var score_indices = [];

	if (score === ""){ // if not using, use input_indices
		score_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].rating > scorefloat){
				score_indices.push(input_indices[i]);
			}
		}
	}
	
	return score_indices;
};

var sWorse = function(input_indices){
	var input_len = input_indices.length;
	var score = document.getElementById("sWorse").value;
	var scorefloat = parseFloat(score);
	var score_indices = [];

	if (score === ""){ // if not using, use input_indices
		score_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].rating < scorefloat){
				score_indices.push(input_indices[i]);
			}
		}
	}
	
	return score_indices;
};

var sMore = function(input_indices){
	var input_len = input_indices.length;
	var votes = document.getElementById("sMore").value;
	var votesfloat = parseFloat(votes);
	var votes_indices = [];

	if (votes === ""){ // if not using, use input_indices
		votes_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].votes > votesfloat){
				votes_indices.push(input_indices[i]);
			}
		}
	}
	
	return votes_indices;
};

var sLess = function(input_indices){
	var input_len = input_indices.length;
	var votes = document.getElementById("sLess").value;
	var votesfloat = parseFloat(votes);
	var votes_indices = [];

	if (votes === ""){ // if not using, use input_indices
		votes_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].votes < votesfloat){
				votes_indices.push(input_indices[i]);
			}
		}
	}
	
	return votes_indices;
};

var sLonger = function(input_indices){
	var input_len = input_indices.length;
	var time = document.getElementById("sLonger").value;
	var timefloat = parseFloat(time);
	var time_indices = [];

	if (time === ""){ // if not using, use input_indices
		time_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].length > timefloat){
				time_indices.push(input_indices[i]);
			}
		}
	}
	
	return time_indices;
};

var sShorter = function(input_indices){
	var input_len = input_indices.length;
	var time = document.getElementById("sShorter").value;
	var timefloat = parseFloat(time);
	var time_indices = [];

	if (time === ""){ // if not using, use input_indices
		time_indices = input_indices;
	} else {
		for (var i = 0; i < input_len; i++){
			if (mov[input_indices[i]].length < timefloat){
				time_indices.push(input_indices[i]);
			}
		}
	}
	
	return time_indices;
};

var sGenre = function(input_indices){
	var input_len = input_indices.length;
	var genre_key = document.getElementById("sGenre").value;
	var genre_indices = [];

	if (genre_key === ""){ // if nothing entered, fill indices inputted
		genre_indices = input_indices;
	} else { // if using search, find matches and fill array with indices of matches
		var genre_array = genre_key.split(' ');
		var genre_array_len = genre_array.length;

		for (var i = 0; i < input_len; i++){
			var mov_genre = mov[input_indices[i]].genre;

			for (var j = 0; j < genre_array_len; j++){
				var reggenrekey = new RegExp(genre_array[j], 'i');
			
				if (j+1==genre_array_len && mov_genre.match(reggenrekey)){
					genre_indices.push(input_indices[i]); // if match all genres in array
				} else if (!mov_genre.match(reggenrekey)){ 
					break; //break the moment one of the genres doesn't match
				}

			}
		}
	}

	return genre_indices;
};
var naturalCompare = function (as, bs){
    var a, b, a1, b1, i= 0, n, L,
    rx=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
    if(as=== bs) return 0;
    a= as.toLowerCase().match(rx);
    b= bs.toLowerCase().match(rx);
    L= a.length;
    while(i<L){
        if(!b[i]) return 1;
        a1= a[i],
        b1= b[i++];
        if(a1!== b1){
            n= a1-b1;
            if(!isNaN(n)) return n;
            return a1>b1? 1:-1;
        }
    }
    return b[i]? -1:0;
}

var arraySort = function(input){
	if (col === 0){
		input.sort(function(a,b){return naturalCompare(mov[a].title, mov[b].title);});
	} else if (col === 0.5){
		input.sort(function(a,b){return naturalCompare(mov[b].title, mov[a].title);});
	} else if (col === 1){
		input.sort(function(a,b){return mov[a].year-mov[b].year;});
	} else if (col === 1.5){
		input.sort(function(a,b){return mov[b].year-mov[a].year;});
	} else if (col === 2){
		input.sort(function(a,b){return mov[a].rating-mov[b].rating;});
	} else if (col === 2.5){
		input.sort(function(a,b){return mov[b].rating-mov[a].rating;});
	} else if (col === 3){
		input.sort(function(a,b){return mov[a].length-mov[b].length;});
	} else if (col === 3.5){
		input.sort(function(a,b){return mov[b].length-mov[a].length;});
	} else if (col === 4){
		input.sort(function(a,b){return mov[b].votes-mov[a].votes;})
	} else if (col === 4.5){
		input.sort(function(a,b){return mov[a].votes-mov[b].votes;})
	}

	return input;
}