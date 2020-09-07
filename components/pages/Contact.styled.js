import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  margin-top: 48px;

  @media only screen and (max-width: 812px) {
    margin-top: 36px;
  }
`;

export const ContactHeaderText = styled.span`
  padding: 10px 25px;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end}); 
  font-size: 36px;
  line-height: 52px;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

export const ContactText = styled.p`
  display: block;
  font-size: 36px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`