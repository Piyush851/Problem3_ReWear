const SwapRequest = require('../models/SwapRequest');
const Item = require('../models/Item');

// Send a swap request
exports.createSwapRequest = async (req, res) => {
  try {
    const { itemRequested, offeredItem, usedPoints } = req.body;

    const item = await Item.findById(itemRequested);
    if (!item) return res.status(404).json({ error: "Requested item not found" });

    // Prevent requesting your own item
    if (item.user.toString() === req.user._id.toString()) {
      return res.status(400).json({ error: "You cannot swap with your own item" });
    }

    const swap = new SwapRequest({
      requester: req.user._id,
      receiver: item.user,
      itemRequested,
      offeredItem: offeredItem || null,
      usedPoints: usedPoints || false
    });

    await swap.save();
    res.status(201).json({ message: "Swap request sent", swap });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get incoming swap requests for logged-in user
exports.getIncomingRequests = async (req, res) => {
  try {
    const swaps = await SwapRequest.find({ receiver: req.user._id })
      .populate('requester', 'name')
      .populate('itemRequested', 'title images')
      .populate('offeredItem', 'title images');

    res.json({ swaps });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Accept or reject a request
exports.updateSwapStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const swap = await SwapRequest.findById(id);
    if (!swap) return res.status(404).json({ error: "Swap not found" });

    if (swap.receiver.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Not authorized" });
    }

    swap.status = status;
    await swap.save();

    res.json({ message: "Swap updated", swap });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
