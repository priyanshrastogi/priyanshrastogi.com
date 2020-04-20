import React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <div className='section'>
      <h2><span className='topic-highlight'># links</span></h2>
      <div className='content'>
        <p><Link to='/notes' style={{color: 'inherit'}}>Notes</Link></p>
        <p><Link to='/work' style={{color: 'inherit'}}>Work</Link></p>
        <p><a target='_blank' rel='noopener noreferrer' href='https://blog.priyanshrastogi.com' style={{color: 'inherit'}}>Blog</a></p>
      </div>
    </div>
  )
}