const router = require("express").Router();
const wishRoutes = require("./Wishlists");

// Book routes
router.use("/wishlists", wishRoutes);

module.exports = router;
