import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fdfdfd',
    footer: '#003333'
  },
  breakPoints: {
    xs: '420px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
