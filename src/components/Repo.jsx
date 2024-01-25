// Repo.js
import React, {useState, useEffect} from 'react';
import '../styles/Repo.css';  // Adjust the path based on your project structure
import { IoLogoJavascript, IoLogoGithub, IoLogoChrome, IoLogoReact, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";



const Repo = ({name, description, repo_url, color_mode}) => {

  const [mainLanguage, setLanguage] = useState('');

  useEffect(() => {
    const getRepoLanguages = async () => {
      let fetchedRepoLanguage  = [];
      let res;
      try {
        res = await fetch(
            `https://api.github.com/repos/notdavo/${name}/languages`, {
              headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json',
              },
            }
        );
        let data = await res.json();
        fetchedRepoLanguage  = fetchedRepoLanguage.concat(data);
        fetchedRepoLanguage.sort((a, b) => b.forks_count - a.forks_count);
        fetchedRepoLanguage.sort((a, b) => b.stargazers_count - a.stargazers_count);
        if (fetchedRepoLanguage[0].hasOwnProperty('JavaScript')) {
          setLanguage('JavaScript');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getRepoLanguages();
  }, [name]);

  const repoURL = () => {
    window.open(repo_url, '_blank');
  }

  return (
    <div className={`repo-card ${color_mode ? 'dark-mode-background' : 'light-mode-background'}`}>
      <div className='repo-header'>
        <p className='repo-name'>{name}</p>
      </div>
      <div className='repo-body'>
        <div className='repo-description-container'>
          <p className='repo-description'>{description}</p>
        </div>
        {/* <div className='language-container'>
          <IoLogoJavascript className='icon-language'/>
          <p className='repo-language'>{mainLanguage}</p>
          <IoLogoReact className='icon-react'/>
          <p className='repo-language react'>React</p>
          <IoLogoHtml5 className='icon-html'/>
          <p className='repo-language'>HTML</p>
          <IoLogoCss3 className='icon-css'/>  
          <p className='repo-language'>CSS</p>
        </div> */}
        <div className='flex-column skills'>
          <div className='language-container'>
            <span className='icons-main background-icon-black test'><IoLogoJavascript className='icon-size-main icon-javascript-main'/><span className='hide-media'>{mainLanguage}</span></span>
            <span className='icons-main background-icon-black'><IoLogoReact className='icon-size-main icon-react-main'/><span className='hide-media'>React</span></span>
            <span className='icons-main html-main'><IoLogoHtml5 className='icon-size-main icon-white'/><span className='hide-media'>HTML</span></span>
            <span className='icons-main css-main'><IoLogoCss3 className='icon-size-main icon-white'/><span className='hide-media'>CSS</span></span>
          </div>
        </div>
      </div>
      <div className='buttoms-container'>
        <button className='repo-buttom' onClick={repoURL}><span className='span-buttom'>Code</span><IoLogoGithub className="icon-button hide-media" /></button>
        <button className='repo-buttom' onClick={repoURL}><span className='span-buttom'>Live</span><IoLogoChrome className="icon-button hide-media"/></button>
      </div>
    </div>
  );
};

export default Repo;
