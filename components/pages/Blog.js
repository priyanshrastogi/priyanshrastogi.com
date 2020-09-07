import React from 'react';
import { BlogWrapper, BlogHeaderText, BlogPostTitle, BlogPostsContainer } from './Blog.styled';

const Blog = () => {
  
  const posts = [
    {
      title: 'Accept Payments on Universal Apps',
      link: 'https://medium.com'
    },
    {
      title: '2019: At a glance',
      link: 'https://medium.com'
    },
    {
      title: 'An Intro to WebVR for Dummies',
      link: 'https://medium.com'
    },
    {
      title: '2018: Review',
      link: 'https://medium.com'
    },
    {
      title: 'The Physics of Time-travel',
      link: 'https://medium.com'
    }
  ]
  
  return (
    <BlogWrapper>
      <BlogHeaderText index={2}>From My Blog</BlogHeaderText>
      <BlogPostsContainer>
        {posts.map((post, index) => {
          return <BlogPostTitle href={post.link} target='_blank' key={index}>{post.title}</BlogPostTitle>
        })}
      </BlogPostsContainer>
    </BlogWrapper>
  );
}

export default Blog;