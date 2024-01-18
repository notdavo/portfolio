// MainPage.js
import React, { useState, useEffect} from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Repo from '../components/Repo';
import '../styles/MainPage.css';
import light_mode_image from '../assets/images/profile_image_light_mode.jpg';
import dark_mode_image from '../assets/images/profile_image_dark_mode.jpg';
import { IoLogoJavascript, IoLogoGithub, IoLogoLinkedin , IoLogoReact, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";



const MainPage = () => {

  const maxPages = 3;
  
  const [repos, setRepos] = useState([]);
  const [color_mode, setColorMode] = useState(false);

  const toggleMode = () => {
      setColorMode((prevModo) => !prevModo);
  };

  useEffect(() => {
    getRepos();
  }, []);

  const openURL = (event) => {
    const linkeding = 'https://www.linkedin.com/in/david-arce-rodríguez-40a457122'
    const githuib = 'https://github.com/notdavo'
    event.target.id === 'linkedin' ? window.open(linkeding, '_blank') : window.open(githuib, '_blank');
  };

  const getRepos = async () => {
    let fetchedRepos  = [];
    let res;
    try {
      for (let i = 1; i <= maxPages; i++) {
        res = await fetch(
            `https://api.github.com/users/notdavo/repos?&sort=pushed&per_page=100&page=${i}`
        );
        let data = await res.json();
        fetchedRepos  = fetchedRepos.concat(data);
        console.log(fetchedRepos);
    }
    fetchedRepos.sort((a, b) => b.forks_count - a.forks_count);
    fetchedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    setRepos(fetchedRepos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
};

  const sections = [{ id: 0, title: 'David Arce' },
                    { id: 1, title: 'About Me' },
                    { id: 2, title: 'Portfolio' },
                    { id: 3, title: 'Contact' },]

  return (
    <div className={`flex-container ${color_mode ? 'dark-mode-flex-container' : 'light-mode-flex-container'}`}>
      <Navbar key="navbar" sections={sections} toggleMode={toggleMode} color_mode={color_mode}/>
      <div className="sections">
        {sections.map((section) => (
          <Section key={section.id} id={section.title.toLowerCase()} title={section.title} color_mode={color_mode}>
            {section.id === 0 && (
                <div>
                    <p className={`style-1 ${color_mode ? 'dark-mode-style-1' : 'light-mode-style-1'}`}>Welcome to my portfolio as a web developer.</p>
                    <p className={`style-2 ${color_mode ? 'dark-mode-style-2' : 'light-mode-style-2'}`}>If you want to contact me, write to <span>arcerodriguezdavidjosue@gmail.com</span>.</p>
                    {/* <button className='download-button'>Donwload my CV</button> */}
                    <div className='social-container'>
                      <IoLogoLinkedin id='linkedin' onClick={openURL} className={`icon ${color_mode ? 'dark-mode-icon' : 'light-mode-icon'}`}/>
                      <IoLogoGithub id='github' onClick={openURL} className={`icon ${color_mode ? 'dark-mode-icon' : 'light-mode-icon'}`}/>
                    </div>
                </div>
            )}
            {section.id === 1 && (
                <div className='about_me_container'>
                  <img className="profile_image" src={color_mode ? dark_mode_image : light_mode_image} alt="David's profile" />
                  <div className='about_me'>
                    <p className={`style-about-me ${color_mode ? 'dark-mode' : 'light-mode'}`}>
                      Passionate Software Developer eager to keep learning and grow in the professional scene. Seeking to use my knowledge and committed to becoming a dependable and valuable team member.
                      <br/>I have worked with programming languages and frameworks such as:
                    </p>
                    <div className='skills'>
                      <div className='icons-container'>
                        <span className='javascript-main'><IoLogoJavascript className='icon-javascript-main'/>JavaScript</span>
                        <span className='javascript-main'><IoLogoReact className='icon-react-main'/>React</span>
                        <span className='html-main'><IoLogoHtml5 className='icon-html-main'/>HTML</span>
                        <span className='css-main'><IoLogoCss3 className='icon-css-main'/>CSS</span>
                        <span className='git-main'><IoLogoGithub className='icon-git-main'/>Git</span>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            {section.id === 2 && (
              <div className='repo-container'>
                {repos.map((repo) =>(
                  <Repo key={repo.id} name={repo.name} language={repo.language} description={repo.description} repo_url={repo.html_url}/>
                ))}
                <Repo key={"repo.id"} name={"repo.name"} language={"repo.language"} description={"repo.description"} repo_url={"repo.html_url"}/>

              </div>
            )}
            {section.id === 3 && (
                <div>
                    <p>This is the content for Contact.</p>
                </div>
            )}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
