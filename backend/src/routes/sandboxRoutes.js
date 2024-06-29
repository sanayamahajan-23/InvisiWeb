// src/routes/sandboxRoutes.js

const express = require('express');
const router = express.Router();
const { startSandboxSession, simulateChanges } = require('../controllers/sandboxController'); // Adjust path as needed

// Route to start a new sandbox session
router.post('/sandbox', startSandboxSession);

// Route to simulate changes in sandbox session
router.post('/sandbox/changes', simulateChanges);

module.exports = router;
