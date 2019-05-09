const router = require("express").Router();
const WishlistController = require("../../controllers/WishlistController");

// Matches with "/api/wishlists"
router.route("/")
  .get(WishlistController.findAll)

router.route("/add")
  .post(WishlistController.create);

// Matches with "/api/wishlists/:id"
router.route("/:_id")
  .get(WishlistController.findById)
  .put(WishlistController.update)
  .delete(WishlistController.remove);

module.exports = router;
