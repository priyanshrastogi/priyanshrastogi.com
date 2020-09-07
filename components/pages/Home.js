import React from 'react';
import { HomeWrapper, HomeText, HighlightedText } from './Home.styled';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeText>
        Hey, There.<br/> I am &nbsp;<HighlightedText index={0}>Priyansh Rastogi</HighlightedText>. 
        I am a Full Stack Developer based in Gurgaon, India. Currently, I am working at &nbsp; 
        <HighlightedText index={1}>Vested Finance</HighlightedText>, where I write 
        JavaScript to empower local investors to go global. Previously, I was at &nbsp; 
        <HighlightedText index={2}>American Express</HighlightedText>. I love to build products 
        that provide users with an exceptional UX. When not coding or sleeping, I usually surf the 
        web, play video games, or listen to music.
      </HomeText>
    </HomeWrapper>
  );
}

export default Home;