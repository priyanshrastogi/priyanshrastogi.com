import React from 'react';
import Layout from '../components/layouts/Layout';
import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';

const Homepage = () => {
  return (
    <Layout>
      <Home />
      <Blog />
    </Layout>
  );
}

export default Homepage;
