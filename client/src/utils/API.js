import axios from "axios";

const gamesURL = {
   url: "https://api-v3.igdb.com/games/",
   method: "GET",
   json: true,
   headers: {
       "user-key": "940917f24ab11ddaece60ec17ad01354"
   },
};


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
    }
};

//
const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  // baseURL: "https://api.twitch.tv/helix/",
  accept: "application/vnd.twitchtv.v5+json",
  headers: { "Client-ID": client_id }
});

export default {
  getStreamer: function(name) {
    return twitch.get(
      "https://api.twitch.tv/kraken/search/streams?limit=3&query=final+fantasy+xiv"
    );
  }
};

// age ratings
// https://api-v3.igdb.com/age_ratings
