const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // For serving images

<<<<<<< HEAD
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

=======
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/items", require("./routes/itemRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
>>>>>>> f7a930771e9d2c92e6b93deefd601dce9d6e98fd
