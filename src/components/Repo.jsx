// Repo.js
import React from 'react';
import '../styles/Repo.css';  // Adjust the path based on your project structure
import {Javascript, GitHub, Language}  from '@mui/icons-material';
import { grey } from '@mui/material/colors';


const Repo = ({name, language, description, repo_url}) => {

  const repoURL = (event) => {
    window.open(repo_url, '_blank');
  }

  return (
    <div className='repo-card'>
      <p className='repo-name'>{name}</p>
      <p className='repo-description'>{description}</p>
      <div className='language-container'>
        <Javascript id='javascript' className='icon-language' fontSize="medium" sx={{ color: grey[500] }}/>
        <p className='repo-language'>{language}</p>
      </div>
      <div className='buttoms-container'>
        <button className='repo-buttom' onClick={repoURL}><p className='p-buttom'>Code</p><GitHub className="icon-button" fontSize="small"/></button>
        <button className='repo-buttom' onClick={repoURL}><p className='p-buttom'>Live</p><Language className="icon-button" fontSize="small"/></button>
      </div>
    </div>
  );
};

export default Repo;
