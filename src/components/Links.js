import React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <div className='about'>
      <h2><span className='topic-highlight'># links</span></h2>
      <div className='content'>
        <p><Link to='projects' style={{color: 'inherit'}}>Projects</Link></p>
        <p>About this website tech stack</p>
        <p>Blog - Searching for X</p>
      </div>
    </div>
  )
}