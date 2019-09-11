import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from 'component/Landing';

function App() {
  return (
    <>
      <div style={{
        backgroundImage: 'url(\'steven-lewis-dmHnXJ-5ilQ-unsplash.jpg\')',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        position: 'absolute',
      }} />
      <Switch>
        <Route default component={Landing} />
      </Switch>
    </>
  );
}

export default App;
