import PostList from "../shared/PostList";
import { BlogWrapper } from "./Blog.styled";

const Blog = ({ posts }) => {
  return (
    <BlogWrapper>
     <PostList posts={posts} />
    </BlogWrapper>
  );
}

export default Blog;