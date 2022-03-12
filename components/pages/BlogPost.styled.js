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

  pre {
    white-space: -moz-pre-wrap; /* Mozilla, supported since 1999 */
    white-space: -pre-wrap; /* Opera */
    white-space: -o-pre-wrap; /* Opera */
    white-space: pre-wrap; /* CSS3 - Text module (Candidate Recommendation) http://www.w3.org/TR/css3-text/#white-space */
    word-wrap: break-word; /* IE 5.5+ */
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
`;