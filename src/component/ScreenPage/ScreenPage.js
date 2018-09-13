import React from 'react'

import Footer from 'component/Footer'
import Navigation from 'component/Navigation'
import SingularRow from 'component/SingularRow'

const ScreenPage = ({ children }) => (
  <div className='fullheight atlasbg container-flex'>
    <Navigation />
    <SingularRow flexStretch>
      {children}
    </SingularRow>
    <Footer />
  </div>
)

export default ScreenPage
