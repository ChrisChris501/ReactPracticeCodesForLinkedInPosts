import React, { useState } from 'react';

const MultiEventHandling = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted value: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        className="p-2 border rounded mb-2" 
        placeholder="Type something..." 
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default MultiEventHandling;