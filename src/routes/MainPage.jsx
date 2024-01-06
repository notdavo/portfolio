// MainPage.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Repo from '../components/Repo';
import '../styles/MainPage.css';

const MainPage = () => {

  const maxPages = 3;
  
  const [repos, setRepos] = useState([]);

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
                    { id: 3, title: 'Skills' },
                    { id: 4, title: 'Contact' }]

  return (
    <div className='flex-container'>
      <Navbar key="navbar" sections={sections}/>
      <div className="sections">
        {sections.map((section) => (
          <Section key={section.id} id={section.title.toLowerCase()} title={section.title}>
            {section.id === 0 && (
                <div>
                    <p className='style-1'>Welcome to my portfolio as a web developer.</p>
                    <p className='style-2'>If you want to contact me, write to <span>arcerodriguezdavidjosue@gmail.com</span>.</p>
                    {/* <button className='download-button'>Donwload my CV</button> */}
                    <div className='social-container'>
                      <FaLinkedin onClick={openURL} className='icon'></FaLinkedin>
                      <FaGithub onClick={openURL} className='icon'></FaGithub>
                    </div>
                </div>
            )}
            {section.id === 1 && (
                <div>
                    <p className='style-1'>I'm a software developer eager to keep learning and put in practice all my knowledge in web developing.</p>
                </div>
            )}
            {section.id === 2 && (
              <div className='repo-container'>
                {repos.map((repo) =>(
                  <Repo key={repo.id} name={repo.name} language={repo.language} description={repo.description} repo_url={repo.html_url}/>
                ))}
              </div>
            )}
            {section.id === 3 && (
                <div>
                    <p>This is the content for Skills.</p>
                </div>
            )}
            {section.id === 4 && (
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
