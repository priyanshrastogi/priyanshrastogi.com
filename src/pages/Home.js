import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
//import Work from '../components/Work';
import BlogPosts from '../components/BlogPosts';
//import GithubRepos from '../components/GithubRepos';
//import Tweets from '../components/Tweets';
import Connect from '../components/Connect';
import Links from '../components/Links';
import CodeNotes from '../components/CodeNotes';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div className='container'>
      <Intro/>
      <About/>
      <BlogPosts/>
      <CodeNotes showGotoPageButton={false}/>
      <Connect/>
      <Links/>
      <Subscribe/>
    </div>
  )
}