import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
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
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: 'rgba(255, 255, 255, 0.23)',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#532d8e',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: 'rgba(255, 255, 255, 0.23)',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: '#532d8e',
          borderWidth: 1,
        },
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#532d8e',
        },
      },
    },
  },
  palette: {
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
      primary: '#fefefe',
      secondary: '#cdcdcd',
      disabled: '#969696',
    },
    background: {
      default: '#121212',
      dark: '#000000',
      paper: '#000000',
    },
    border: '#484848',
    divider: '#484848',
  },
});

export default darkTheme;
