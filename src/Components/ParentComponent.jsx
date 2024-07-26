import React, { useState } from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

const ParentComponent = () => {
  const [sharedState, setSharedState] = useState('');

  const handleStateChange = (newState) => {
    setSharedState(newState);
  };

  return (
    <div>
      <ChildComponentA sharedState={sharedState} onStateChange={handleStateChange} />
      <ChildComponentB sharedState={sharedState} />
    </div>
  );
};

export default ParentComponent;