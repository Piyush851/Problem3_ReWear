<<<<<<< HEAD
const Item = require('../models/Item');

exports.addItem = async (req, res) => {
  try {
    const imagePaths = req.files.map(file => file.path);

    const newItem = new Item({
      user: req.user._id,
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      type: req.body.type,
      size: req.body.size,
      condition: req.body.condition,
      tags: req.body.tags.split(',').map(tag => tag.trim()),
      images: imagePaths,
    });

    await newItem.save();
    res.status(201).json({ message: 'Item listed successfully', item: newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const Item = require('../models/Item');

// 🔍 Get all available items (optionally filter)
exports.getAllItems = async (req, res) => {
  try {
    const { category, size, type } = req.query;

    let filter = { status: 'available' };

    if (category) filter.category = category;
    if (size) filter.size = size;
    if (type) filter.type = type;

    const items = await Item.find(filter).populate('user', 'name email');

    res.json({ total: items.length, items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





//Add or update the getAllItems method:
const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  try {
    // Query params for filtering
    const { category, size, type, page = 1, limit = 10 } = req.query;

    const filter = { status: 'available' };

    if (category) filter.category = category;
    if (size) filter.size = size;
    if (type) filter.type = type;

    const items = await Item.find(filter)
      .populate('user', 'name') // Only return name of user
      .sort({ createdAt: -1 })  // Newest first
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Item.countDocuments(filter);

    res.status(200).json({
      success: true,
      total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      items,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

//Single Item Detail API

const Item = require('../models/Item');

exports.getItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id).populate('user', 'name email');

    if (!item) return res.status(404).json({ error: 'Item not found' });

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
=======
const Item = require("../models/Item");

exports.addItem = async (req, res) => {
    try {
        const newItem = new Item({ ...req.body, uploader: req.user.id });
        const item = await newItem.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ msg: "Item upload failed" });
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find({ status: "available" }).populate("uploader", "name");
        res.json(items);
    } catch (err) {
        res.status(500).json({ msg: "Failed to fetch items" });
    }
>>>>>>> f7a930771e9d2c92e6b93deefd601dce9d6e98fd
};
