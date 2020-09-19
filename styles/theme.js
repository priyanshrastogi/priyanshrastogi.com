const gradients = [
  {start: '#007CF0', end: '#00DFD8'},
  {start: '#7928CA', end: '#FF0080'},
  {start: '#FF4D4D', end: '#F9CB28'},
  {start: '#4776E6', end: '#8E54E9'},
  {start: '#FF512F', end: '#DD2476'},
  {start: '#8E2DE2', end: '#4A00E0'},
  {start: '#4A00E0', end: '#8E2DE2'},
];

const theme = {
  light: {
    backgrounds: {
      primary: '#fff',
    },
    colors: {
      primary: '#000'
    },
    gradients
  },
  dark: {
    backgrounds: {
      primary: '#000',
    },
    colors: {
      primary: '#fff'
    },
    gradients
  }
}

export default theme;