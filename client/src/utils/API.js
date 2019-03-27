const axios = require("axios");

<<<<<<< HEAD
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
  json: true,
  headers: { "Client-ID": client_id }
});

=======
>>>>>>> 2e18602d9dbc6373046389c388f6793a7669ba88
export default {
  // Searches for a game using the Giant Bomb API
  searchGame: function() {
    return axios.get("/api/data/giantbomb");
  },

  // Searches for streamers playing on Twitch API
  searchTwitch: function() {
    // return twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey")
    return axios.get("/api/data/twitch");
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

