const axios = require("axios");

// // TWitch API credentials
const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  // baseURL: "https://api.twitch.tv/helix/",
  accept: "application/vnd.twitchtv.v5+json",
  headers: {"Client-ID": client_id}
});

// twitch video api 
twitch.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=final+fantasy+xiv").then(function (res) {
  // console.log(data);
  for (i = 0; i < res.data.streams.length; i++){
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