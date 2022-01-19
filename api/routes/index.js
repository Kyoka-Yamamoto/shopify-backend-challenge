const express = require("express");
const router = express.Router();

const inventoryRoutes = require("./inventory");

router.route("/").get((req, res) => res.send("Home Page"));

router.use("/inventory", inventoryRoutes);
router.use("/inventory/:itemId", inventoryRoutes);

module.exports = router;
