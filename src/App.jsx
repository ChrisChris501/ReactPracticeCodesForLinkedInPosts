import React from 'react';
{/* import Button from './Components/Button';
import Counter from './Components/State'; */}
import Greeting from './Components/Props';

const App = () => {
  {/* const handleClick = () => alert('Button Clicked!'); */}

  return (
    <div className="justify-center items-center h-screen space-6 m-5">
      {/* <div>
        <Button onClick={handleClick} className=" bg-blue-500 text-white p-4 rounded ">
          Click Me!
        </Button>
      </div>
      <div>
        <Counter />
      </div> */}
      <div className="bg-pink-200 p-10">
      <Greeting name="John" /> 
      <Greeting name="Jane" />
    </div>
    </div>
  );
};


export default App;

