const express = require("express");
const router = express.Router();
const { addItem, getAllItems } = require("../controllers/itemController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth, addItem);
router.get("/", getAllItems);

module.exports = router;
