import { Fragment, useEffect } from 'react';
import Router from 'next/router';
import * as gtag from '../components/extra/gtag';
import GlobalStyle from '../styles/global';
import { ToggleThemeProvider } from '../components/extra/ToggleThemeContext';
import ThemeProvider from '../components/extra/ThemeProvider';

const App = ({ Component, pageProps }) => {
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <ToggleThemeProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ToggleThemeProvider>
    </Fragment>
  );
}

export default App;
