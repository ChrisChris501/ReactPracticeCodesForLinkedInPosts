import React, { useState } from 'react';

function Counter() {

 const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button  className='bg-red-500 text-white p-3 rounded' onClick={() => setCount(count + 1)}>Increment</button>
      </div>
  );
}


export default Counter;
