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
};
