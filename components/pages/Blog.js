import React from 'react';
import { BlogWrapper, BlogHeaderText, BlogPostTitle, BlogPostsContainer, BlogHeader } from './Blog.styled';

const Blog = ({ posts }) => {
  
  return (
    <BlogWrapper>
      <BlogHeader>
        <BlogHeaderText index={2}>From My Blog</BlogHeaderText>
      </BlogHeader>
      <BlogPostsContainer>
        {posts.map((post, index) => {
          return <BlogPostTitle href={post.fields.link} target='_blank' key={index}>{post.fields.title}</BlogPostTitle>
        })}
      </BlogPostsContainer>
    </BlogWrapper>
  );
}

export default Blog;