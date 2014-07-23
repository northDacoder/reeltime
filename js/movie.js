fetchMovie: function(query, nummovies, callback){
			var search_query = query;
			var search_limit = nummovies-1;


			var api = $resource('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=:key&q=:movie_title&page_limit=:limit&callback=JSON_CALLBACK', {
				key: 'dpjxf3xsjbpj5wpmduveeseb',
				limit: 10
			}, {
				fetch:{method:'JSONP'}
			});

			api.fetch({movie_title: search_query, limit: search_limit}, function(response){

				callback(response);

			});
		}