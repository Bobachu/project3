const router = require("express").Router();
const axios = require("axios");

const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  // baseURL: "https://api.twitch.tv/helix/",
  accept: "application/vnd.twitchtv.v5+json",
  headers: { "Client-ID": client_id }
});

// Matches with "/api/wishlists"
router.route("/giantbomb")
  .get((req, res) => {
    console.log("giantbomb")
    axios.get("https://www.giantbomb.com/api/games/?api_key=a9a2426d7b1ed60e55fb95133e680218e2aa7a7c&format=json&filter=name:assassin%27s+creed+odyssey&field_list=image,original_game_rating,deck").then((data) => {
      console.log(data.data)
      res.json(data.data);
    }).catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e)
    })
  });

<<<<<<< HEAD
router.route("/twitch")
  .get((req, res) => {
    console.log("twitch")
    axios.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey").then((data) => {
      console.log(data.data)
      res.json(data.data);
    }).catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e)
=======
  router.route("/twitch")
  .get((req, res)=>{
      console.log("twitch")
    twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey").then((data)=>{
        console.log(data.data)
        res.json(data.data);
    }).catch(e=>{
        console.log("THERE WAS AN ERROR WITH THEIR API " + e)
>>>>>>> 2e18602d9dbc6373046389c388f6793a7669ba88
    })
  });

module.exports = router;










// ######### DEAD CODE - FOR REFERENCE #################
/*
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
*/

