import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'
import './App.css'

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
          <div className='col-sm-6' />
          <div className='col-sm-6'>
            <h2>GIS</h2>
            <p>
              Cruftbusters strives to aid spatial awareness and understanding
              through the power of modern GIS. If your application, pipeline, or
              idea has a spatial component, we want to be involved in helping
              it reach its full potential.
            </p>
            <p>
              Morbi sollicitudin eros nec eros auctor, vitae imperdiet nisl bibendum. Proin in nunc nibh. Maecenas venenatis lobortis dictum. Donec nec semper massa. Etiam tincidunt sodales neque ut pulvinar. Sed pharetra ante sed vestibulum posuere. Pellentesque mollis neque viverra mauris efficitur, a consectetur purus porttitor. Aenean convallis odio sed est pharetra, dignissim congue turpis pharetra. Nullam a posuere neque, a facilisis mauris. Sed eget rhoncus velit. Pellentesque vel ante sit amet ipsum blandit scelerisque quis vel ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Morbi gravida quam ac tellus venenatis tempor. Vestibulum eget felis risus. In hac habitasse platea dictumst.
            </p>
          </div>
        </div>
        <div className='parallax cartographybg halfheight'>
        </div>
        <div className='row' ref={ref => this.cartography = ref}>
          <div className='col-sm-12'>
            <h2>Custom Cartography</h2>
            <p>
              Pellentesque id purus magna. Nunc risus lorem, convallis quis risus vel, malesuada tincidunt massa. Morbi augue urna, interdum vel arcu eu, feugiat rutrum nulla. Aenean et ex a nisl sodales ultricies. Nam vestibulum porta nisl. Nullam id purus vitae magna pulvinar varius consequat non nunc. Vestibulum eget rutrum erat. Vivamus vel dui facilisis, sodales erat vel, rutrum neque. Proin risus velit, dignissim ut ullamcorper eu, consectetur ac odio. Vestibulum pulvinar sem non urna fermentum malesuada. Etiam pulvinar, quam auctor sollicitudin maximus, massa quam pharetra dolor, eget varius ipsum ligula non ipsum. Vestibulum sed diam sit amet tellus faucibus sollicitudin. Praesent laoreet nisi nunc. Cras posuere ornare lorem, sit amet lobortis nunc congue sit amet. Ut nec lorem vitae libero venenatis facilisis. Aliquam erat volutpat.
            </p>
          </div>
        </div>
        <div className='parallax cartographybg halfheight'>
        </div>
        <footer>
          <div>Streamlining storytelling</div>
          <div>Contact Us</div>
          <div>[=] [=] [=] [=]</div>
          <div className='copyright'>
            © 2018 Cruftbusters. All Rights Reserved
          </div>
        </footer>
      </div>
    )
  }
}

export default withRouter(App)
