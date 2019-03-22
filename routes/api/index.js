const router = require("express").Router();
const wishRoutes = require("./Wishlists");
const userRoutes = require("./Users");

// wishlist routes
router.use("/wishlists", wishRoutes);
router.use("/users", userRoutes);

module.exports = router;
