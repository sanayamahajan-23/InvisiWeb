// controllers/sandboxController.js
const SandboxSession = require('../models/sandboxSession');

const startSandboxSession = async (req, res) => {
  try {
    const { initialScore } = req.body;
    const newSession = new SandboxSession({ initialScore });
    const session = await newSession.save();
    res.status(201).json(session);
  } catch (err) {
    console.error('Error creating session:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

const simulateChanges = async (req, res) => {
  try {
    const { changedScore } = req.body;
    const newSession = new SandboxSession({ changedScore });
    const session = await newSession.save();
    res.status(201).json(session);
  } catch (err) {
    console.error('Error creating session:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  startSandboxSession,
  simulateChanges
};
