const router = require("express").Router();
const axios = require("axios");

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

router.route("/twitch")
  .get((req, res) => {
    console.log("twitch")
    axios.get("https://api.twitch.tv/kraken/search/streams?limit=3&query=assassin+creed+odyssey").then((data) => {
      console.log(data.data)
      res.json(data.data);
    }).catch(e => {
      console.log("THERE WAS AN ERROR WITH THEIR API " + e)
    })
  });

module.exports = router;