import React from "react";
import "../styles/Section.css";

const Section = ({ title, id, children, color_mode }) => {
  return (
    <div id={id} className="section">
      <h2
        className={`style-title ${
          color_mode ? "dark-style-title" : "light-style-title"
        }`}
      >
        {title}
      </h2>
      {children}
      <div className="line" />
    </div>
  );
};

export default Section;
