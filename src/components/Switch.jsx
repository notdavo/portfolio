import React from "react";
import "../styles/Switch.css";
import { IoMoon, IoSunny } from "react-icons/io5";

const Switch = ({ toggleMode, color_mode }) => {
  return (
    <div className="switch-conteiner">
      <IoSunny className="icon-light-mode" />
      <label className="switch">
        <input type="checkbox" checked={color_mode} onChange={toggleMode} />
        <span className="slider" />
      </label>
      <IoMoon className="icon-dark-mode" />
    </div>
  );
};

export default Switch;
