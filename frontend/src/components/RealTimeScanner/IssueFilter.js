import React from 'react';
import './IssueFilter.css';

const IssueFilter = () => {
  // Example filter options (can be dynamic based on backend data)
  const filterOptions = ['All', 'Critical', 'Major', 'Minor'];

  return (
    <div className="issue-filter">
      <select>
        {filterOptions.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default IssueFilter;
