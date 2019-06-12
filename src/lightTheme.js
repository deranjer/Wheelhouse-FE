import { createMuiTheme } from '@material-ui/core/styles';

//.MuiInputLabel-outlined.MuiInputLabel-shrink

const lightTheme = createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        '&$shrink': {
          'transform-origin': 'center',
          transition: 'all ease-in-out 200ms',
          transform: 'translateY(-50%) scale(0.75)!important',
          left: 'calc(50% - 37px)', // TODO:: hacky! imporve
        },
      },
    },
    // adding spacing actually increases the width causing a super annoying horizontal scrollbar
    // this should fix it for all containers and still have the spacing *between* the elements
    MuiGrid: {
      container: {
        width: '100%!important',
        margin: '0!important',
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#532d8e',
      light: '#7b1fa2',
      dark: '#7556a4',
    },
    secondary: {
      main: '#645f61',
      light: '#504c4d',
      dark: '#837e80',
    },
    success: {
      contrastText: '#ffffff',
      main: '#45B880',
      light: '#F1FAF5',
      dark: '#00783E',
    },
    info: {
      contrastText: '#ffffff',
      main: '#1070CA',
      light: '#F1FBFC',
      dark: '#007489',
    },
    warning: {
      contrastText: '#ffffff',
      main: '#FFB822',
      light: '#FDF8F3',
      dark: '#95591E',
    },
    danger: {
      contrastText: '#ffffff',
      main: '#ED4740',
      light: '#FEF6F6',
      dark: '#BF0E08',
    },
    text: {
      primary: '#12161B',
      secondary: '#66788A',
      disabled: '#A6B1BB',
    },
    background: {
      default: '#f8fafc',
      dark: '#172B4D',
      paper: '#ffffff',
    },
    border: '#DFE3E8',
    divider: '#DFE3E8',
  },
});

export default lightTheme;
