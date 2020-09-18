import React from 'react';
import Link from 'next/link';
import { ReviewsWrapper, ReviewsHeader, ReviewsHeaderText, ReviewText } from './Reviews.styled';

const Links = () => {
  
  return (
    <ReviewsWrapper>
      <ReviewsHeader>
          <ReviewsHeaderText index={4}>Reviews</ReviewsHeaderText>
      </ReviewsHeader>
      <Link href='/game-reviews'>
        <ReviewText>Game Reviews</ReviewText>
      </Link>
    </ReviewsWrapper>
  );
}

export default Links;