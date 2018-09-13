import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import './Home.css'

import Footer from '../Footer'
import Navigation from '../Navigation'
import SingularRow from '../SingularRow'
import Technologies from '../Technologies'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className='parallax atlasbg fullheight'>
          <Navigation />
          <section>
            <h1>Tell your story</h1>
          </section>
        </div>
        <SingularRow id='software'>
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
          <Technologies className='col-sm-6 vcenter' />
        </SingularRow>
        <div className='parallax appsbg halfheight' />
        <SingularRow id='gis'>
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
        </SingularRow>
        <div className='parallax powerlinebg halfheight' />
        <SingularRow id='cartography'>
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
        </SingularRow>
        <div className='parallax cartographybg halfheight' />
        <Footer />
      </Fragment>
    )
  }
}


export default withRouter(Home)
