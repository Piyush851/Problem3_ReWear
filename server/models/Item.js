const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
<<<<<<< HEAD
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
=======
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
>>>>>>> f7a930771e9d2c92e6b93deefd601dce9d6e98fd
