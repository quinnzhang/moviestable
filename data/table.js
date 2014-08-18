var json_source = JSON.parse(movies);

    var options = {
        source: json_source,
        rowClass: "classy",
    };

    var moviesTable = $("<table></table>");
    moviesTable.jsonTable({
        head : ['N.', 'Title', 'Rating' ,'Year', 'Length', 'Genre', 'IMDB'],
        json : ['*', 'title', 'rating', 'year', 'length', 'genre', 'url'] // The '*' identity will be incremented at each line
    });
    moviesTable.jsonTableUpdate(options);
    $("#container").append(moviesTable);