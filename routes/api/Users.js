const router = require("express").Router();
const UserController = require("../../controllers/usersControllers");

// Matches with "/api/wishlists"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/wishlists/:id"
router.route("/:username")
  .get(UserController.findOne)
  .put(UserController.update)

module.exports = router;