import styled from '@emotion/styled';

export const BlogWrapper = styled.div`
  min-height: 95vh;
  margin-top: 24px;

  @media only screen and (max-width: 812px) {
    margin-top: 36px;
  }
`;

export const BlogHeader = styled.div`
  display: flex;
`;

export const BlogHeaderText = styled.p`
  font-size: 36px;
  line-height: 52px;
  margin: 0px;
  color: ${props => props.theme.colors.primary};
  padding: 10px 25px;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end}); 

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const BlogPostsContainer = styled.div`
  margin-top: 36px;
`;

export const BlogPostTitle = styled.a`
  display: block;
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;