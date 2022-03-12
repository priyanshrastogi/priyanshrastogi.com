import Link from "next/link";
import { useState } from "react";
import PostList from "../shared/PostList";
import { 
  BioText,
  Divider,
  HomeWrapper,
  PageLink,
  PageLinks,
  ProfileLink,
  ShortBio,
} from "./Home.styled"

const Home = ({ blogPosts }) => {

  const [showAllPosts, setShowAllPosts] = useState(false);

  return (
    <HomeWrapper>
      <PostList posts={blogPosts} viewAll={showAllPosts} setViewAll={setShowAllPosts} />
      <Divider />
      <ShortBio>
        <BioText>Fullstack Engineer based in Gurgaon, India. Currently working on payments at Vested Finance. Passionate about building products, fintech and cooking.</BioText>
        <Link href="/about" passHref>
          <ProfileLink>Find out more</ProfileLink>
        </Link>
      </ShortBio>
      <PageLinks>
        <PageLink variant="blueGreen" href="/blog" passHref>Blog</PageLink><br/>
        <PageLink variant="orangeYellow" href="/photos" passHref>Photos</PageLink><br/>
        <PageLink variant="blueIndigo" href="/bookshelf" passHref>Bookshelf</PageLink><br/>
      </PageLinks>
    </HomeWrapper>
  );
}

export default Home;
