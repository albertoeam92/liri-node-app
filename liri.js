
var fs = require('fs');
var apiKeys = require('./keys.js');


var command = process.argv[2];
var userinput = process.argv[3];

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
	console.log('Twitter API keys: ', apiKeys.twitterKeys);
};

function SpotifyRequest(){
	console.log('Spotify API keys: ', apiKeys.spotifyKeys);
};

function OmdbRequest (){
	console.log('Omdb API key: ', apiKeys.omdbKeys.api_key);
};

function LiriBot(){
	fs.readFile('random.txt', 'utf8', function(err,data){
		console.log(data);
	});
};