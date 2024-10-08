import React from "react";
import "../styles/Test.css";

const Test = () => {
  return (
    <nav className="contenedor">
      <a href="#about" className="texto-perspectiva" tabIndex="1">
        About
      </a>
      <a href="#experience" className="texto-perspectiva" tabIndex="2">
        Experience
      </a>
      <a href="#proyects" className="texto-perspectiva" tabIndex="3">
        Proyects
      </a>
      {/* <div className="contenedor-background"></div> */}
    </nav>
  );
};

export default Test;
