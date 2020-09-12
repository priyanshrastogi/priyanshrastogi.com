import styled from '@emotion/styled';

export const LinksWrapper = styled.div`
  margin-top: 108px;

  @media only screen and (max-width: 812px) {
    margin-top: 54px;
  }
`;

export const LinkHeader = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

export const LinkHeaderText = styled.a`
  font-size: 36px;
  line-height: 52px;
  margin: 0px;
  color: ${props => props.theme.colors.primary};
  padding: 10px 25px;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end}); 
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 812px) {
    font-size: 28px;
    line-height: 40px;
  }
`;
