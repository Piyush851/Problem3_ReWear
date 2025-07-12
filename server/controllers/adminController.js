const Item = require('../models/Item');

// 🔍 Get all items by status (pending/approved/rejected)
exports.getAllItemsByStatus = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const items = await Item.find(filter).populate('user', 'name email');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Approve/Reject Item
exports.updateItemStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'approved' or 'rejected'

    const item = await Item.findById(id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    item.status = status;
    await item.save();

    res.json({ message: `Item ${status}`, item });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Delete Item (Hard delete)
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
