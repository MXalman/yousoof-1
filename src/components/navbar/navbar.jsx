import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 

  const isActiveLink = (link) => {
    return link === location.pathname; 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header'>
      <a href="#" className='logo'>Yusuf.</a>

      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="/" className={isActiveLink('/') ? 'active' : ''} onClick={toggleMenu}>Home</Link>
        <Link to="/skills" className={isActiveLink('/skills') ? 'active' : ''} onClick={toggleMenu}>Skills</Link>
        <Link to="/Exp/Edu" className={isActiveLink('/Exp/Edu') ? 'active' : ''} onClick={toggleMenu}>Exp / Edu</Link>
        <Link to="/portfolio" className={isActiveLink('/portfolio') ? 'active' : ''} onClick={toggleMenu}>Portfolio</Link>
        <Link to="/contact" className={isActiveLink('/contact') ? 'active' : ''} onClick={toggleMenu}>Contact</Link>
      </div>
      
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
