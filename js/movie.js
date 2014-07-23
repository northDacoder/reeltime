$(document).ready(function(){

	var search_query = "";
	var search_limit = 5;
	var key: 'dpjxf3xsjbpj5wpmduveeseb';
	var movie_json;


	var getMovie = function(query, nummovies){
			search_query = query;
			search_limit = nummovies-1;


			$.ajax({
				url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=:key&q=:movie_title&page_limit=:limit&callback=JSON_CALLBACK', 
				type: 'GET',
				data: 'JSONP',
				success: function(response){
					movie_json = response;
					movie_json.name = response.name;
					movie_json.year = response.year;
					movie_json.rating = response.mpaa_rating;
				}
			});
	};

	$("#searchButton").on('click', function(){
		search_query = $("#movieInput").val();
		search_limit = $("#numberInput").val();
		getMovie(search_query, search_limit);
	});
});
