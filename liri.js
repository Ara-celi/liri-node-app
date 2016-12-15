//write the code you need to grab the data from keys.js. 
var keys = require('./keys.js');
var keyword = process.argv[2];
//requiring twitter npm
var Twitter = require('twitter');

if (keyword === "my-tweets"){
//storing the keys in a variable
var client = new Twitter({
	consumer_key: keys.twitterKeys.consumer_key,
  	consumer_secret: keys.twitterKeys.consumer_secret,
  	access_token_key: keys.twitterKeys.access_token_key,
  	access_token_secret: keys.twitterKeys.access_token_secret,
});

var params = {screen_name: 'celi407', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    for(var i = 0; i < tweets.length; i++) {
    	console.log(tweets[i].text);
    	console.log(tweets[i].created_at);

    }
  }
});
};


//=============================================================================
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// 1.Artist(s); 2.The song's name; 3.A preview link of the song from Spotify; 4.The album that the song is from
// if no song is provided then your program will default to "The Sign" by Ace of Base

var spotify = require('spotify');
var songTitle = process.agrv[3]; 

if (keyword==="spotify-this-song"){
	spotify.search({ type: 'artist', query: songTitle }, function(err, data) {
    if ( err ) {
         console.log('Error occurred: ' + err);
         return;
     }
 
     console.log()
 })
 };
 	
 
//======================================================================================

var request = require('request');

if( keyword==="movie-this") {
	var movieName = process.argv[3] || "Mr+Nobody";

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&tomatoes=true";
console.log(queryUrl);
request(queryUrl, function(error, response, body){
if (!error && response.statusCode ===200){
	var body = JSON.parse(body);
console.log("Title: " + body.Title);
console.log("Release Year: " + body.Year);
console.log("Movie Rating: " + body.Rated);
console.log("Country Produced: " + body.Country);
console.log("Language: " + body.Language);
console.log("Plot: " + body.Plot);
console.log("Actors: " + body.Actors);
console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
console.log("Tomato URL: "+ body.tomatoURL);
}
});
};
























