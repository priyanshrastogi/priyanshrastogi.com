import React, { Fragment } from 'react';
import { getGameReviewBySlug, getGameReviewSlugs } from '../../contentful';
import GameReview from '../../components/pages/GameReview';
import MetaTags from '../../components/shared/MetaTags';

const GameReviewPage = ({review}) => {
  return (
    <Fragment>
      <MetaTags title={`${review.fields.gameName} Review By Priyansh Rastogi`}/>
      <GameReview review={review}/>
    </Fragment>
  )
}

export async function getStaticPaths() {
  const gameReviews = await getGameReviewSlugs();
  const paths = gameReviews.map((review) => ({
    params: {slug: review.fields.slug}
  }));

  return {paths, fallback: false};
}

export async function getStaticProps({ params }) {
  const review = await getGameReviewBySlug(params.slug);
  return {props: { review }};
}

export default GameReviewPage;