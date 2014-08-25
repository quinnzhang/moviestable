var mov = JSON.parse(movies);
var table = document.getElementById('movTable');

var addRow = function(i){
    var row = document.createElement('tr');
    addColumns(row, i);
    table.appendChild(row);
};

var addColumns = function(row, i){
    var title = document.createElement('td');
    var year = document.createElement('td');
    var rating = document.createElement('td');
    var length = document.createElement('td');
    var genre = document.createElement('td');

    var link = document.createElement('a');
    link.setAttribute('href', 'http://www.'+mov[i].url);
    link.innerHTML = mov[i].title;
    title.appendChild(link);

    year.innerHTML = mov[i].year;
    rating.innerHTML = mov[i].rating;
    length.innerHTML = mov[i].length;
    genre.innerHTML = mov[i].genre;

    row.appendChild(title);
    row.appendChild(year);
    row.appendChild(rating);
    row.appendChild(length);
    row.appendChild(genre);
};

var constructTable = function(index){
    var indices_len = index.length;

    while (table.hasChildNodes()){
        table.removeChild(table.lastChild);
    }
    for (var i = 0; i < indices_len; i++){
        addRow(index[i]);
    }
};