import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'
import './App.css'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

import Navigation from './Navigation'
import Technologies from './Technologies'

const scrollTo = (component, behavior) => window.scrollTo({ top: component ? offsetTop(component) : 0, behavior})
const offsetTop = component => ReactDOM.findDOMNode(component).offsetTop

class App extends Component {
  componentDidMount() {
    const { location: { hash } } = this.props
    if (hash === '#software') {
      scrollTo(this.software, 'instant')
    }
    else if (hash === '#gis') {
      scrollTo(this.gis, 'instant')
    }
    else if (hash === '#cartography') {
      scrollTo(this.cartography, 'instant')
    }
  }
  componentDidUpdate() {
    const { location: { hash } } = this.props
    if (hash === '#software') {
      scrollTo(this.software, 'smooth')
    }
    else if (hash === '#gis') {
      scrollTo(this.gis, 'smooth')
    }
    else if (hash === '#cartography') {
      scrollTo(this.cartography, 'smooth')
    }
  }
  render() {
    return (
      <div className="App container-fluid">
        <div className='parallax atlasbg fullheight'>
          <Navigation />
          <section>
            <h1>Tell your story</h1>
          </section>
        </div>
        <div className='row' ref={ref => this.software = ref}>
          <div className='col-sm-6 vcenter'>
            <h2>Software</h2>
            <p>
              Cruftbusters specializes in software that tells stories and
              automates work. When you work with us, your users will be happy
              they are using software fortified around their needs.
            </p>
            <p>
              Is your source code difficult to maintain and understand? We plan
              or conduct code refactorings. Contact us to map out a refactoring.
            </p>
            <p>
              We have experience with a variety of technologies and are committed
              to finding the best tools and strategies for every task. Are you
              interested in exploring how a technology can integrate with your
              ecosystem but don't see it listed? Ask us about it!
            </p>
          </div>
          <Technologies className='col-sm-6 vcenter'/>
        </div>
        <div className='parallax appsbg halfheight'>
        </div>
        <div className='row' ref={ref => this.gis = ref}>
          <div className='col-sm-6 vcenter quote'>
            We put the shape in shapefile
          </div>
          <div className='col-sm-6 vcenter'>
            <h2>GIS</h2>
            <p>
              Cruftbusters strives to aid spatial awareness and understanding
              through the power of modern GIS. If your application, pipeline, or
              idea has a spatial component, we will unleash its full potential.
            </p>
            <p>
              We are well acquainted with the ArcGIS stack as well as open
              source desktop mapping and analysis tools. Cruftbusters will help
              you solidify procedure and infrastructure in your business or
              department so that you can answer big questions the instant they
              need answers.
            </p>
          </div>
        </div>
        <div className='parallax powerlinebg halfheight'>
        </div>
        <div className='row' ref={ref => this.cartography = ref}>
          <div className='col-sm-6 vcenter'>
            <h2>Custom Cartography</h2>
            <p>
              We love beautiful maps that emphasize critical detail. Whether
              you need a bulk order of specialized print maps or a highly
              available and accessible interactive web map, we are here to meet
              your cartography needs.
            </p>
          </div>
          <div className='col-sm-6 vcenter quote'>
            Functional and beautiful cartography at your fingertips
          </div>
        </div>
        <div className='parallax cartographybg halfheight'>
        </div>
        <footer>
          <div>Streamlining storytelling</div>
          <div>Contact Us</div>
          <div className='contact'>
            <a href='https://github.com/arctair/cruftbusters.arctair.com'><FaGithub /></a>
            <a href='mailto:jtyler_@outlook.com'><FaEnvelope /></a>
          </div>
          <div className='copyright'>
            © 2018 Cruftbusters. All Rights Reserved
          </div>
        </footer>
      </div>
    )
  }
}

export default withRouter(App)
