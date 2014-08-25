var jsontoString = function(f) {
    return f.toString().replace(/^[^\/]+\/\*!?/, '').replace(/\*\/[^\/]+$/, '');
}

var testmovies = jsontoString(function(){/*!
[
  {
    "rating": 8.3, 
    "title": "Snatch.", 
    "url": "imdb.com/title/tt0208092/", 
    "length": 104, 
    "year": 2000, 
    "genre": "Comedy,Crime"
  }, 
  {
    "rating": 7.1, 
    "title": "The Patriot", 
    "url": "imdb.com/title/tt0187393/", 
    "length": 165, 
    "year": 2000, 
    "genre": "Action,Drama,War"
  }, 
  {
    "rating": 8.5, 
    "title": "Memento", 
    "url": "imdb.com/title/tt0209144/", 
    "length": 113, 
    "year": 2000, 
    "genre": "Mystery,Thriller"
  }, 
  {
    "rating": 7.4, 
    "title": "Dawn of the Dead", 
    "url": "imdb.com/title/tt0363547/", 
    "length": 101, 
    "year": 2004, 
    "genre": "Action,Horror,Sci-Fi,Thriller"
  }, 
  {
    "rating": 0, 
    "title": "Horrible Bosses 2", 
    "url": "imdb.com/title/tt2170439/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 5.1, 
    "title": "Eragon", 
    "url": "imdb.com/title/tt0449010/", 
    "length": 104, 
    "year": 2006, 
    "genre": "Action,Adventure,Family,Fantasy"
  }, 
  {
    "rating": 0, 
    "title": "The Interview", 
    "url": "imdb.com/title/tt2788710/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 6.4, 
    "title": "Oz the Great and Powerful", 
    "url": "imdb.com/title/tt1623205/", 
    "length": 130, 
    "year": 2013, 
    "genre": "Adventure,Family,Fantasy"
  }, 
  {
    "rating": 6.8, 
    "title": "TRON: Legacy", 
    "url": "imdb.com/title/tt1104001/", 
    "length": 125, 
    "year": 2010, 
    "genre": "Action,Adventure,Sci-Fi"
  }, 
  {
    "rating": 7.8, 
    "title": "Harry Potter and the Prisoner of Azkaban", 
    "url": "imdb.com/title/tt0304141/", 
    "length": 142, 
    "year": 2004, 
    "genre": "Adventure,Family,Fantasy,Mystery"
  }, 
  {
    "rating": 6.1, 
    "title": "I Am Number Four", 
    "url": "imdb.com/title/tt1464540/", 
    "length": 109, 
    "year": 2011, 
    "genre": "Action,Adventure,Sci-Fi,Thriller"
  }, 
  {
    "rating": 8.5, 
    "title": "The Green Mile", 
    "url": "imdb.com/title/tt0120689/", 
    "length": 189, 
    "year": 1999, 
    "genre": "Crime,Drama,Fantasy,Mystery"
  }, 
  {
    "rating": 5.0, 
    "title": "After Earth", 
    "url": "imdb.com/title/tt1815862/", 
    "length": 100, 
    "year": 2013, 
    "genre": "Action,Adventure,Sci-Fi"
  }, 
  {
    "rating": 8.3, 
    "title": "The Hunt", 
    "url": "imdb.com/title/tt2106476/", 
    "length": 115, 
    "year": 2012, 
    "genre": "Drama"
  }, 
  {
    "rating": 6.8, 
    "title": "Gangster Squad", 
    "url": "imdb.com/title/tt1321870/", 
    "length": 113, 
    "year": 2013, 
    "genre": "Action,Crime,Drama,Thriller"
  }, 
  {
    "rating": 5.5, 
    "title": "And So It Goes", 
    "url": "imdb.com/title/tt2465146/", 
    "length": 94, 
    "year": 2014, 
    "genre": "Comedy,Drama,Romance"
  }, 
  {
    "rating": 8.8, 
    "title": "Inception", 
    "url": "imdb.com/title/tt1375666/", 
    "length": 148, 
    "year": 2010, 
    "genre": "Action,Adventure,Mystery,Sci-Fi,Thriller"
  }, 
  {
    "rating": 6.9, 
    "title": "Draft Day", 
    "url": "imdb.com/title/tt2223990/", 
    "length": 110, 
    "year": 2014, 
    "genre": "Drama,Sport"
  }, 
  {
    "rating": 8.1, 
    "title": "The Help", 
    "url": "imdb.com/title/tt1454029/", 
    "length": 146, 
    "year": 2011, 
    "genre": "Drama"
  }, 
  {
    "rating": 5.7, 
    "title": "Planet of the Apes", 
    "url": "imdb.com/title/tt0133152/", 
    "length": 119, 
    "year": 2001, 
    "genre": "Action,Adventure,Sci-Fi,Thriller"
  }, 
  {
    "rating": 6.4, 
    "title": "Take Me Home Tonight", 
    "url": "imdb.com/title/tt0810922/", 
    "length": 97, 
    "year": 2011, 
    "genre": "Comedy,Drama,Romance"
  }, 
  {
    "rating": 6.2, 
    "title": "Scary Movie", 
    "url": "imdb.com/title/tt0175142/", 
    "length": 88, 
    "year": 2000, 
    "genre": "Comedy"
  }, 
  {
    "rating": 6.4, 
    "title": "Delivery Man", 
    "url": "imdb.com/title/tt2387559/", 
    "length": 105, 
    "year": 2013, 
    "genre": "Comedy,Drama"
  }, 
  {
    "rating": 4.4, 
    "title": "The Single Moms Club", 
    "url": "imdb.com/title/tt2465140/", 
    "length": 111, 
    "year": 2014, 
    "genre": "Comedy,Drama"
  }, 
  {
    "rating": 6.8, 
    "title": "Top Gun", 
    "url": "imdb.com/title/tt0092099/", 
    "length": 110, 
    "year": 1986, 
    "genre": "Action,Drama,Romance"
  }, 
  {
    "rating": 6.3, 
    "title": "Dark Shadows", 
    "url": "imdb.com/title/tt1077368/", 
    "length": 113, 
    "year": 2012, 
    "genre": "Comedy,Horror"
  }, 
  {
    "rating": 5.8, 
    "title": "Child of God", 
    "url": "imdb.com/title/tt1951095/", 
    "length": 104, 
    "year": 2013, 
    "genre": "Crime,Drama,Thriller"
  }, 
  {
    "rating": 7.8, 
    "title": "(500) Days of Summer", 
    "url": "imdb.com/title/tt1022603/", 
    "length": 95, 
    "year": 2009, 
    "genre": "Comedy,Drama,Romance"
  }, 
  {
    "rating": 7.0, 
    "title": "The Italian Job", 
    "url": "imdb.com/title/tt0317740/", 
    "length": 111, 
    "year": 2003, 
    "genre": "Action,Crime,Thriller"
  }, 
  {
    "rating": 6.8, 
    "title": "Dirty Dancing", 
    "url": "imdb.com/title/tt0092890/", 
    "length": 100, 
    "year": 1987, 
    "genre": "Drama,Music,Romance"
  }, 
  {
    "rating": 0, 
    "title": "Terminator: Genisys", 
    "url": "imdb.com/title/tt1340138/", 
    "length": 0, 
    "year": 2015, 
    "genre": "Action,Adventure,Sci-Fi,Thriller"
  }, 
  {
    "rating": 7.3, 
    "title": "The Great Gatsby", 
    "url": "imdb.com/title/tt1343092/", 
    "length": 143, 
    "year": 2013, 
    "genre": "Drama,Romance"
  }, 
  {
    "rating": 4.3, 
    "title": "Behaving Badly", 
    "url": "imdb.com/title/tt2314824/", 
    "length": 97, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 7.1, 
    "title": "The Amazing Spider-Man", 
    "url": "imdb.com/title/tt0948470/", 
    "length": 136, 
    "year": 2012, 
    "genre": "Action,Adventure,Fantasy"
  }, 
  {
    "rating": 6.8, 
    "title": "The Expendables 2", 
    "url": "imdb.com/title/tt1764651/", 
    "length": 103, 
    "year": 2012, 
    "genre": "Action,Adventure,Thriller"
  }, 
  {
    "rating": 0, 
    "title": "Dumb and Dumber To", 
    "url": "imdb.com/title/tt2096672/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 6.5, 
    "title": "Homefront", 
    "url": "imdb.com/title/tt2312718/", 
    "length": 100, 
    "year": 2013, 
    "genre": "Action,Crime,Thriller"
  }, 
  {
    "rating": 6.2, 
    "title": "Jack Ryan: Shadow Recruit", 
    "url": "imdb.com/title/tt1205537/", 
    "length": 105, 
    "year": 2014, 
    "genre": "Action,Mystery,Thriller"
  }, 
  {
    "rating": 8.1, 
    "title": "Prisoners", 
    "url": "imdb.com/title/tt1392214/", 
    "length": 153, 
    "year": 2013, 
    "genre": "Crime,Drama,Thriller"
  }, 
  {
    "rating": 8.7, 
    "title": "Guardians of the Galaxy", 
    "url": "imdb.com/title/tt2015381/", 
    "length": 121, 
    "year": 2014, 
    "genre": "Action,Adventure,Sci-Fi"
  }, 
  {
    "rating": 6.4, 
    "title": "Teenage Mutant Ninja Turtles", 
    "url": "imdb.com/title/tt1291150/", 
    "length": 101, 
    "year": 2014, 
    "genre": "Action,Adventure,Comedy,Fantasy,Sci-Fi"
  }, 
  {
    "rating": 6.2, 
    "title": "The Expendables 3", 
    "url": "imdb.com/title/tt2333784/", 
    "length": 126, 
    "year": 2014, 
    "genre": "Action,Adventure,Thriller"
  }, 
  {
    "rating": 0, 
    "title": "Avengers: Age of Ultron", 
    "url": "imdb.com/title/tt2395427/", 
    "length": 0, 
    "year": 2015, 
    "genre": "Action,Adventure,Fantasy,Sci-Fi"
  }, 
  {
    "rating": 0, 
    "title": "Into the Woods", 
    "url": "imdb.com/title/tt2180411/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Comedy,Family,Fantasy,Musical"
  }, 
  {
    "rating": 7.8, 
    "title": "The Goonies", 
    "url": "imdb.com/title/tt0089218/", 
    "length": 114, 
    "year": 1985, 
    "genre": "Adventure,Comedy,Family"
  }, 
  {
    "rating": 6.1, 
    "title": "Sucker Punch", 
    "url": "imdb.com/title/tt0978764/", 
    "length": 110, 
    "year": 2011, 
    "genre": "Action,Adventure,Fantasy"
  }, 
  {
    "rating": 8.7, 
    "title": "The Matrix", 
    "url": "imdb.com/title/tt0133093/", 
    "length": 136, 
    "year": 1999, 
    "genre": "Action,Sci-Fi"
  }, 
  {
    "rating": 5.8, 
    "title": "The Nut Job", 
    "url": "imdb.com/title/tt1821658/", 
    "length": 85, 
    "year": 2014, 
    "genre": "Animation,Adventure,Comedy,Family"
  }, 
  {
    "rating": 8.5, 
    "title": "Apocalypse Now", 
    "url": "imdb.com/title/tt0078788/", 
    "length": 153, 
    "year": 1979, 
    "genre": "Drama,War"
  }, 
  {
    "rating": 7.6, 
    "title": "The Raid: Redemption", 
    "url": "imdb.com/title/tt1899353/", 
    "length": 101, 
    "year": 2011, 
    "genre": "Action,Crime,Thriller"
  }, 
  {
    "rating": 7.4, 
    "title": "The Descendants", 
    "url": "imdb.com/title/tt1033575/", 
    "length": 115, 
    "year": 2011, 
    "genre": "Comedy,Drama"
  }, 
  {
    "rating": 6.5, 
    "title": "Turbo", 
    "url": "imdb.com/title/tt1860353/", 
    "length": 96, 
    "year": 2013, 
    "genre": "Animation,Adventure,Comedy,Family,Sport"
  }, 
  {
    "rating": 5.7, 
    "title": "Fantastic Four", 
    "url": "imdb.com/title/tt0120667/", 
    "length": 106, 
    "year": 2005, 
    "genre": "Action,Adventure,Fantasy,Sci-Fi"
  }, 
  {
    "rating": 7.3, 
    "title": "August: Osage County", 
    "url": "imdb.com/title/tt1322269/", 
    "length": 121, 
    "year": 2013, 
    "genre": "Drama"
  }, 
  {
    "rating": 7.1, 
    "title": "The Master", 
    "url": "imdb.com/title/tt1560747/", 
    "length": 144, 
    "year": 2012, 
    "genre": "Drama"
  }, 
  {
    "rating": 7.5, 
    "title": "RoboCop", 
    "url": "imdb.com/title/tt0093870/", 
    "length": 102, 
    "year": 1987, 
    "genre": "Action,Crime,Sci-Fi"
  }, 
  {
    "rating": 6.5, 
    "title": "Olympus Has Fallen", 
    "url": "imdb.com/title/tt2302755/", 
    "length": 119, 
    "year": 2013, 
    "genre": "Action,Thriller"
  }, 
  {
    "rating": 7.4, 
    "title": "Monsters University", 
    "url": "imdb.com/title/tt1453405/", 
    "length": 104, 
    "year": 2013, 
    "genre": "Animation,Adventure,Comedy,Family,Fantasy"
  }, 
  {
    "rating": 7.0, 
    "title": "Dredd", 
    "url": "imdb.com/title/tt1343727/", 
    "length": 95, 
    "year": 2012, 
    "genre": "Action,Sci-Fi"
  }, 
  {
    "rating": 6.7, 
    "title": "Epic", 
    "url": "imdb.com/title/tt0848537/", 
    "length": 102, 
    "year": 2013, 
    "genre": "Animation,Adventure,Family,Fantasy"
  }, 
  {
    "rating": 7.0, 
    "title": "Mr. Peabody & Sherman", 
    "url": "imdb.com/title/tt0864835/", 
    "length": 92, 
    "year": 2014, 
    "genre": "Animation,Adventure,Comedy,Family,Sci-Fi"
  }, 
  {
    "rating": 6.8, 
    "title": "The Inbetweeners Movie", 
    "url": "imdb.com/title/tt1716772/", 
    "length": 97, 
    "year": 2011, 
    "genre": "Comedy"
  }, 
  {
    "rating": 7.3, 
    "title": "The Hunger Games", 
    "url": "imdb.com/title/tt1392170/", 
    "length": 142, 
    "year": 2012, 
    "genre": "Adventure,Sci-Fi"
  }, 
  {
    "rating": 8.0, 
    "title": "The Hobbit: An Unexpected Journey", 
    "url": "imdb.com/title/tt0903624/", 
    "length": 169, 
    "year": 2012, 
    "genre": "Adventure,Fantasy"
  }, 
  {
    "rating": 8.1, 
    "title": "Jaws", 
    "url": "imdb.com/title/tt0073195/", 
    "length": 124, 
    "year": 1975, 
    "genre": "Adventure,Thriller"
  }, 
  {
    "rating": 6.5, 
    "title": "Deliver Us from Evil", 
    "url": "imdb.com/title/tt2377322/", 
    "length": 118, 
    "year": 2014, 
    "genre": "Crime,Horror,Thriller"
  }, 
  {
    "rating": 7.4, 
    "title": "The Secret Life of Walter Mitty", 
    "url": "imdb.com/title/tt0359950/", 
    "length": 114, 
    "year": 2013, 
    "genre": "Adventure,Comedy,Drama,Fantasy"
  }, 
  {
    "rating": 7.2, 
    "title": "Transformers", 
    "url": "imdb.com/title/tt0418279/", 
    "length": 144, 
    "year": 2007, 
    "genre": "Action,Adventure,Sci-Fi"
  }, 
  {
    "rating": 7.8, 
    "title": "X-Men: First Class", 
    "url": "imdb.com/title/tt1270798/", 
    "length": 132, 
    "year": 2011, 
    "genre": "Action,Adventure,Sci-Fi"
  }, 
  {
    "rating": 4.4, 
    "title": "Movie 43", 
    "url": "imdb.com/title/tt1333125/", 
    "length": 94, 
    "year": 2013, 
    "genre": "Comedy"
  }, 
  {
    "rating": 0, 
    "title": "Big Hero 6", 
    "url": "imdb.com/title/tt2245084/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Animation,Action,Comedy,Family"
  }, 
  {
    "rating": 0, 
    "title": "Batman v Superman: Dawn of Justice", 
    "url": "imdb.com/title/tt2975590/", 
    "length": 0, 
    "year": 2016, 
    "genre": "Action,Adventure,Fantasy,Sci-Fi"
  }, 
  {
    "rating": 7.0, 
    "title": "Divergent", 
    "url": "imdb.com/title/tt1840309/", 
    "length": 139, 
    "year": 2014, 
    "genre": "Action,Adventure,Romance,Sci-Fi"
  }, 
  {
    "rating": 6.6, 
    "title": "Lucy", 
    "url": "imdb.com/title/tt2872732/", 
    "length": 89, 
    "year": 2014, 
    "genre": "Action,Sci-Fi"
  }, 
  {
    "rating": 6.5, 
    "title": "Hercules", 
    "url": "imdb.com/title/tt1267297/", 
    "length": 98, 
    "year": 2014, 
    "genre": "Action,Adventure"
  }, 
  {
    "rating": 8.1, 
    "title": "Dawn of the Planet of the Apes", 
    "url": "imdb.com/title/tt2103281/", 
    "length": 130, 
    "year": 2014, 
    "genre": "Action,Drama,Sci-Fi,Thriller"
  }, 
  {
    "rating": 8.0, 
    "title": "Captain America: The Winter Soldier", 
    "url": "imdb.com/title/tt1843866/", 
    "length": 136, 
    "year": 2014, 
    "genre": "Action,Adventure,Sci-Fi"
  }, 
  {
    "rating": 7.5, 
    "title": "Whiplash", 
    "url": "imdb.com/title/tt2582802/", 
    "length": 106, 
    "year": 2014, 
    "genre": "Drama"
  }, 
  {
    "rating": 8.7, 
    "title": "Se7en", 
    "url": "imdb.com/title/tt0114369/", 
    "length": 127, 
    "year": 1995, 
    "genre": "Crime,Mystery,Thriller"
  }, 
  {
    "rating": 6.8, 
    "title": "The Girl Next Door", 
    "url": "imdb.com/title/tt0265208/", 
    "length": 108, 
    "year": 2004, 
    "genre": "Comedy,Drama,Romance"
  }, 
  {
    "rating": 8.4, 
    "title": "Braveheart", 
    "url": "imdb.com/title/tt0112573/", 
    "length": 177, 
    "year": 1995, 
    "genre": "Action,Biography,Drama,History,War"
  }, 
  {
    "rating": 6.7, 
    "title": "Zack and Miri Make a Porno", 
    "url": "imdb.com/title/tt1007028/", 
    "length": 101, 
    "year": 2008, 
    "genre": "Comedy,Romance"
  }, 
  {
    "rating": 5.3, 
    "title": "White Chicks", 
    "url": "imdb.com/title/tt0381707/", 
    "length": 109, 
    "year": 2004, 
    "genre": "Crime,Comedy"
  }, 
  {
    "rating": 0, 
    "title": "The Expendables 4", 
    "url": "imdb.com/title/tt3291150/", 
    "length": 0, 
    "year": 0, 
    "genre": ""
  }, 
  {
    "rating": 0, 
    "title": "Ouija", 
    "url": "imdb.com/title/tt1204977/", 
    "length": 0, 
    "year": 2014, 
    "genre": "Action,Adventure,Thriller"
  }, 
  {
    "rating": 7.4, 
    "title": "Belle", 
    "url": "imdb.com/title/tt2404181/", 
    "length": 104, 
    "year": 2013, 
    "genre": "Drama"
  }, 
  {
    "rating": 6.6, 
    "title": "In Time", 
    "url": "imdb.com/title/tt1637688/", 
    "length": 109, 
    "year": 2011, 
    "genre": "Action,Sci-Fi,Thriller"
  }, 
  {
    "rating": 0, 
    "title": "Guardians of the Galaxy 2", 
    "url": "imdb.com/title/tt3896198/", 
    "length": 0, 
    "year": 2017, 
    "genre": ""
  }, 
  {
    "rating": 7.9, 
    "title": "Mr. Nobody", 
    "url": "imdb.com/title/tt0485947/", 
    "length": 141, 
    "year": 2009, 
    "genre": "Drama,Fantasy,Romance,Sci-Fi"
  }, 
  {
    "rating": 7.8, 
    "title": "Nebraska", 
    "url": "imdb.com/title/tt1821549/", 
    "length": 115, 
    "year": 2013, 
    "genre": "Adventure,Drama"
  }, 
  {
    "rating": 8.0, 
    "title": "The Truman Show", 
    "url": "imdb.com/title/tt0120382/", 
    "length": 103, 
    "year": 1998, 
    "genre": "Comedy,Drama,Sci-Fi"
  }, 
  {
    "rating": 5.7, 
    "title": "The Sitter", 
    "url": "imdb.com/title/tt1366344/", 
    "length": 81, 
    "year": 2011, 
    "genre": "Comedy"
  }, 
  {
    "rating": 5.7, 
    "title": "They Came Together", 
    "url": "imdb.com/title/tt2398249/", 
    "length": 83, 
    "year": 2014, 
    "genre": "Comedy"
  }, 
  {
    "rating": 6.5, 
    "title": "Faster", 
    "url": "imdb.com/title/tt1433108/", 
    "length": 98, 
    "year": 2010, 
    "genre": "Action,Crime,Drama,Thriller"
  }, 
  {
    "rating": 4.4, 
    "title": "The Last Airbender", 
    "url": "imdb.com/title/tt0938283/", 
    "length": 103, 
    "year": 2010, 
    "genre": "Action,Adventure,Family,Fantasy"
  }, 
  {
    "rating": 6.5, 
    "title": "Anchorman 2: The Legend Continues", 
    "url": "imdb.com/title/tt1229340/", 
    "length": 119, 
    "year": 2013, 
    "genre": "Comedy"
  }, 
  {
    "rating": 7.8, 
    "title": "Pride & Prejudice", 
    "url": "imdb.com/title/tt0414387/", 
    "length": 129, 
    "year": 2005, 
    "genre": "Drama,Romance"
  }, 
  {
    "rating": 0, 
    "title": "Agent 47", 
    "url": "imdb.com/title/tt2679042/", 
    "length": 0, 
    "year": 2015, 
    "genre": "Action,Crime,Thriller"
  }, 
  {
    "rating": 6.9, 
    "title": "Nymphomaniac: Vol. II", 
    "url": "imdb.com/title/tt2382009/", 
    "length": 123, 
    "year": 2013, 
    "genre": "Drama"
  }, 
  {
    "rating": 8.0, 
    "title": "The Incredibles", 
    "url": "imdb.com/title/tt0317705/", 
    "length": 115, 
    "year": 2004, 
    "genre": "Animation,Action,Adventure,Family"
  }
]
*/});