import React from 'react';
import BlogPosts from './BlogPosts';

export default function Home() {
  return (
    <div className='container'>
      <div className='text-center intro-header'>
        <h1>Priyansh Rastogi</h1>
        <p>Full Stack Developer</p>
      </div>
      <div className='about'>
        <h2># about</h2>
        <p>I am a Full Stack Developer based in New Delhi, India.</p>
      </div>
      <div className='about'>
        <h2># work</h2>
        <p>Software Engineer / American Express<br/>Jul 2019 - Present</p>
        <p>SWE Intern / American Express<br/>Jan 2019 - Jun 2019</p>
      </div>
      <div className='about'>
        <h2># blog posts</h2>
        <BlogPosts />
      </div>
    </div>
  )
}