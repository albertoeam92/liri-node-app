
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

function TwitterRequest (){  

};

function SpotifyRequest(){

};

function OmdbRequest (){


	if (userinput == undefined){
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

function LiriBot(){
	fs.readFile('random.txt', 'utf8', function(err,data){
		console.log(data);
	});
};