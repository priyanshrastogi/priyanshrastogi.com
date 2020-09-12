import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import Layout from '../components/layouts/Layout';

const App = ({ Component, pageProps }) => {
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
