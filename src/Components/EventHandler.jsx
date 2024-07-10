import React, { useState } from 'react';

const EventHandling = () => {
  const [count, setCount] = useState(0);
  // handleClick is an event handler function that updates the state
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* The button element has an onClick event that triggers the handleClick function */}
      <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
        Click Me! Count: {count}
      </button>
    </div>
  );
};

export default EventHandling;
