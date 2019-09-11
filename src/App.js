import React from 'react';

import {
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  splash: {
    backgroundImage: 'url(\'/tomas-malik-Oph_Fs9bWwg-unsplash.jpg\')',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    backgroundColor: '#dfddc3',
    color: '#59575e',
  },
  header: {
    paddingBottom: theme.spacing(2),
  },
  center: {
    textAlign: 'center',
  },
  ul: {
    listStyleType: 'none',
    textAlign: 'center',
    padding: 0,
  },
});

function App({ classes }) {
  return (
    <>
      <div className={classes.splash} />
      <Paper className={classes.paper} square>
        <Typography variant='h3' className={classes.header}>
          Cruftbusters
        </Typography>
        <Typography variant='h4' className={classes.center}>
          Consulting
        </Typography>
        <ul className={classes.ul}>
          <li>Web App Development</li>
          <li>Web Service Development</li>
          <li>Terminal/Console App Development</li>
        </ul>
        <Typography variant='h4' className={classes.center}>
          Workshops
        </Typography>
        <ul className={classes.ul}>
          <li>XP teams/organizations</li>
          <li>Test-Driven Development</li>
          <li>Spring Boot</li>
          <li>Apache Kafka</li>
          <li>RabbitMQ</li>
          <li>React</li>
        </ul>
      </Paper>
    </>
  );
}

export default withStyles(styles)(App);
