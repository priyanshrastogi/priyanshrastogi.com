import React from 'react';
import { getBlogPosts } from '../contentful';
import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';
import Contact from '../components/pages/Contact';
import Reviews from '../components/pages/Reviews';

const Homepage = ({ posts }) => {
  return (
    <React.Fragment>
      <Home />
      <Blog posts={posts}/>
      <Reviews />
      <Contact />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {
      posts: posts
    }
  };
}

export default Homepage;
