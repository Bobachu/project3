const router = require("express").Router();
const UserController = require("../../controllers/usersControllers");

// Matches with "/api/wishlists"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/wishlists/:id"
router.route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

module.exports = router;