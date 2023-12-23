const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();

const User = require('./routes/userRouter');
const bodyParser = require('body-parser');

//CORS
const cors = require('cors');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Define routes or middleware as needed
// Middleware
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes
app.use('/api/users', User);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
