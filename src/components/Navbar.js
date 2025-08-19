import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Suraj<span></span></a>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
              
      </ul>
    </nav>
  );
};

export default Navbar;