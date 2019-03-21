import axios from "axios";

const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  // baseURL: "https://api.twitch.tv/helix/",
  accept: "application/vnd.twitchtv.v5+json",
  headers: {"Client-ID": client_id}
});
// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getStreamer: function(name){
    return twitch.get("https://api.twitch.tv/kraken/search/channels?query=starcraft");
  }
};
