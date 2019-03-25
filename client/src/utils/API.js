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
  headers: {"Client-ID": client_id}
});

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the book with the given id
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a book to the database
    createUser: function (userData) {
        return axios.post("/api/users", userData);
    },
    // Gets all wishlists
    getWishlist: function () {
        return axios.get("/api/wishlists");
    },
    // Gets the wishlist item with the given id
    getWislist: function (id) {
        return axios.get("/api/wishlists/" + id);
    },
    // Deletes the wishlist item with the given id
    deleteWishlistItem: function (id) {
        return axios.delete("/api/wishlists/" + id);
    },
    // Adds an item to the wishlist
    addWishlistItem: function (wishlist) {
        return axios.post("/api/wishlists", wishlist);
    },
    // Gets game info (**Have not added params yet**)
    getGameInfo: function (gameTitle) {
        return axios.get(gamesURL);
    },

    getStreamer: function(name){
    return twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=final+fantasy+xiv");
    }

};

// twitch video api 
twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=final+fantasy+xiv").then(function (res) {
  // console.log(data);
  for (let i = 0; i < res.data.streams.length; i++){
    console.log(res.data.streams[i].channel.url);
    }
});

// IGDB API credentials
const user_key = "940917f24ab11ddaece60ec17ad01354";
const IDBM = axios.create({
  accept: "application/vnd.twitchtv.v5+json",
  headers: {"User-Key": user_key}
});
// IDBM rating api
IDBM.get("https://api-v3.igdb.com/age_ratings/?fields=*").then(function(res){
  console.log(res.data[0].rating);
});
// // IDBM game name/summary api
// IDBM.get("https://api-v3.igdb.com/games/?search=Halo&fields=name,summary").then(data=>{
//   console.log(data);
// });

