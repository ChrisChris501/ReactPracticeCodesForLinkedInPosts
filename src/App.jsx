import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => alert('Button Clicked!');

  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={handleClick} className="bg-blue-500 text-white">
        Click Me!
      </Button>
    </div>
  );
};

export default App;
