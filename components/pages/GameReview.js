import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { GameHeader, GameHeaderText, GameImage, GameReviewDescriptionText, GameReviewWrapper, SubHeaderText } from './GameReview.styled';

const GameReview = ({review}) => {
  
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <GameReviewDescriptionText>{children}</GameReviewDescriptionText>
    }
  }
  
  return (
    <GameReviewWrapper>
      <SubHeaderText>Reviews</SubHeaderText>
      <GameHeader>
        <GameHeaderText index={1}>{review.fields.gameName}</GameHeaderText>
      </GameHeader>
      <GameImage src={`https:${review.fields.image.fields.file.url}`} />
      {documentToReactComponents(review.fields.reviewDescription, options)}
    </GameReviewWrapper>
  );
}

export default GameReview;