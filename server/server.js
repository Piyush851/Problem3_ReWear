const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Load auth routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// DB + Server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch((err) => console.log('MongoDB connection error:', err));
