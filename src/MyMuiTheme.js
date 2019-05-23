import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red, yellow, purple, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d32f2f',
      light: '#db5858',
      dark: '#932020',
    },
    secondary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e',
    },    
  }
});

export default theme;