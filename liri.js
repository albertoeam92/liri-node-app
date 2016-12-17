
var fs = require('fs');
var apiKeys = require('./keys.js');
var request = require('request');

var command = process.argv[2];
var userinput = process.argv[3];

console.log('-----------');
console.log('Command: ', command);
console.log('-----------');

switch(command) {

		case 'my-tweets':

			twitterRequest();
			break;

		case 'spotify-this-song':

			spotifyRequest();
			break;

		case 'movie-this':

			omdbRequest();
			break;

		case 'do-what-it-says':

			liriBot();
			break;
}

function twitterRequest (){
	console.log(apiKeys.twitterKeys);
	var twitter = require('twitter');
		 
};

function spotifyRequest(){
	var spotify = require('spotify');
 
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
        if ( err ) {
        console.log('Error occurred: ' + err);
        return;
        }

        console.log(data.tracks.artist);
        console.log(data.tracks.name);
        console.log(data.tracks.albums); 
    });

};

function omdbRequest (){

	if(userinput >= 0 ){

		console.log('Please type a valid movie name. Sample: movie-this <"name of the movie">');

		} else if (userinput == undefined){
			;
			request('http://www.omdbapi.com/?t=mr+nobody&tomatoes=true&r=json', function(error,response,body){

				if (!error && response.statusCode === 200) {

					var movie = JSON.parse(body);

					if(movie.Response == 'False') {

						console.log('Error: Movie not found!');
						return;

					};

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
					bonusLog(userinput);
				};

			});

		} else {
			request('http://www.omdbapi.com/?t=' + userinput + '&tomatoes=true&r=json', function(error,response,body){

				if (!error && response.statusCode === 200){

					var movie = JSON.parse(body);
					
					if(movie.Response == 'False') {

						console.log('Error: Movie not found! Check for typos.');
						return;

					};

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
				    bonusLog(userinput);
					 	    
				};
		    });
		  };

	
};

function liriBot(){
	fs.readFile('random.txt', 'utf8', function(err,data){
		
		var liriTextInput = data.split(',');
        
        command = liriTextInput[0];
        userinput = liriTextInput[1];  

   
		switch(command){
			case 'my-tweets':
			console.log('Liri is doing: '+
        	'\nCommand: '+command+
        	'\nSearch: '+userinput);
			twitterRequest(userinput);
			
			break

			case 'spotify-this-song':
			console.log('Liri is doing: '+
        	'\nCommand: '+command+
        	'\nSearch: '+userinput);
			spotifyRequest(userinput);
			
			break

			case 'movie-this':
			console.log('Liri is doing: '+
        	'\nCommand: '+command+
        	'\nSearch: '+userinput);
			omdbRequest(userinput);
			
			break
		};
	});
};

function bonusLog (){

	var logText1 = command;
	var logText2 = userinput;

	if (userinput == undefined) {

		fs.appendFile('log.txt','"'+ logText1 +'"\n',function(err){
				if (err) {console.log(err)} else {
					console.log('This was log: '+
						'\n1: '+logText1);
				};
		    });

	} else {
			fs.appendFile('log.txt','"'+ logText1 + ',' + logText2+'"\n',function(err){
				if (err) {console.log(err)} else {
					console.log('This was log: '+
						'\n1: '+logText1+
						'\n2: '+logText2);
				};
		    });
	  };

};