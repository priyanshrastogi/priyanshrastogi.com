import React from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Work from '../components/Work';
import BlogPosts from '../components/BlogPosts';
import GithubRepos from '../components/GithubRepos';
import Tweets from '../components/Tweets';

export default function Home() {
  return (
    <div className='container'>
      <Intro/>
      <About/>
      <Work/>
      <BlogPosts/>
      <GithubRepos/>
      <Tweets/>
    </div>
  )
}