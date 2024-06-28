// Example SandboxSession.js (using mongoose)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const sandboxSessionSchema = new Schema({
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date },
    initialScore: { type: Number },
    changedScore: { type: Number }
});

// Create model
const SandboxSession = mongoose.model('SandboxSession', sandboxSessionSchema);

module.exports = SandboxSession;
