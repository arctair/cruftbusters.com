import React from 'react'

import './Footer.css'

const Footer = (props) => (
  <footer {...props}>
    <div>Streamlining storytelling</div>
    <div><a href='mailto:info@cruftbusters.com'>info@cruftbusters.com</a></div>
    <div className='copyright'>
      © 2018 Cruftbusters. All Rights Reserved
    </div>
  </footer>
)

export default Footer
