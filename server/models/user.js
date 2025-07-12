const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });
=======
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
  points: { type: Number, default: 0 }
});
>>>>>>> f7a930771e9d2c92e6b93deefd601dce9d6e98fd

module.exports = mongoose.model("User", userSchema);
