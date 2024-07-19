{/* import React from 'react'; 
import Button from './Components/Button';
import Counter from './Components/State';
import Greeting from './Components/Props';
import EventHandling from './Components/EventHandler'; 
import MultiEventHandling from './Components/MultiEventhandlers';
import ConditionalRendering from './Components/ConditionalRendering';
import Fragments from './Components/Fragments'; 

const App = () => 
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
      <div className="bg-pink-200 p-10">
      <Greeting name="John" /> 
      <Greeting name="Jane" /> 
    </div>

    <EventHandling /> 
    <MultiEventHandling /> 
    <ConditionalRendering /> 
    <Fragments />
    </div>
  );

  export default App;
};  */}

{/* import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={< About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App; */}


import React from 'react';
import ItemList from './Pages/ItemList';

const App = () => {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Fruit List</h1>
      <ItemList />
    </div>
  );
};

export default App;


