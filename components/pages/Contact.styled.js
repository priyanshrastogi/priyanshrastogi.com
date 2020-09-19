import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  margin-top: 108px;

  @media only screen and (max-width: 812px) {
    margin-top: 54px;
  }
`;

export const ContactHeader = styled.div`
  display: flex;
`;

export const ContactHeaderText = styled.p`
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

export const ContactText = styled.p`
  display: block;
  font-size: 36px;
  line-height: 52px;
  margin-bottom: 15px;
  margin-top: 36px;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    line-height: 40px;
    margin-bottom: 15px;
  }
`;

export const ContactLink = styled.a`
  color: ${props => props.theme.colors.primary};
`;