// Example sandboxRoutes.js

const express = require('express');
const router = express.Router();
const sandboxController = require('../controllers/sandboxController');

// Routes for sandbox sessions and simulations
router.post('/start-sandbox-session', sandboxController.startSandboxSession);
router.post('/simulate-changes', sandboxController.simulateChanges);

module.exports = router;
