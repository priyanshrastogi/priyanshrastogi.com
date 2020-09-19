import React from 'react';
import { Global, css } from '@emotion/core';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');

  body {
    margin: 0px;
    font-family: 'Kumbh Sans', sans-serif;
  }

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin: 0px;

    @media only screen and (max-width: 812px) {
      font-size: 32px;
    }
  }

  p {
    margin: 0px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #000; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(#7928CA, #FF0080);
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />
};

export default GlobalStyle;