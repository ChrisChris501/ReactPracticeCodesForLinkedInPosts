import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Profile">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;
