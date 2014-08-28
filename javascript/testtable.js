var jsontoString = function(f) {
    return f.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
}

var testmovies = jsontoString(function(){/*!
[
  {
    "rating": 8.6, 
    "votes": 156598, 
    "title": "Guardians of the Galaxy", 
    "url": "imdb.com/title/tt2015381/", 
    "length": 121, 
    "year": 2014, 
    "genre": "Action, Adventure, Sci-Fi"
  }, 
  {
    "rating": 6.3, 
    "votes": 30484, 
    "title": "The Expendables 3", 
    "url": "imdb.com/title/tt2333784/", 
    "length": 126, 
    "year": 2014, 
    "genre": "Action, Adventure, Thriller"
  }, 
  {
    "rating": 7.2, 
    "votes": 7277, 
    "title": "Sin City: A Dame to Kill For", 
    "url": "imdb.com/title/tt0458481/", 
    "length": 102, 
    "year": 2014, 
    "genre": "Crime, Thriller"
  }, 
  {
    "rating": 6.4, 
    "votes": 23980, 
    "title": "Teenage Mutant Ninja Turtles", 
    "url": "imdb.com/title/tt1291150/", 
    "length": 101, 
    "year": 2014, 
    "genre": "Action, Adventure, Comedy, Fantasy, Sci-Fi"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "Avengers: Age of Ultron", 
    "url": "imdb.com/title/tt2395427/", 
    "length": 0, 
    "year": 2015, 
    "genre": "Action, Adventure, Fantasy, Sci-Fi"
  }, 
  {
    "rating": 7.1, 
    "votes": 4451, 
    "title": "The Giver", 
    "url": "imdb.com/title/tt0435651/", 
    "length": 97, 
    "year": 2014, 
    "genre": "Drama, Sci-Fi"
  }, 
  {
    "rating": 7.0, 
    "votes": 131337, 
    "title": "Divergent", 
    "url": "imdb.com/title/tt1840309/", 
    "length": 139, 
    "year": 2014, 
    "genre": "Action, Adventure, Sci-Fi, Thriller"
  }, 
  {
    "rating": 6.6, 
    "votes": 40723, 
    "title": "Lucy", 
    "url": "imdb.com/title/tt2872732/", 
    "length": 89, 
    "year": 2014, 
    "genre": "Action, Sci-Fi, Thriller"
  }, 
  {
    "rating": 7.1, 
    "votes": 1817, 
    "title": "If I Stay", 
    "url": "imdb.com/title/tt1355630/", 
    "length": 106, 
    "year": 2014, 
    "genre": "Drama"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "Batman v Superman: Dawn of Justice", 
    "url": "imdb.com/title/tt2975590/", 
    "length": 0, 
    "year": 2016, 
    "genre": "Action, Adventure, Fantasy, Sci-Fi"
  }, 
  {
    "rating": 6.8, 
    "votes": 5467, 
    "title": "Let's Be Cops", 
    "url": "imdb.com/title/tt1924435/", 
    "length": 104, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 8.2, 
    "votes": 66581, 
    "title": "The Fault in Our Stars", 
    "url": "imdb.com/title/tt2582846/", 
    "length": 126, 
    "year": 2014, 
    "genre": "Drama, Romance"
  }, 
  {
    "rating": 7.3, 
    "votes": 89462, 
    "title": "Maleficent", 
    "url": "imdb.com/title/tt1587310/", 
    "length": 97, 
    "year": 2014, 
    "genre": "Action, Adventure, Family, Fantasy, Romance"
  }, 
  {
    "rating": 7.1, 
    "votes": 173261, 
    "title": "The Amazing Spider-Man 2", 
    "url": "imdb.com/title/tt1872181/", 
    "length": 142, 
    "year": 2014, 
    "genre": "Action, Adventure, Fantasy"
  }, 
  {
    "rating": 8.0, 
    "votes": 218389, 
    "title": "Captain America: The Winter Soldier", 
    "url": "imdb.com/title/tt1843866/", 
    "length": 136, 
    "year": 2014, 
    "genre": "Action, Adventure, Sci-Fi"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day", 
    "url": "imdb.com/title/tt1698641/", 
    "length": 81, 
    "year": 2014, 
    "genre": "Comedy, Family"
  }, 
  {
    "rating": 7.3, 
    "votes": 658, 
    "title": "Clouds of Sils Maria", 
    "url": "imdb.com/title/tt2452254/", 
    "length": 124, 
    "year": 2014, 
    "genre": "Drama"
  }, 
  {
    "rating": 7.2, 
    "votes": 166152, 
    "title": "GoldenEye", 
    "url": "imdb.com/title/tt0113189/", 
    "length": 130, 
    "year": 1995, 
    "genre": "Action, Adventure, Thriller"
  }, 
  {
    "rating": 5.6, 
    "votes": 28246, 
    "title": "The Big Wedding", 
    "url": "imdb.com/title/tt1931435/", 
    "length": 89, 
    "year": 2013, 
    "genre": "Comedy"
  }, 
  {
    "rating": 6.3, 
    "votes": 7212, 
    "title": "Into the Storm", 
    "url": "imdb.com/title/tt2106361/", 
    "length": 89, 
    "year": 2014, 
    "genre": "Action, Thriller"
  }, 
  {
    "rating": 8.8, 
    "votes": 22215, 
    "title": "Boyhood", 
    "url": "imdb.com/title/tt1065073/", 
    "length": 165, 
    "year": 2014, 
    "genre": "Drama"
  }, 
  {
    "rating": 8.2, 
    "votes": 518078, 
    "title": "Sin City", 
    "url": "imdb.com/title/tt0401792/", 
    "length": 124, 
    "year": 2005, 
    "genre": "Crime, Thriller"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "The Maze Runner", 
    "url": "imdb.com/title/tt1790864/", 
    "length": 113, 
    "year": 2014, 
    "genre": "Action, Mystery, Sci-Fi, Thriller"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "The Hunger Games: Mockingjay - Part 1", 
    "url": "imdb.com/title/tt1951265/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Adventure, Sci-Fi"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "The Second Best Exotic Marigold Hotel", 
    "url": "imdb.com/title/tt2555736/", 
    "length": 0, 
    "year": 2015, 
    "genre": "Comedy, Drama"
  }, 
  {
    "rating": 7.3, 
    "votes": 183469, 
    "title": "Forgetting Sarah Marshall", 
    "url": "imdb.com/title/tt0800039/", 
    "length": 111, 
    "year": 2008, 
    "genre": "Comedy, Drama, Romance"
  }, 
  {
    "rating": 8.3, 
    "votes": 359641, 
    "title": "Pan's Labyrinth", 
    "url": "imdb.com/title/tt0457430/", 
    "length": 118, 
    "year": 2006, 
    "genre": "Drama, Fantasy, War"
  }, 
  {
    "rating": 8.1, 
    "votes": 261990, 
    "title": "Rocky", 
    "url": "imdb.com/title/tt0075148/", 
    "length": 119, 
    "year": 1976, 
    "genre": "Drama, Sport"
  }, 
  {
    "rating": 6.5, 
    "votes": 13959, 
    "title": "Kill Your Darlings", 
    "url": "imdb.com/title/tt1311071/", 
    "length": 104, 
    "year": 2013, 
    "genre": "Biography, Drama, Romance, Thriller"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "The Best of Me", 
    "url": "imdb.com/title/tt1972779/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Drama, Romance"
  }, 
  {
    "rating": 7.8, 
    "votes": 343495, 
    "title": "Kick-Ass", 
    "url": "imdb.com/title/tt1250777/", 
    "length": 117, 
    "year": 2010, 
    "genre": "Action, Comedy, Romance"
  }, 
  {
    "rating": 7.1, 
    "votes": 274224, 
    "title": "Pacific Rim", 
    "url": "imdb.com/title/tt1663662/", 
    "length": 132, 
    "year": 2013, 
    "genre": "Action, Adventure, Sci-Fi"
  }, 
  {
    "rating": 7.9, 
    "votes": 304297, 
    "title": "Star Trek Into Darkness", 
    "url": "imdb.com/title/tt1408101/", 
    "length": 132, 
    "year": 2013, 
    "genre": "Action, Adventure, Sci-Fi"
  }, 
  {
    "rating": 8.4, 
    "votes": 202443, 
    "title": "X-Men: Days of Future Past", 
    "url": "imdb.com/title/tt1877832/", 
    "length": 131, 
    "year": 2014, 
    "genre": "Action, Adventure, Sci-Fi, Thriller"
  }, 
  {
    "rating": 6.5, 
    "votes": 22975, 
    "title": "Hercules", 
    "url": "imdb.com/title/tt1267297/", 
    "length": 98, 
    "year": 2014, 
    "genre": "Action, Adventure"
  }, 
  {
    "rating": 8.1, 
    "votes": 105723, 
    "title": "Dawn of the Planet of the Apes", 
    "url": "imdb.com/title/tt2103281/", 
    "length": 130, 
    "year": 2014, 
    "genre": "Action, Drama, Sci-Fi, Thriller"
  }, 
  {
    "rating": 8.0, 
    "votes": 224258, 
    "title": "Dead Poets Society", 
    "url": "imdb.com/title/tt0097165/", 
    "length": 128, 
    "year": 1989, 
    "genre": "Drama"
  }, 
  {
    "rating": 8.2, 
    "votes": 367635, 
    "title": "Blade Runner", 
    "url": "imdb.com/title/tt0083658/", 
    "length": 117, 
    "year": 1982, 
    "genre": "Sci-Fi, Thriller"
  }, 
  {
    "rating": 8.5, 
    "votes": 536990, 
    "title": "The Green Mile", 
    "url": "imdb.com/title/tt0120689/", 
    "length": 189, 
    "year": 1999, 
    "genre": "Crime, Drama, Fantasy, Mystery"
  }, 
  {
    "rating": 7.4, 
    "votes": 315276, 
    "title": "Limitless", 
    "url": "imdb.com/title/tt1219289/", 
    "length": 105, 
    "year": 2011, 
    "genre": "Mystery, Sci-Fi, Thriller"
  }, 
  {
    "rating": 8.1, 
    "votes": 608, 
    "title": "Laggies", 
    "url": "imdb.com/title/tt2034031/", 
    "length": 100, 
    "year": 2014, 
    "genre": "Comedy, Romance"
  }, 
  {
    "rating": 6.0, 
    "votes": 1494, 
    "title": "Life After Beth", 
    "url": "imdb.com/title/tt2581244/", 
    "length": 91, 
    "year": 2014, 
    "genre": "Comedy, Horror, Romance"
  }, 
  {
    "rating": 7.9, 
    "votes": 395364, 
    "title": "Silver Linings Playbook", 
    "url": "imdb.com/title/tt1045658/", 
    "length": 122, 
    "year": 2012, 
    "genre": "Comedy, Drama, Romance"
  }, 
  {
    "rating": 8.5, 
    "votes": 638092, 
    "title": "The Departed", 
    "url": "imdb.com/title/tt0407887/", 
    "length": 151, 
    "year": 2006, 
    "genre": "Crime, Drama, Thriller"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "This Is Where I Leave You", 
    "url": "imdb.com/title/tt1371150/", 
    "length": 103, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 6.6, 
    "votes": 469, 
    "title": "Open Windows", 
    "url": "imdb.com/title/tt2409818/", 
    "length": 100, 
    "year": 2014, 
    "genre": "Action, Crime, Thriller"
  }, 
  {
    "rating": 7.4, 
    "votes": 314, 
    "title": "Rudderless", 
    "url": "imdb.com/title/tt1798243/", 
    "length": 105, 
    "year": 2014, 
    "genre": "Comedy, Drama, Music"
  }, 
  {
    "rating": 7.3, 
    "votes": 2420, 
    "title": "What If", 
    "url": "imdb.com/title/tt1486834/", 
    "length": 98, 
    "year": 2013, 
    "genre": "Comedy, Drama, Romance"
  }, 
  {
    "rating": 7.5, 
    "votes": 3730, 
    "title": "The Hundred-Foot Journey", 
    "url": "imdb.com/title/tt2980648/", 
    "length": 122, 
    "year": 2014, 
    "genre": "Drama, Romance"
  }, 
  {
    "rating": 7.7, 
    "votes": 239558, 
    "title": "Midnight in Paris", 
    "url": "imdb.com/title/tt1605783/", 
    "length": 94, 
    "year": 2011, 
    "genre": "Comedy, Fantasy, Romance"
  }, 
  {
    "rating": 7.1, 
    "votes": 195414, 
    "title": "RED", 
    "url": "imdb.com/title/tt1245526/", 
    "length": 111, 
    "year": 2010, 
    "genre": "Action, Comedy, Crime, Thriller"
  }, 
  {
    "rating": 6.5, 
    "votes": 150163, 
    "title": "Olympus Has Fallen", 
    "url": "imdb.com/title/tt2302755/", 
    "length": 119, 
    "year": 2013, 
    "genre": "Action, Thriller"
  }, 
  {
    "rating": 0, 
    "votes": 0, 
    "title": "Nightcrawler", 
    "url": "imdb.com/title/tt2872718/", 
    "length": 117, 
    "year": 2014, 
    "genre": "Crime, Drama"
  }, 
  {
    "rating": 6.8, 
    "votes": 124301, 
    "title": "Escape Plan", 
    "url": "imdb.com/title/tt1211956/", 
    "length": 115, 
    "year": 2013, 
    "genre": "Action, Mystery, Thriller"
  }
]
*/});