import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = (props) => (
  <footer {...props}>
    <div>Streamlining storytelling</div>
    <div><Link to='/about'>About Cruftbusters</Link></div>
    <div><a href='mailto:info@cruftbusters.com'>info@cruftbusters.com</a></div>
    <div className='copyright'>
      © 2018 Cruftbusters. All Rights Reserved
    </div>
  </footer>
)

export default Footer
