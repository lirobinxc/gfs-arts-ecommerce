import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul className="container">
        <li>Home</li>
        <li>Search</li>
        <li>Contact</li>
        <li className="nav-right">Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
