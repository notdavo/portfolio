import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowDownSharp,
} from "react-icons/io5";
import "../styles/Introduction.css";
import davidImage from "../assets/images/IMG_4126.png";

const Introduction = ({ id }) => {
  const linkedin = process.env.REACT_APP_LINKEDIN;
  const github = process.env.REACT_APP_GITHUB;

  const handleClick = (url) => {
    url === "linkedin"
      ? window.open(linkedin, "_blank")
      : window.open(github, "_blank");
  };

  return (
    <div id={id} className="introduction-container">
      <img
        src={davidImage}
        alt="David memoji"
        className="david-profile-image"
      ></img>
      <h1>Hi! I'm David Arce</h1>
      <h2> Welcome to my portfolio as a Frontend developer.</h2>
      <div className="social-container">
        <IoLogoLinkedin
          id="linkedin"
          onClick={() => handleClick("linkedin")}
          className="icon"
        />
        <IoLogoGithub
          id="github"
          onClick={() => handleClick("github")}
          className="icon"
        />
      </div>
      <a href="#body">
        <IoArrowDownSharp className="down-arrow" />
      </a>
    </div>
  );
};

export default Introduction;
