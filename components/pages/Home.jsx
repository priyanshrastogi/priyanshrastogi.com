import Link from "next/link";
import { useState } from "react";
import PostList from "../shared/PostList";
import { 
  BioText,
  Divider,
  FlexEnd,
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
        <BioText>Fullstack Engineer based in Gurgaon, India. Currently working on neobanking and payments at Vested Finance. Passionate about building products, fintech and cooking.</BioText>
        <FlexEnd>
          <PageLink variant="deepBlue" href="/about" passHref>Find out more</PageLink><br/>
        </FlexEnd>
      </ShortBio>
      {/*<PageLinks>
        <PageLink variant="orangeYellow" href="/photos" passHref>Photos</PageLink><br/>
        <PageLink variant="blueIndigo" href="/bookshelf" passHref>Bookshelf</PageLink><br/>
      </PageLinks>*/}
    </HomeWrapper>
  );
}

export default Home;
