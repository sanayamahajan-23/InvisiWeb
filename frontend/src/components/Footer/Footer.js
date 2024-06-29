import React from 'react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer id="#footer" className="bg-dark text-light py-4">
      <div className="container text-center">
        <p>&copy; 2024 InvisiWeb. All rights reserved.</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;

