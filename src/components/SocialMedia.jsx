import React from 'react';
import '../styles/SocialMedia.css';
import {LinkedIn, GitHub}  from '@mui/icons-material';

const SocialMedia = (props) => {
  return (
    <p>{props.url === 'linkedin' ? <LinkedIn className='icon' fontSize="large"/> : <GitHub className='icon' fontSize="large"/>}</p>
  );
};

export default SocialMedia;