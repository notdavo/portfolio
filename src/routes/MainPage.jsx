// MainPage.js
import React from 'react';
import {LinkedIn, GitHub}  from '@mui/icons-material';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import '../styles/MainPage.css';

const MainPage = () => {

  const openURL = (event) => {
    const linkeding = 'https://www.linkedin.com/in/david-arce-rodríguez-40a457122'
    const githuib = 'https://github.com/notdavo'
    event.target.id === 'linkedin' ? window.open(linkeding, '_blank') : window.open(githuib, '_blank');
    console.log(event.target.id);
  };

  const sections = [{ id: 1, title: 'David Arce' },
                    { id: 2, title: 'About Me' },
                    { id: 3, title: 'Portfolio' },
                    { id: 4, title: 'Skills' },
                    { id: 5, title: 'Contact' }]

  return (
    <div className='main-content'>
      <div className='flex-container'>
        <Navbar sections={sections} />
        <div className="sections">
          {sections.map((section) => (
            <Section key={section.id} title={section.title}>
              {section.id === 1 && (
                  <div>
                      <p className='style-1'>Welcome to my portfolio as a web developer.</p>
                      <p className='style-2'>If you want to contact me, write to <span>arcerodriguezdavidjosue@gmail.com</span>.</p>
                      <button className='download-button'>Donwload my CV</button>
                      <div className='social-container'>
                        <LinkedIn id='linkedin' onClick={openURL} className='icon' fontSize="large"/>
                        <GitHub id='github' onClick={openURL} className='icon' fontSize="large"/>
                      </div>
                  </div>
              )}
              {section.id === 2 && (
                  <div>
                      <p>This is the content for About Me.</p>
                  </div>
              )}
              {section.id === 3 && (
                  <div>
                      <p>This is the content for Portfolio.</p>
                  </div>
              )}
              {section.id === 4 && (
                  <div>
                      <p>This is the content for Skills.</p>
                  </div>
              )}
              {section.id === 5 && (
                  <div>
                      <p>This is the content for Contact.</p>
                  </div>
              )}
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
