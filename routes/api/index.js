const router = require("express").Router();
const wishRoutes = require("./Wishlists");
const userRoutes = require("./Users");
const apiRoutes = require("./api")

// wishlist routes
router.use("/wishlists", wishRoutes);
router.use("/users", userRoutes);
router.use("/data", apiRoutes);

module.exports = router;
