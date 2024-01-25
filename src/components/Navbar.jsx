// Navbar.js
import React, {useState} from 'react';
import '../styles/Navbar.css';
import Switch from '../components/Switch';



const Navbar = ({ sections, toggleMode, color_mode }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav className={`navbar ${color_mode ? 'navbar-dark-mode' : 'navbar-light-mode'}`}>
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
      <Switch toggleMode={toggleMode} color_mode={color_mode}/> 
    </nav>
  );
};

export default Navbar;
