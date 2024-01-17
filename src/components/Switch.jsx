// Switch.js
import React, { useState, useEffect} from 'react';
import '../styles/Switch.css';

const Switch = () => {

    const [color_mode, setColorMode] = useState(false);

    const toggleMode = () => {
        console.log("Cambia");
        console.log(color_mode);
        setColorMode((prevModo) => !prevModo);
    };

    return (
        <label className="switch">
            <input 
                type="checkbox"
                checked={color_mode}
                onChange={toggleMode}
            />
            <span className="slider"></span>
        </label>
    );
};

export default Switch;
