import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import Switch from "../components/Switch";

const Navbar = ({ sections, toggleMode, color_mode }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const storedSection = sessionStorage.getItem("selectedSection");
    setActiveSection(Number(storedSection));
  }, [activeSection]);

  const handleSectionClick = (sectionId) => {
    sessionStorage.setItem("selectedSection", sectionId);
    setActiveSection(sectionId);
  };

  const elements = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
          const foundObject = sections.find(
            (section) => section.title.toLowerCase() === entry.target.id
          ).id;
          sessionStorage.setItem("selectedSection", foundObject);
          setActiveSection(Number(foundObject));
        }
      });
    },
    {
      threshold: 0.9,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return (
    <nav
      className={`navbar ${
        color_mode ? "navbar-dark-mode" : "navbar-light-mode"
      }`}
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={"#" + section.title.toLowerCase()}
          className={section.id === activeSection ? "active" : ""}
          onClick={() => handleSectionClick(section.id)}
        >
          {section.title}
        </a>
      ))}
      <Switch toggleMode={toggleMode} color_mode={color_mode} />
    </nav>
  );
};

export default Navbar;
