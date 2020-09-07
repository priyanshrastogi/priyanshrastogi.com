import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme.dark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
