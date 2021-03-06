import React from 'react';
import Subscribe from '../shared/Subscribe';
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
      <Subscribe />
      <Footer>
        <Container>
          <FooterText>
            Copyright &copy; {new Date().getFullYear()}, Priyansh Rastogi.
          </FooterText>
        </Container>
      </Footer>
    </LayoutWrapper>
  )
}

export default Layout;