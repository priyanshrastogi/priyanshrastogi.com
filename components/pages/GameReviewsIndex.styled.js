import styled from '@emotion/styled';

export const GameReviewsIndexWrapper = styled.div`
  min-height: 95vh;
  margin-top: 24px;

  @media only screen and (max-width: 812px) {
    margin-top: 36px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderText = styled.p`
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

export const GameTitlesContainer = styled.div`
  margin-top: 36px;
`;

export const GameTitle = styled.a`
  display: block;
  font-size: 36px;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`