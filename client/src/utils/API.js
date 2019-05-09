const axios = require("axios");

export default {
  // Searches for a game using the Giant Bomb API
  searchGame: function(game) {
    return axios.get("/api/data/giantbomb/" + game);
  },

  searchIgdb: function(game) {
    return axios.post("/api/data/igdb/" + game);
  },

  // searchEsrb: function(game) {
  //   return axios.get("/api/esrb/" + game);
  // },
  // Searches for streamers playing on Twitch API
  searchTwitch: function(game) {
    // return twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey")
    return axios.get("/api/data/twitch/" + game);
  },
  // Get a user and their wishlist?
  loadUser: function(username) {
    return axios.get("/api/users/" + username)
  },

  getWishItem: function(_id) {
    return axios.get("/api/wishlists/" + _id)
  },

}
// IDGB API credentials
// const user-key = "940917f24ab11ddaece60ec17ad01354";
// const IDBM = axios.create({
//   accept: "application/json",
//   headers: {"User-Key": user-key}
// });
// // IDBM game summary/total_rating api
// IDBM.get("https://api-v3.igdb.com/games/?search=Halo&fields=name,summary").then(function(res){
//   console.log(res.data[0]);
// });

