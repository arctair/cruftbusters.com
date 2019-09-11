import React from 'react';

import {
  Button,
  Input,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  u: {
    height: theme.spacing(1),
  },
  inputContainer: {
    padding: theme.spacing(1),
  },
  send: {
    borderRadius: 0,
    backgroundColor: theme.palette.primary[200],
  },
});

const Talk = ({ classes }) => {
  const [text, setText] = React.useState(`-- BEEP --\n\n\nContact details: \n\n--`);
  const [transferring, setTransferring] = React.useState();
  return (
    <Paper square className={classes.container}>
      <Typography variant='subtitle1'>
        We appreciate your reaching out! Leave a message after the beep.
      </Typography>
      <div className={classes.u} />
      <Paper square className={classes.inputContainer}>
        <Input
          fullWidth
          multiline
          disableUnderline
          value={transferring ? 'Transferring...' : text}
          onChange={e => setText(e.target.value)}
        />
      </Paper>
      <Paper square>
        <Button
          fullWidth
          className={classes.send}
          onClick={async () => {
            setTransferring(true);
            try {
              const response = await fetch(
                'https://api.cruftbusters.com',
                { method: 'POST' },
              );
              if (response.status !== 200) {
                throw Error();
              }
              setText('Thanks for getting in touch! You will hear back from us shortly');
            } catch (exception) {
              setText(`Sorry, there was a problem sending your message. Try again?\n--\n` + text);
            }
            setTransferring(false);
          }}
        >
          Send
        </Button>
      </Paper>
      <div className={classes.u} />
      <Typography variant='subtitle1'>
        Cruftbusters is a software consultancy located in Minneapolis. 
        We are born from a need to accelerate the evolution of software.
        Built by and for craftful engineers, Cruftbusters stands around
        building working, malleable, and impactful software.
      </Typography>
    </Paper>
  );
}

export default withStyles(styles)(Talk);