import styled from '@emotion/styled';

export const BlogPostWrapper = styled.div``;

export const MarkdownWrapper = styled.div`
  color: ${props => props.theme.colors.secondary};

  p {
    margin-bottom: 24px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;