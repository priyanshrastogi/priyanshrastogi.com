import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  background: ${props => props.theme.background};
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 36px 0px;
  
  @media only screen and (max-width: 812px) {
    width: 88%;
    margin: 0 auto;
  }
`;

export const Footer = styled.div`
  padding: 36px 0px;
`;

export const FooterText = styled.p`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: ${props => props.theme.colors.primary};

  @media only screen and (max-width: 812px) {
    font-size: 16px;
    line-height: 24px;
  }

`;