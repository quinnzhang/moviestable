var table_len = mov.length;

var full_indices = [];
for (var i = 0; i < table_len; i++){
	full_indices.push(i);
}
var col = 9999;

var strParentheses = function(n){
	var str = ""
	for (var i = 0; i < n; i++){
		str = str+")";
	}
	return str;
};

/* checks to see which input fields have values in them and calls appropriate function*/
var jsSearch = function(){
	var input_id = ["sTitle","sBefore","sAfter","sBetter","sWorse","sLonger","sShorter","sGenre"];
	var filter_array = [];

	// find the filters that have a non-empty input
	for (var i = 0; i < 8; i++){
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
								"(full_indices"+strParentheses(filter_len);
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
			function_str = "mergeSort(" + function_str + ")";
		}
		output_indices = eval(function_str);
		constructTable(output_indices);
		return output_indices;
	} else { // if str is null, then construct entire table
		if (col != 9999){
			output_indices = mergeSort(full_indices);
		}
		constructTable(output_indices);
	}

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

var mergeSort = function(input_indices){
	var input_len = input_indices.length;

	if (input_len <= 1){
		return input_indices;
	}

	var left = [];
	var right = [];
	var middle = Math.floor(input_len / 2);
	for (var i = 0; i < middle; i++){
		left.push(input_indices[i]);
	}
	for (var i = middle; i < input_len; i++){
		right.push(input_indices[i]);
	}

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
}

var merge = function(left, right){
	var result = [];
	var left_len = left.length;
	var right_len = right.length;

	while (left_len > 0 || right_len > 0){
		if (left_len > 0 && right_len > 0){
			if (col == 0){
				if (naturalCompare(mov[left[0]].title, mov[right[0]].title) < 1){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 0.5){
				if (naturalCompare(mov[left[0]].title, mov[right[0]].title) > -1){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 1){
				if (mov[left[0]].year >= mov[right[0]].year){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 1.5){
				if (mov[left[0]].year <= mov[right[0]].year){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 2){
				if (mov[left[0]].rating >= mov[right[0]].rating){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 2.5){
				if (mov[left[0]].rating <= mov[right[0]].rating){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 3){
				if (mov[left[0]].length >= mov[right[0]].length){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			} else if (col == 3.5){
				if (mov[left[0]].length <= mov[right[0]].length){
					result.push(left[0]);
					if (left_len > 1){
						left = left.slice(1,left_len);
					}
					left_len = left_len - 1;
				} else {
					result.push(right[0]);
					if (right_len > 1){
						right = right.slice(1,right_len);
					}
					right_len = right_len - 1;
				}
			}
		} else if (left_len > 0){
			result.push(left[0]);
			if (left_len > 1){
				left = left.slice(1,left_len);
			}
			left_len = left_len - 1;
		} else if (right_len > 0){
			result.push(right[0]);
			if (right_len > 1){
				right = right.slice(1,right_len);
			}
			right_len = right_len - 1;
		}
	}

	return result;
}
