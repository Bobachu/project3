const router = require("express").Router();
const axios = require("axios");
const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  accept: "application/vnd.twitchtv.v5+json",
  headers: { "Client-ID": client_id }
});
<<<<<<< HEAD

const user_key = "940917f24ab11ddaece60ec17ad01354"
const igdb = axios.create({
  accept: "application/json",
  headers: {"user-key": user_key,
	data: "(category = 0 & platforms = [130] & first_release_date > 1420070400)|(category = 0 & platforms = [48] & first_release_date > 1420070400)|(category = 0 & platforms = [49] & first_release_date > 1420070400)|(category = 0 & platforms = [6] & first_release_date > 1420070400)"}
});
 
=======
>>>>>>> 15e8a7211ff284b9d017f8c5c62094d3fd416442
// Matches with "/api/wishlists"
router.route("/giantbomb/:game").get((req, res) => {
  const { game } = req.params;
  axios
    .get(
      "https://www.giantbomb.com/api/games/?api_key=a9a2426d7b1ed60e55fb95133e680218e2aa7a7c&format=json&filter=name:" +
        game +
        "&field_list=image,name,genres,original_game_rating,site_detail_url,deck&sort=original_release_date:desc&limit=1"
    )
    .then(data => {
      console.log(data.data);
      res.json(data.data);
    })
    .catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e);
    });
});

router.route("/twitch/:game").get((req, res) => {
  const { game } = req.params;
  twitch
    .get("https://api.twitch.tv/kraken/search/streams?limit=3&query=" + game)
    .then(data => {
      // console.log(data.data)
      res.json(data.data);
    })
    .catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e);
    });
});

<<<<<<< HEAD

router.route("/igdb/:game")
.post((req, res) => {
    const { game } = req.params;
    axios.post("https://api-v3.igdb.com/games/?seach=halo" + game).then((data) => {
      console.log(data.data)
      res.json(data.data);
    }).catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e)
    })
  });

  router.route("/igdb/:game")
=======
router
  .route("/igdb/:game")
>>>>>>> 15e8a7211ff284b9d017f8c5c62094d3fd416442
  .post((req, res) => {
    const { game } = req.params;
    axios({
      url: "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": "940917f24ab11ddaece60ec17ad01354"
      },
      data:
        'search "' +
        game +
        '"; fields name,summary,aggregated_rating,age_ratings; where (category = 0 & platforms = [130] & first_release_date > 1420070400)|(category = 0 & platforms = [48] & first_release_date > 1420070400)|(category = 0 & platforms = [49] & first_release_date > 1420070400)|(category = 0 & platforms = [6] & first_release_date > 1420070400);'
    })
      .then(response => {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  })
  
  
module.exports = router;

<<<<<<< HEAD

=======
>>>>>>> 15e8a7211ff284b9d017f8c5c62094d3fd416442
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
