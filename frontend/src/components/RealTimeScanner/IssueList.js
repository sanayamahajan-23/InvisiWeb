import React, { useEffect, useState } from 'react';
import './IssueList.css';

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  // Example: Fetch issues from backend API
  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = () => {
    // Replace with actual fetch logic
    fetch('/api/real-time-scanner/issues')
      .then(response => response.json())
      .then(data => setIssues(data))
      .catch(error => console.error('Error fetching issues:', error));
  };

  return (
    <div className="issue-list">
      <h2>Issues List</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <div className="issue-title">{issue.title}</div>
            <div className="issue-description">{issue.description}</div>
            <div className="issue-severity">{issue.severity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
