// Example server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const sandboxRoutes = require('./routes/sandboxRoutes'); // Import sandbox routes

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (example with mongoose)
mongoose.connect('mongodb://localhost:27017/accessibilitySandbox', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes setup
app.use('/api', sandboxRoutes); // Use sandbox routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
