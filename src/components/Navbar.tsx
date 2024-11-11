"use client";
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../app/styles/navbar.css";

type NavbarProps=object 

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-brand'>Aamna Rana</div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-link"><a href="#hero">Home</a></li>
          <li className="navbar-link"><a href="#about">About</a></li>
          <li className="navbar-link"><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <li className="navbar-link"><a href="#hero">Home</a></li>
          <li className="navbar-link"><a href="#about">About</a></li>
          <li className="navbar-link"><a href="#contact">Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
