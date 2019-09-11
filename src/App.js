import React from 'react';

import {
  Typography,
} from '@material-ui/core';

function App() {
  return (
    <div>
      <Typography variant='h2'>
        Consulting
      </Typography>
      <ul>
        <li>Web App Development</li>
        <li>Web Service Development</li>
        <li>Terminal/Console App Development</li>
      </ul>
      <Typography variant='h2'>
        Workshops
      </Typography>
      <ul>
        <li>XP teams/organizations</li>
        <li>Test-Driven Development</li>
        <li>Spring Boot</li>
        <li>Apache Kafka</li>
        <li>RabbitMQ</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default App;
