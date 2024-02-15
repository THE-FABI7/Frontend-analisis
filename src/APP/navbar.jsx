import React from 'react';
import './Navbar.css';

const Navbar = ({ onFileSelect }) => {
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
        <li className="nav-item">
          <input type="file" accept=".json" onChange={handleFileSelect} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;