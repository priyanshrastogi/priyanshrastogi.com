const gradients = {
  blueGreen: {start: '#007CF0', end: '#00DFD8'},
  violetPink: {start: '#7928CA', end: '#FF0080'},
  orangeYellow: {start: '#FF4D4D', end: '#F9CB28'},
  blueIndigo: {start: '#4776E6', end: '#8E54E9'},
  orangePink: {start: '#FF512F', end: '#DD2476'},
  deepBlue: {start: '#0575E6', end: '#021B79'}
};

const theme = {
  light: {
    background: '#F9F7F7',
    colors: {
      primary: '#3F72AF',
      secondary: '#080708',
      white: '#F9F7F7'
    },
    gradients,
  },
  dark: {
    background: '#080708',
    colors: {
      primary: '#3772FF',
      secondary: '#F9F7F7',
      white: '#F9F7F7'
    },
    gradients
  }
}

export default theme;