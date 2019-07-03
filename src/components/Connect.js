import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faGithub, faTwitter, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';

export default function Connect() {
  const iconStyle = {marginLeft: 15, marginRight: 15, color: '#3366FF'};
  return (
    <div className='section'>
      <h2><span className='topic-highlight'># connect with me</span></h2>
      <div className='content'>
        <p>If you want to build something together, or wanna get in touch, write to <a href='mailto:hello@priyanshrastogi.com' style={{color: '#3366FF'}}>hello@priyanshrastogi.com</a><br/>I am social, find me on </p>
        <div className='text-center'>
          <a target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/priyanshrastogi' style={iconStyle}><FontAwesomeIcon icon={faLinkedinIn} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/priyanshx7' style={iconStyle}><FontAwesomeIcon icon={faTwitter} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/priyanshrastogi' style={iconStyle}><FontAwesomeIcon icon={faGithub} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://instagram.com/priyanshrastogix' style={iconStyle}><FontAwesomeIcon icon={faInstagram} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://facebook.com/priyanshrastogix' style={iconStyle}><FontAwesomeIcon icon={faFacebook} size='lg'/></a>
          <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@priyanshrastogi' style={iconStyle}><FontAwesomeIcon icon={faMedium} size='lg'/></a>
        </div>
      </div>
    </div>
  )
}