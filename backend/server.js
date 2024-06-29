
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/services/db'); // Adjust path as needed
const sandboxRoutes = require('./src/routes/sandboxRoutes'); // Adjust path as needed

// Connect to MongoDB
connectDB();

// Create an Express application
const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes setup
app.use('/api', sandboxRoutes); // Mount sandbox routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
