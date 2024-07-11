import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <button onClick={handleLogin} className="bg-green-500 text-white p-2 rounded">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default ConditionalRendering;