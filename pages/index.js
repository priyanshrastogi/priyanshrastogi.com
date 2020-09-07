import React from 'react';
import { createClient } from 'contentful';
import Layout from '../components/layouts/Layout';
import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';

const Homepage = ({ posts }) => {
  return (
    <Layout>
      <Home />
      <Blog posts={posts}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const posts = await contentful.getEntries({
    'content_type': 'blogPost',
    'order': '-fields.createdAt'
  });
  console.log(posts.items[0]);
  return {
    props: {
      posts: posts.items
    }
  };
}

export default Homepage;
