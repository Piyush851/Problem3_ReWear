const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // For serving images

// Routes
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const swapRoutes = require('./routes/swaproutes');

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/swaps', swapRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => console.log('🚀 Server running'));
  })
  .catch((err) => console.log('MongoDB connection error:', err));




  //const itemRoutes = require('./routes/itemRoutes');
//app.use('/api/items', itemRoutes);


//const swapRoutes = require('./routes/swaproutes');
//app.use('/api/swaps', swapRoutes);



const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);


//const itemRoutes = require('./routes/itemRoutes');
//app.use('/api/items', itemRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'public/404.html'));
});

