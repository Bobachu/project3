const router = require("express").Router();
const axios = require("axios");
const client_id = "jbeeh3jlwslrdqeq5reklagles1u78";
const twitch = axios.create({
  accept: "application/vnd.twitchtv.v5+json",
  headers: { "Client-ID": client_id }
});
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
      res.json(data.data);
    })
    .catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e);
    });
});


  router.route("/igdb/:game")
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
        res.json(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  })

  
  
module.exports = router;