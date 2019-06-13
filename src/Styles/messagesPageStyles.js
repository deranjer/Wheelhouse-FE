import { makeStyles } from '@material-ui/styles';

function getMessagesPageClasses(theme) {
  const chatStyle = makeStyles({
    root: {
      margin: 10,
      '& .rce-mlist > .rce-container-mbox > .rce-mbox.rce-mbox-right': {
        backgroundColor: theme.palette.primary.main,
        color: '#f8fafc',
        '& .rce-mbox-body > .rce-mbox-time.non-copiable:before': {
          color: '#bdbdbd',
        },
        '& svg': {
          fill: theme.palette.primary.main,
        },
      },
      '& .rce-mbox': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.dark,
        '& .rce-mbox-body > .rce-mbox-time.non-copiable:before': {
          color: theme.palette.type === 'light' ? '#565656' : '#bdbdbd',
        },
        '& div > svg': {
          fill: theme.palette.background.dark,
          '& .rce-mbox-text': {
            color: theme.palette.text.light,
          },
        },
      },
    },
  });

  const inputStyles = makeStyles({
    root: {
      borderRadius: 5,
      backgroundColor: theme.palette.type === 'light' ? '#000' : '#fff',
      '& .rce-input.rce-input-textarea': {
        backgroundColor: theme.palette.type === 'light' ? '#000' : '#fff',
        color: theme.palette.type === 'light' ? '#eee' : '#333',
      },
      '& .rce-input-buttons > .rce-button': {
        backgroundColor: `${theme.palette.background.default}!important`,
        color: `${theme.palette.text.primary}!important`,
      },
    },
  });

  const ChatClasses = chatStyle();
  const InputClasses = inputStyles();
  return { ChatClasses, InputClasses };
}

export default getMessagesPageClasses;
