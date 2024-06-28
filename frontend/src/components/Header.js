import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#help">Help</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
