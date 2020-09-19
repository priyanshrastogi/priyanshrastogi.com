import styled from '@emotion/styled';

export const GameReviewWrapper = styled.div`
  min-height: 95vh;
  margin-top: 24px;

  @media only screen and (max-width: 812px) {
    margin-top: 36px;
  }
`;

export const GameHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const GameHeaderText = styled.p`
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

export const SubHeaderText = styled.p`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  margin-top: -20px;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
`;

export const GameImage = styled.img`
  max-width: 100%;
  margin-top: 48px;

  @media only screen and (max-width: 812px) {
    margin-top: 24px;
  }
`;

export const GameReviewDescriptionText = styled.p`
  display: block;
  font-size: 28px;
  line-height: 34px;
  margin-top: 20px;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 15px;
  }
`;
