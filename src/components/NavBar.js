import React, { useState } from 'react';
import Logo from './images/Logo.png';
import './NavBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(activeLink);
  };

  return (
    <nav className="navbar">
      <img src={Logo} className="image" alt="Logo" style={{ width: '60px', height: 'auto' }} />
      <ul className="links-container">
        <li className={`links-item ${activeLink === 'home' ? 'active' : ''}`}>
          <a href="#home" className="link" onClick={() => handleLinkClick('home')}>home</a>
        </li>
        <li className={`links-item ${activeLink === 'about' ? 'active' : ''}`}>
          <a href="#about" className="link" onClick={() => handleLinkClick('about')}>about</a>
        </li>
        <li className={`links-item ${activeLink === 'new-start' ? 'active' : ''}`}>
          <a href="#new-start" className="link" onClick={() => handleLinkClick('new-start')}>New start with Per Scholas</a>
        </li>
        <li className={`links-item ${activeLink === 'volunteering' ? 'active' : ''}`}>
          <a href="#volunteering" className="link" onClick={() => handleLinkClick('volunteering')}>volunteering</a>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;

