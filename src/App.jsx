// App.jsx
import React from 'react';
import Button from './Components/Button';
import Counter from './Components/Counter';

const App = () => {
  const handleClick = () => alert('Button Clicked!');

  return (
    <div className="justify-center items-center h-screen space-6 m-5">
      <div>
        <Button onClick={handleClick} className=" bg-blue-500 text-white p-4 rounded ">
          Click Me!
        </Button>
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
};

export default App;
