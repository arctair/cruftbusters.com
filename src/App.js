import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import About from 'component/About'
import Contact from 'component/Contact'
import Home from 'component/Home'

class App extends Component {
  constructor() {
    super()
    this.updateDocumentTitle = this.updateDocumentTitle.bind(this)
  }
  componentDidMount() {
    this.updateDocumentTitle()
  }
  componentDidUpdate() {
    this.updateDocumentTitle()
  }
  updateDocumentTitle() {
    const { location: { pathname }} = this.props
    const pageTitle = pathname.startsWith('/about') ? 'About' :
      pathname.startsWith('/contact') ? 'Contact' :
      'Home'
    document.title = `Cruftbusters | ${pageTitle}`
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
