import React from 'react';
import Link from 'next/link';
import { LinkHeader, LinksWrapper, LinkHeaderText } from './Links.styled';

const Links = () => {
  
  return (
    <LinksWrapper>
      <LinkHeader>
        <Link href='/game-reviews'>
          <LinkHeaderText index={2}>Game Reviews</LinkHeaderText>
        </Link>
      </LinkHeader>
    </LinksWrapper>
  );
}

export default Links;