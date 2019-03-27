const axios = require("axios");

export default {
  // Searches for a game using the Giant Bomb API
  searchGame: function() {
    // axios.get("/api/giantbomb").then((res)=>{
    //   console.log(res)
    // })
    // return giant_bomb.get("https://www.giantbomb.com/api/games/?api_key=a9a2426d7b1ed60e55fb95133e680218e2aa7a7c&format=json&filter=name:assassin%27s+creed+odyssey&field_list=image,original_game_rating,deck");
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

