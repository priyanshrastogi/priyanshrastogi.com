import React from 'react';
import { LayoutWrapper, Container, Header, Footer, Brand, FooterText } from './Layout.styled';

const Layout = ({children}) => {
  return (
    <LayoutWrapper>
      <Header>
        <Brand index={0}>PR</Brand>
      </Header>
      <Container>
        {children}
      </Container>
      {/*<Footer>
        <FooterText>Copyright &copy; {new Date().getFullYear()}, Priyansh Rastogi. Licensed under the MIT License.</FooterText>
      </Footer>*/}
    </LayoutWrapper>
  )
}

export default Layout;