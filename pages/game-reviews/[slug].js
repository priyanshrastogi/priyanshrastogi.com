import React from 'react';
import { getGameReviewBySlug, getGameReviewSlugs } from '../../contentful';
import GameReview from '../../components/pages/GameReview';

const GameReviewPage = ({review}) => {
  return (
    <GameReview review={review}/>
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