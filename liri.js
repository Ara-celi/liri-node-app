//write the code you need to grab the data from keys.js. 
var keys = require('./keys.js');

//requiring twitter npm
var Twitter = require('twitter');

//storing the keys in a variable
var client = new Twitter({
	consumer_key: process.env.consumer_key,
  	consumer_secret: process.env.consumer_secret,
  	access_token_key: process.env.access_token_key,
  	access_token_secret: process.env.access_token_secret
});

var params = {screen_name: 'celi407'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//     keys.twitterKeys.consumer_key,
 //   	keys.twitterKeys.consumer_secret,
 //  	keys.twitterKeys.access_token_key,
 //  	keys.twitterKeys.access_token_secret,

//=============================================================================
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// 1.Artist(s); 2.The song's name; 3.A preview link of the song from Spotify; 4.The album that the song is from
// if no song is provided then your program will default to "The Sign" by Ace of Base

// var spotify = require('spotify');

// spotify.search({ type: 'artist', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     console.log()
// });	
 
//======================================================================================
function (node liri.js movie-this 'mr+nobody'){
// This will output the following information to your terminal/bash window:
// Rotten Tomatoes URL.  
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!

var request = require('request');
var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=&tomatoes=json";
console.log(queryUrl);
request(queryUrl, function(error, response, body){
if (!error && response.statusCode ===200){
console.log("Title: " + JSON.parse(body).Title)
console.log("Release Year: " + JSON.parse(body).Year)
console.log("Movie Rating: " + JSON.parse(body).Rated)
console.log("Country Produced: " + JSON.parse(body).Country)
console.log("Language: " + JSON.parse(body).Language)
console.log("Plot: " + JSON.parse(body).Plot)
console.log("Actors: " + JSON.parse(body).Actors)
console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Response)
}else{
}	
}
}) 
























