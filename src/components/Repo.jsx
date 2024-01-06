// Repo.js
import React from 'react';
import '../styles/Repo.css';  // Adjust the path based on your project structure
import { IoLogoJavascript, IoLogoGithub, IoLogoChrome, IoLogoReact, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";



const Repo = ({name, language, description, repo_url}) => {

  const repoURL = (event) => {
    window.open(repo_url, '_blank');
  }

  return (
    <div className='repo-card'>
      <p className='repo-name'>{name}</p>
      <p className='repo-description'>{description}</p>
      <div className='language-container'>
        <IoLogoJavascript className='icon-language'/>
        <p className='repo-language'>{language}</p>
        <IoLogoReact className='icon-react'/>
        <p className='repo-language react'>React</p>
        <IoLogoHtml5 className='icon-html'/>
        <p className='repo-language'>HTML</p>
        <IoLogoCss3 className='icon-css'/>
        <p className='repo-language'>CSS</p>
      </div>
      <div className='buttoms-container'>
        <button className='repo-buttom' onClick={repoURL}><span className='span-buttom'>Code</span><IoLogoGithub className="icon-button" /></button>
        <button className='repo-buttom' onClick={repoURL}><span className='span-buttom'>Live</span><IoLogoChrome className="icon-button"/></button>
      </div>
    </div>
  );
};

export default Repo;
