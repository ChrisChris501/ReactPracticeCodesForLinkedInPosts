import React from 'react';

const ChildComponentA = ({ sharedState, onStateChange }) => {
  return (
    <div>
      <input
        type="text"
        value={sharedState}
        onChange={(e) => onStateChange(e.target.value)}
      />
    </div>
  );
};

export default ChildComponentA;