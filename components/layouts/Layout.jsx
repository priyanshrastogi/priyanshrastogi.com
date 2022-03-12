import Footer from '../shared/Footer';
import Header from '../shared/Header';
import { LayoutWrapper, Container } from './Layout.styled';

const Layout = ({children, hideHeader}) => {
  return (
    <LayoutWrapper>
      <Container>
        {!hideHeader && <Header />}
        {children}
        <Footer />
      </Container>
    </LayoutWrapper>
  )
}

export default Layout;