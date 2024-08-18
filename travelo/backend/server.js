const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const destinationRoutes = require('./routes/destinations');
const tourRoutes = require('./routes/tour');


const app = express();
const port = 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/tour', tourRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
