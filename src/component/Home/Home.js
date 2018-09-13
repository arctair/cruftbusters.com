import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'

import './Home.css'

import Footer from 'component/Footer'
import Navigation from 'component/Navigation'
import SingularRow from 'component/SingularRow'
import Tile from 'component/Tile'

class Home extends Component {
  componentDidUpdate() {
    this.tryScrollTo()
  }
  componentDidMount() {
    this.tryScrollTo()
  }
  tryScrollTo() {
    let hash = this.props.location.hash.replace('#', '');
    if (hash) {
      let node = ReactDOM.findDOMNode(this.refs[hash]);
      if (node) {
        node.scrollIntoView();
      }
    }
  }
  render() {
    return (
      <Fragment>
        <div className='parallax atlasbg fullheight'>
          <Navigation />
          <section>
            <h1>Tell your story</h1>
          </section>
        </div>
        <SingularRow id='software' ref='software'>
          <div className='col-sm-12 col-md-push-8 col-md-4'>
            <h2>Software</h2>
            <p>
              You see results with Cruftbusters because we know how to use
              proven techniques when working with software. We strike a balance
              between best practices and innovative touch.
            </p>
            <p>
              We value continued maintenance of product that is in
              continued use. We can help with analyzation, refactoring, and
              extending your product.
            </p>
            <p>
              Do you subscribe to "people before things"? We are committed to the
              people that compose a product. Test our commitment by scheduling
              a training session between your team or users and our training team.
            </p>
          </div>
          <div className='col-sm-12 col-md-pull-4 col-md-7'>
            <SingularRow className='theme-1' noPadding>
              <Tile header='Deployment' />
              <Tile header='Scaling' />
              <Tile header='Static Web Pages' />
              <Tile header='Single Page Web Applications' />
              <Tile header='Refactoring' />
              <Tile header='Database Analyzation' />
              <Tile header='Data Pipelining' />
              <Tile header='Software Training' />
              <Tile header='Product Training' />
            </SingularRow>
          </div>
        </SingularRow>
        <div className='parallax appsbg halfheight' />
        <SingularRow id='networking' ref='networking'>
          <div className='col-sm-12 col-md-4'>
            <h2>Networking</h2>
            <p>
              We simply love networking! We expect that to rub off on you...
              With Cruftbusters, your networking needs covered from ground to
              cloud and beyond.
            </p>
            <p>
              Security, availability, and maintainability are some of our core
              values. This becomes evident in our networking configurations.
              We offer services in planning, deploying, and maintaining your
              networks.
            </p>
          </div>
          <div className='col-sm-12 col-md-push-1 col-md-7'>
            <SingularRow className='theme-2' noPadding>
              <Tile header='Small Home and Office' />
              <Tile header='VPN' />
              <Tile header='Work From Home' />
              <Tile header='Wireless Engineering' />
              <Tile header='Networking Training' />
              <Tile header='Network Troubleshooting' />
              <Tile header='Endpoint Management' />
              <Tile header='Security' />
            </SingularRow>
          </div>
        </SingularRow>
        <div className='parallax databg halfheight' />
        <SingularRow id='gis' ref='gis'>
          <div className='col-sm-12 col-md-push-8 col-md-4'>
            <h2>Geographic Information Systems</h2>
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
          <div className='col-sm-12 col-md-pull-4 col-md-7'>
            <SingularRow className='theme-3' noPadding>
              <Tile header='ArcGIS Desktop' />
              <Tile header='ArcGIS Server' />
              <Tile header='QGIS' />
              <Tile header='GIS Software Engineering' />
              <Tile header='Custom Integration' />
              <Tile header='GIS Training' />
              <Tile header='Digitization' />
              <Tile header='GNSS/GPS'/>
            </SingularRow>
          </div>
        </SingularRow>
        <div className='parallax powerlinebg halfheight' />
        <SingularRow id='cartography' ref='cartography'>
          <div className='col-sm-12 col-md-4'>
            <h2>Cartography</h2>
            <p>
              We appreciate beautiful maps that emphasize critical detail.
              Cruftbusters can create professional maps to convey your narrative
              in the format you need.
            </p>
          </div>
          <div className='col-sm-12 col-md-push-1 col-md-7'>
            <SingularRow className='theme-4' noPadding>
              <Tile header='Print Maps' />
              <Tile header='Interactive Web Maps' />
              <Tile header='Shapefiles' />
            </SingularRow>
          </div>
        </SingularRow>
        <div className='parallax cartographybg halfheight' />
        <Footer />
      </Fragment>
    )
  }
}


export default withRouter(Home)
