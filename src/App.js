import React from 'react';
import { Link } from 'react-router-dom';

import {
  IconButton,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

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
    textAlign: 'center',
  },
  header: {
    paddingBottom: theme.spacing(2),
  },
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
  talk: {
    textDecoration: 'none',
    color: 'inherit',
    '-webkit-tap-highlight-color': 'transparent',
  },
  iconButton: {
    '-webkit-tap-highlight-color': 'transparent',
  },
  iconButtonTypography: {
    marginLeft: theme.spacing(1),
    fontWeight: 700,
  },
});

function App({ classes }) {
  return (
    <>
      <div className={classes.splash} />
      <Paper className={classes.paper} square>
        <Typography variant='h3'>
          Cruftbusters
        </Typography>
        <Typography variant='h4'>
          Consulting
        </Typography>
        <ul className={classes.ul}>
          <li>Web App Development</li>
          <li>Web Service Development</li>
          <li>Terminal/Console App Development</li>
        </ul>
        <Typography variant='h4'>
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
        <Link to='/talk' className={classes.talk}>
          <IconButton className={classes.iconButton}>
            <EmailIcon />
            <Typography variant='subtitle1' className={classes.iconButtonTypography}>
              Talk to me
            </Typography>
          </IconButton>
        </Link>
      </Paper>
    </>
  );
}

export default withStyles(styles)(App);
