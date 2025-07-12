const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createSwapRequest,
  getIncomingRequests,
  updateSwapStatus
} = require('../controllers/swapcontroller');

router.post('/request', auth, createSwapRequest);           // Send swap
router.get('/incoming', auth, getIncomingRequests);         // View received
router.put('/update/:id', auth, updateSwapStatus);          // Accept/Reject

module.exports = router;
