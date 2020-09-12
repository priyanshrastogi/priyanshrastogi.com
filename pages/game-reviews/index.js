import React from 'react';
import { getGameReviews } from '../../contentful';
import GameReviewsIndex from '../../components/pages/GameReviewsIndex';

const GameReviewsPage = ({games}) => {
  return (
    <GameReviewsIndex games={games}/>
  )
}

export async function getStaticProps({ params }) {
  const games = await getGameReviews();
  return {props: { games }};
}

export default GameReviewsPage;