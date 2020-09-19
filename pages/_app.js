import React, { Fragment, useEffect } from 'react';
import Router from 'next/router';
import * as gtag from '../components/extra/gtag';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import Layout from '../components/layouts/Layout';

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
      <ThemeProvider theme={theme.dark}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
