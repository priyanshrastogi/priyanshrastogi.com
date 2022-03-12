import Link from "next/link";
import { PostDate, PostDateWrapper, PostDescription, PostItem, PostMonth, PostsList, PostText, PostTitle } from "./PostList.styled"

const PostList = () => {
  return (
    <PostsList>
      <PostItem>
        <PostDateWrapper>
          <PostDate>13</PostDate>
          <PostMonth>Nov 2021</PostMonth>
        </PostDateWrapper>
        <PostText>
          <Link href={"/blog/a-week-in-goa"} passHref>
            <PostTitle>A week in Goa</PostTitle>
          </Link>
          <PostDescription>I lived in Goa for a week and here is what I did.</PostDescription>
        </PostText>
      </PostItem>
      <PostItem>
        <PostDateWrapper>
          <PostDate>11</PostDate>
          <PostMonth>Nov 2021</PostMonth>
        </PostDateWrapper>
        <PostText>
          <Link href={"/blog/a-week-in-goa"} passHref>
            <PostTitle>A week in Goa</PostTitle>
          </Link>
          <PostDescription>I lived in Goa for a week and here is what I did.</PostDescription>
        </PostText>
      </PostItem>
    </PostsList>
  );
}

export default PostList;