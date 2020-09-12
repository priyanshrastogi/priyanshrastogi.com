import { createClient } from 'contentful';

const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});


export const getBlogPosts = async () => {
  const posts = await contentful.getEntries({
    'content_type': 'blogPost',
    'order': '-fields.createdAt'
  });
  return posts.items;
}

export const getGameReviews = async () => {
  const gameReviews = await contentful.getEntries({
    'content_type': 'gameReview',
    'select': 'fields.slug,fields.gameName',
    'order': '-sys.createdAt'
  });
  return gameReviews.items;
}

export const getGameReviewSlugs = async () => {
  const gameReviews = await contentful.getEntries({
    'content_type': 'gameReview',
    'select': 'fields.slug',
    'order': '-sys.createdAt'
  });
  return gameReviews.items;
}

export const getGameReviewBySlug = async (slug) => {
  const gameReviews = await contentful.getEntries({
    'content_type': 'gameReview',
    'fields.slug': slug
  });
  return gameReviews.items[0];
}