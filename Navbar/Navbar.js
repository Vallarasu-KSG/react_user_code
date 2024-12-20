import React, { useState } from 'react';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  // Function to handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="side-navbar">
          <div className="side-header" id='side-header'>
            <h2>Student Dashboard</h2>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
          <div
            className={`navbar-page-name-box ${isMenuOpen ? 'menu-open' : ''}`}
          >
            <Link
              className={location.pathname === '/' ? 'active' : ''}
              to={'/'}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={location.pathname === '/Invoice' ? 'active' : ''}
              to={'/Invoice'}
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              className={location.pathname === '/Details' ? 'active' : ''}
              to={'/Details'}
              onClick={() => setIsMenuOpen(false)}
            >
              Details
            </Link>
            <Link
              className={location.pathname === '/Course' ? 'active' : ''}
              to={'/Course'}
              onClick={() => setIsMenuOpen(false)}
            >
              Course
            </Link>
            <Link
              className={location.pathname === '/About' ? 'active' : ''}
              to={'/About'}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
