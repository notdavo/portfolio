// Navbar.js
import React from 'react';
import '../styles/Navbar.css';  // Adjust the path based on your project structure
import image from '../assets/images/profile_image.jpg';  // Adjust the path based on your project structure


const Navbar = ({ sections }) => {
  return (
    <nav className="navbar">
      <img className="profile_image" src={image} alt="David's profile" />
      <ul>
        {sections.map((section, index) => (
          <li key={index}>{section.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
