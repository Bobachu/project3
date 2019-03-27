const axios = require("axios");

// // TWitch API credentials
const gamesURL = {
  url: "https://api-v3.igdb.com/games/",
  method: "GET",
  json: true,
  headers: {
    "user-key": "940917f24ab11ddaece60ec17ad01354"
  },
};
const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  // baseURL: "https://api.twitch.tv/helix/",
  accept: "application/vnd.twitchtv.v5+json",
  headers: { "Client-ID": client_id }
});

// twitch video api 
// twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey").then(function (res) {
//   // console.log(data);
//   for (let i = 0; i < res.data.streams.length; i++) {
//     console.log(res.data.streams[i].channel.url);
//   }
// });

// Giant Bomb API credentials
const api_key = "a9a2426d7b1ed60e55fb95133e680218e2aa7a7c";
const giant_bomb = axios.create({
  format: "jsonp",
  callbackKey: "json_callback",
  headers: { "API-Key": api_key,
  "Access-Control-Allow-Origin": null}
});

// giant_bomb.get("https://www.giantbomb.com/api/games/?api_key=8c577a9853e23bc1a4f713365d609f1cd88126c5&format=json&filter=name:" + search + "&field_list=image,original_game_rating,deck").then(function (res) {
//   console.log(res.data.results[0].deck);
//   console.log(res.data.results[0].image.original_url);
//   console.log(res.data.results[0].original_game_rating[0].name);
// });

export default {
  // Searches for a game using the Giant Bomb API
  searchGame: function() {
    return axios.get("/api/data/giantbomb");
  },

  // Searches for streamers playing on Twitch API
  searchTwitch: function() {
    return twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey")
  },

  // Get a user and their wishlist?
  loadUser: function(username) {
    return axios.get("/api/users/" + username)
  },

}
// IDGB API credentials
// const user_key = "940917f24ab11ddaece60ec17ad01354";
// const IDBM = axios.create({
//   accept: "application/json",
//   headers: {"User-Key": user_key}
// });
// IDBM rating api
// IDBM.get("https://api-v3.igdb.com/age_ratings/?fields=*").then(function(res){
//   console.log(res.data[0].rating);
// });
// // IDBM game name/summary api
// IDBM.get("https://api-v3.igdb.com/games/?search=Halo&fields=name,summary").then(function(res){
//   console.log(res.data[0]);
// });

