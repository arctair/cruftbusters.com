import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';

import Landing from 'component/Landing';
import Talk from 'component/Talk';

function App() {
  return (
    <MuiThemeProvider
      theme={
        createMuiTheme({
          palette: {
            primary: brown,
          },
        })
      }
    >
      <div style={{
        backgroundImage: 'url(\'steven-lewis-dmHnXJ-5ilQ-unsplash.jpg\')',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: '-1',
      }} />
      <Switch>
        <Route exact path='/talk' component={Talk} />
        <Route component={Landing} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
