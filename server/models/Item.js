const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    description: String,
    images: [String],
    category: String,
    size: String,
    condition: String,
    tags: [String],
    uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: "available" }
});

module.exports = mongoose.model("Item", itemSchema);
