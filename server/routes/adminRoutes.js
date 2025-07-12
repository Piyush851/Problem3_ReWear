const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');
const {
  getAllItemsByStatus,
  updateItemStatus,
  deleteItem
} = require('../controllers/adminController');

// 🧾 View all items by status
router.get('/items', auth, isAdmin, getAllItemsByStatus);

// ✅ Approve/Reject item
router.put('/items/:id/status', auth, isAdmin, updateItemStatus);

// ❌ Delete item
router.delete('/items/:id', auth, isAdmin, deleteItem);

module.exports = router;
