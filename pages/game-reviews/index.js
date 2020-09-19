import React, { Fragment } from 'react';
import { getGameReviews } from '../../contentful';
import GameReviewsIndex from '../../components/pages/GameReviewsIndex';
import MetaTags from '../../components/shared/MetaTags';

const GameReviewsPage = ({games}) => {
  return (
    <Fragment>
      <MetaTags title='Game Reviews by Priyansh Rastogi'/>
      <GameReviewsIndex games={games} />
    </Fragment>
  )
}

export async function getStaticProps({ params }) {
  const games = await getGameReviews();
  return {props: { games }};
}

export default GameReviewsPage;