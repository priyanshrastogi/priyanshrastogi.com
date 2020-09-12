import React from 'react';
import Link from 'next/link';
import { GameReviewsIndexWrapper, GameTitle, GameTitlesContainer, Header, HeaderText } from './GameReviewsIndex.styled';

const GameReviewsIndex = ({ games }) => {
  
  return (
    <GameReviewsIndexWrapper>
      <Header>
        <HeaderText index={1}>Game Reviews</HeaderText>
      </Header>
      <GameTitlesContainer>
        {games.map((game, index) => {
          return (
            <Link href="/game-reviews/[slug]" as={`/game-reviews/${game.fields.slug}`} key={index}>
              <GameTitle>{game.fields.gameName}</GameTitle>
            </Link>);
        })}
      </GameTitlesContainer>
    </GameReviewsIndexWrapper>
  );
}

export default GameReviewsIndex;