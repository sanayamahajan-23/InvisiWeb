import React, { useState } from 'react';
import axios from 'axios';

const Sand = () => {
  const [initialScore, setInitialScore] = useState(0);
  const [changedScore, setChangedScore] = useState(0);

  const handleStartSession = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sandbox', {
        initialScore: initialScore
      });
      console.log('Session started:', response.data);
      // Handle success or update UI accordingly
    } catch (error) {
      console.error('Error starting session:', error);
      // Handle error or show user feedback
    }
  };

  const handleSimulateChanges = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/sandbox/changes', {
        changedScore: changedScore
      });
      console.log('Changes simulated:', response.data);
      // Handle success or update UI accordingly
    } catch (error) {
      console.error('Error simulating changes:', error);
      // Handle error or show user feedback
    }
  };

  return (
    <div className="sandbox-operations">
      <h2>Sandbox Operations</h2>

      <fieldset>
        <legend>Start Sandbox Session</legend>
        <div className="operation">
          <label htmlFor="initial-score">Initial Score:</label>
          <input
            type="number"
            id="initial-score"
            name="initial-score"
            placeholder="Enter initial score"
            value={initialScore}
            onChange={(e) => setInitialScore(parseInt(e.target.value))}
          />
          <button id="start-session" onClick={handleStartSession}>
            Start Sandbox Session
          </button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Simulate Changes</legend>
        <div className="operation">
          <label htmlFor="changed-score">Changed Score:</label>
          <input
            type="number"
            id="changed-score"
            name="changed-score"
            placeholder="Enter changed score"
            value={changedScore}
            onChange={(e) => setChangedScore(parseInt(e.target.value))}
          />
          <button id="simulate-changes" onClick={handleSimulateChanges}>
            Simulate Changes
          </button>
        </div>
      </fieldset>
    </div>
  );
}

export default Sand;
