import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="fixed-info">
        <div className="info-header">
          <a href="#introduction">David Arce</a>
          <h2>Frontend Engineer</h2>
          <h3>Texto de prueba</h3>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experiecne</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
