import styled from '@emotion/styled';

export const HomeWrapper = styled.div`
  display: flex;
  min-height: 95vh;
  align-items: center;
  margin-top: -40px;

  @media only screen and (max-width: 812px) {
    margin-top: 48px;
    align-items: flex-start;
  }
`;

export const HomeText = styled.p`
  font-size: 36px;
  line-height: 52px;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const HighlightedText = styled.span`
  padding: 5px;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end});
`;

