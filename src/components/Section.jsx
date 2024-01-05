// Section.js
import React from 'react';
import '../styles/Section.css';

const Section = ({ title, id, children }) => {
  return (
    <div id={id} className="section"> 
        <h2 className='style-title'>{title}</h2>
        {children}
    </div>
  );
};

export default Section;
