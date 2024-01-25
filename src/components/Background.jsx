// Section.js
import React from 'react';
import '../styles/Background.css';

const Background = ({ color_mode }) => {
  return (
    <div className={`area ${color_mode ? 'dark-mode-area' : 'light-mode-area'}`}>
        <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div >
  );
};

export default Background;
