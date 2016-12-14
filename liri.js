
var fs = require('fs');
var apiKeys = require('./keys.js');
var request = require('request');

var command = process.argv[2];
var userinput = process.argv[3];
console.log(userinput);


console.log('-----------');
console.log('Command: ', command);
console.log('-----------');

switch(command) {

		case 'my-tweets':

			TwitterRequest();
			break;

		case 'spotify-this-song':

			SpotifyRequest();
			break;

		case 'movie-this':

			OmdbRequest();
			break;

		case 'do-what-it-says':

			LiriBot();
			break;
}

function twitterRequest (){
	console.log(apiKeys.twitterKeys);
	var twitter = require('twitter');
		 
};

function spotifyRequest(){
	console.log(apiKeys.spotifyKeys);

};

function omdbRequest (){

	if(userinput >= 0 ){

		console.log('Please type a valid movie name. Sample: movie-this <name-of-the-movie>')

		} else if (userinput == undefined){
			request('http://www.omdbapi.com/?t=mr+nobody&tomatoes=true&r=json', function(error,response,body){

				if (!error && response.statusCode === 200) {

					var movie = JSON.parse(body);

					console.log('\nMovie: '+ movie.Title+ 
				    	'\nReleased: ' + movie.Released + 
				    	'\nIMDB rating: '+ movie.imdbRating + 
				    	'\nCountry: ' + movie.Country + 
				    	'\nLanguage: ' + movie.Language + 
				    	'\nPlot: ' + movie.Plot + 
				    	'\nActors: ' + movie.Actors + 
				    	'\nRotten Tomatoes rating: ' + movie.tomatoRating + 
				    	'\nRotten Tomatoes page: ' + movie.tomatoURL +
				    	'\n-----------');
				};

			});

		} else {
			request('http://www.omdbapi.com/?t=' + userinput + '&tomatoes=true&r=json', function(error,response,body){

				if (!error && response.statusCode === 200){

					var movie = JSON.parse(body);

				    console.log('\nMovie: '+ movie.Title+ 
				    	'\nReleased: ' + movie.Released + 
				    	'\nIMDB rating: '+ movie.imdbRating + 
				    	'\nCountry: ' + movie.Country + 
				    	'\nLanguage: ' + movie.Language + 
				    	'\nPlot: ' + movie.Plot + 
				    	'\nActors: ' + movie.Actors + 
				    	'\nRotten Tomatoes rating: ' + movie.tomatoRating + 
				    	'\nRotten Tomatoes page: ' + movie.tomatoURL +
				    	'\n-----------');
				};
		    });
		  }

	
};

function liriBot(){
	fs.readFile('random.txt', 'utf8', function(err,data){
		
		var liriTextInput = data.split(',');
        
        var liriInput1 = process.argv[0];
        var liriInput2 = process.argv[1];

		switch(liriInput1){
			case 'my-tweets':
			twitterRequest(liriInput2);
			break

			case 'spotify-this-song':
			spotifyRequest(liriInput2);
			break

			case 'movie-this':
			omdbRequest(liriInput2);
			break
		};
	});
};