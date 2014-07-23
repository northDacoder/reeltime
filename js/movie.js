$(document).ready(function(){

	var movie_title = "";
	var page_limit = 5;
	var key: 'dpjxf3xsjbpj5wpmduveeseb';
	var movie_json;

	movie_json['year'] = $("#year").html();
	movie_json['rated'] = $("#rated").html();
	movie_json['name'] = $("#movieTitle").html();
	movie_json['actorName'] = $("#actorName").html();
	movie_json['characters'] = $("#actorCharacters").html();

	console.log(movie_json);

	var getMovie = function(query, nummovies){
			movie_title = query;
		 	page_limit = nummovies-1;


			$.ajax({
				url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=:key&q=:movie_title&page_limit=:limit', 
				type: 'GET',
				data: 'JSONP',
				success: function(response){
					movie_json = response;
					movie_json.name = response.name;
					movie_json.year = response.year;
					movie_json.rated = response.mpaa_rating;
				}
			});
	};

	$("#searchButton").on('click', function(){
		movie_title = $("#movieInput").val();
		page_limit = $("#numberInput").val();
		getMovie(search_query, search_limit);
	});
});
