import styled from '@emotion/styled';

export const LayoutWrapper = styled.div`
  background: ${props => props.theme.backgrounds.primary};
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 0px 48px 0px 58px;
  
  @media only screen and (max-width: 812px) {
    padding: 0px 18px;
  }

`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  padding-top: 20px;
`;

export const Brand = styled.h1`
  background: -webkit-linear-gradient(0deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Footer = styled.div`
  padding: 20px;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.primary};
`;