<<<<<<< HEAD
const { addItem, getAllItems } = require('../controllers/itemController');

// 🔍 Public route to view items
router.get('/all', getAllItems);

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const { addItem } = require('../controllers/itemController');

// Protected Route: Add Item (multiple images)
router.post('/add', authMiddleware, upload.array('images', 5), addItem);

module.exports = router;

//Add this under existing routes:
router.get('/browse', getAllItems);

const { getItemById } = require('../controllers/itemController');
// 🔍 Single Item Detail
router.get('/:id', getItemById);

=======
const express = require("express");
const router = express.Router();
const { addItem, getAllItems } = require("../controllers/itemController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth, addItem);
router.get("/", getAllItems);

module.exports = router;
>>>>>>> f7a930771e9d2c92e6b93deefd601dce9d6e98fd
