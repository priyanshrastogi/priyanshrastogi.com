import styled from '@emotion/styled';

export const BlogPostWrapper = styled.div`
  padding-bottom: 18px;
`;

export const MarkdownWrapper = styled.div`
  color: ${props => props.theme.colors.secondary};

  p {
    margin-bottom: 24px;
    line-height: 1.75em;
  }

  li {
    line-height: 1.75em;
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

  blockquote {
    margin-left: 1rem;
    font-style: italic;
    font-size: 1.4rem;
    border-left: 3px solid;
    border-color: ${props => props.theme.colors.primary};
    padding-left: 20px;
  }
`;

export const PublishedText = styled.p`
  font-size: 0.75em;
  line-height: 1.5em;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`;

export const Divider = styled.hr`
  margin: 36px 0px 24px;
`;

export const BackWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const BackText = styled.p`
  font-size: 1.25em;
  margin-left: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
