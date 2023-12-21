// Section.js
import React from 'react';
import '../styles/Section.css';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <div className="section-content">
        <h2 className='style-h2'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Section;
