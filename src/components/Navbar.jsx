// Navbar.js
import React from 'react';
import '../styles/Navbar.css';  // Adjust the path based on your project structure
import image from '../assets/images/profile_image.jpg';  // Adjust the path based on your project structure


const Navbar = ({ sections }) => {
  return (
    <nav className="navbar">
      <img className="profile_image" src={image} alt="David's profile" />
        {sections.map((section) => (
          <a key={section.id} href={"#"+section.title.toLowerCase()}>{section.title}</a>
        ))
        }
    </nav>
  );
};

export default Navbar;
