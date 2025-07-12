const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  category: String, // Men, Women, Kids
  type: String,     // Shirt, Jeans, etc.
  size: String,
  condition: String, // New, Good, etc.
  tags: [String],
  images: [String],  // File paths
  status: { type: String, default: 'available' } // available/swapped
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
