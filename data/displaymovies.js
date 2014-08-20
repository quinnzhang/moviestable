var mov = JSON.parse(movies);

    /*var options = {
        source: mov,
        rowClass: "classy",
    };

    var moviesTable = $("<table></table>");
    moviesTable.jsonTable({
        head : ['N.', 'Title', 'Rating' ,'Year', 'Length', 'Genre', 'IMDB'],
        json : ['*', 'title', 'rating', 'year', 'length', 'genre', 'url'] // The '*' identity will be incremented at each line
    });
    moviesTable.jsonTableUpdate(options);
    $("#container").append(moviesTable);*/

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

    //title.innerHTML = mov[i].title;
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

for (var i = 0; i < 100; i++){
    addRow(i);
}