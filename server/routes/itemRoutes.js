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

