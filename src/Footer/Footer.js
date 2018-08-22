import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

import './Footer.css'

const Footer = (props) => (
  <footer {...props}>
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
)

export default Footer
