import React from 'react';
import { Global, css } from '@emotion/react';

const lightStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    margin: 0px;
    font-family: 'Inter', sans-serif;
  }

  p {
    margin: 0px;
  }
`;

const GlobalStyle = () => {
  return <Global styles={lightStyles} />
};

export default GlobalStyle;