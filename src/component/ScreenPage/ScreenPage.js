import React, { Fragment } from 'react'

import CloseButton from 'component/CloseButton'
import Footer from 'component/Footer'
import Navigation from 'component/Navigation'

const ScreenPage = ({ className, children, goBack }) => (
  <Fragment>
    <div className='atlasbg parallax fixed' />
    <div className='container-flex'>
      <Navigation />
      <div className={`container-fluid${className ? ' ' + className : ''}`}>
        <div className='screen-modal-parent row'>
          <div className='screen-modal col-sm-12 col-md-push-2 col-md-8 col-lg-push-3 col-lg-6'>
            {goBack && <CloseButton goBack={goBack}/>}
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Fragment>
)

export default ScreenPage
