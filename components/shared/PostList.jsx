import moment from 'moment';
import Link from "next/link";
import { PostDate, PostDateWrapper, PostDescription, PostItem, PostMonth, PostsList, PostText, PostTitle, ViewAll, ViewAllWrapper } from "./PostList.styled"

const PostList = ({ posts, viewAll, setViewAll }) => {
  return (
    <PostsList>
      {(viewAll ? posts : posts.slice(0, 5)).map((post, index) => (
        <PostItem key={index}>
          <PostDateWrapper>
            <PostDate>{moment(post.date).format('DD')}</PostDate>
            <PostMonth>{moment(post.date).format('MMM YYYY')}</PostMonth>
          </PostDateWrapper>
          <PostText>
            <Link href={`/blog/${post.slug}`} passHref>
              <PostTitle>{post.title}</PostTitle>
            </Link>
            <PostDescription>{post.excerpt}</PostDescription>
          </PostText>
        </PostItem>
      ))}
      {!viewAll && (
        <ViewAllWrapper>
          <ViewAll variant="violetPink" onClick={() => setViewAll(true)}>View All Posts</ViewAll>
        </ViewAllWrapper>
      )}
    </PostsList>
  );
}

PostList.defaultProps = {
  viewAll: true
}

export default PostList;