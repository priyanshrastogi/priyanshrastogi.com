import styled from '@emotion/styled';

export const PostsList = styled.div``;

export const PostItem = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

export const PostDateWrapper = styled.div`
  margin-right: 30px;
  min-width: 64px;
`;

export const PostDate = styled.p`
  font-size: 3.25em;
  margin: 0px 0px 4px;
  color: ${props => props.theme.colors.secondary};
`;

export const PostMonth = styled.p`
  font-size: 0.75em;
  color: ${props => props.theme.colors.secondary};
`;

export const PostText = styled.div`
  padding-top: 4px;
`;

export const PostTitle = styled.a`
  font-size: 1.5em;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 1.25em;
  }
`;

export const PostDescription = styled.p`
  font-size: 1em;
  color: ${props => props.theme.colors.secondary};
  margin-top: 12px;

  @media only screen and (max-width: 812px) {
    font-size: 0.85em;
  }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ViewAll = styled.p`
  cursor: pointer;
  width: fit-content;
  font-size: 1.2em;
  line-height: 1.4em;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  padding: 8px 24px;
  border-radius: 4px;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.variant].start + ', ' + props.theme.gradients[props.variant].end});

  @media only screen and (max-width: 812px) {
    font-size: 1em;
    line-height: 1.3em;
  }
`;