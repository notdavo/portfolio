// Navbar.js
import React, {useState} from 'react';
import '../styles/Navbar.css';  // Adjust the path based on your project structure
import image from '../assets/images/profile_image.jpg';  // Adjust the path based on your project structure


const Navbar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className="navbar">
      {/* <img className="profile_image" src={image} alt="David's profile" /> */}
        {sections.map((section) => (
          <a 
            key={section.id} 
            href={"#"+section.title.toLowerCase()}
            className={section.id === activeSection ? 'active' : ''}
            onClick={() => handleSectionClick(section.id)}
          >
            {section.title}
          </a>
        ))
        }
    </nav>
  );
};

export default Navbar;
