import React from 'react';

const ChildComponentB = ({ sharedState }) => {
  return <div>Shared State: {sharedState}</div>;
};

export default ChildComponentB;