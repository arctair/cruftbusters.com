import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import Contact from 'component/Contact'
import Home from 'component/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
