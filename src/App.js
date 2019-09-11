import React from 'react';

import {
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(2),
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
    <Paper className={classes.paper}>
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
  );
}

export default withStyles(styles)(App);
