$(document).ready(function(){

	var movie_title = "";
	var page_limit = 5;
	var apikey = 'dpjxf3xsjbpj5wpmduveeseb';
	var all_movies = [];

	var year = $("#year").html();
	var rated = $("#rated").html();
	var name = $("#movieTitle").html();
	var actor = $("#actorName").html();
	var characters = $("#actorCharacters").html();
	var movie_html = $("#results").html();


	var loadHTML = function(response){


		console.log('loadHTML function called');
		var movies = response.movies;
		console.log(movies);
		console.log(movies.length);

		for (var i = 0; i < movies.length; i++){
			

			var movie = {};
			movie['title'] = movies[i].title;
			movie['year'] = movies[i].year;
			movie['rated'] = movies[i].mpaa_rating;

			console.log(movie);

			all_movies.push(movie);

			$("#results").append(
				'<div class="col-sm-4 panel panel-default">' + 
					'<div class="panel-heading">' +
						'<h1 class="panel-title">' + Title: ' + movie.title + '</h1>' + 
					'</div>' +
					'<div class="panel-body">' +
						'<h2>Year: ' + movie.year + '</h2>' + 
						'<h3>Rating: ' + movie.rated + '</h3>' +
					'</div>' +
				'</div>'
			);
		}
		
	};

	var getMovie = function(query, nummovies){
			console.log('getMovie function called');
			movie_title = query;
		 	page_limit = nummovies-1;

			$.ajax({
				url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' + apikey + '&q=' + movie_title + '&page_limit=' + page_limit, 
				type: 'GET',
				dataType: 'JSONP',
				success: function(response){
					console.log(response);
					loadHTML(response);
				}
			});
	};

	$("button#searchButton").on('click', function(){
		alert('This is working');
		movie_title = $("#movieInput").val();
		page_limit = $("#numberInput").val();
		getMovie(movie_title, page_limit);
	});
	
	getMovie("Star Wars", 20);
});
