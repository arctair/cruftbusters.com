import React from 'react'
import { FaMedium, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = (props) => (
  <footer {...props}>
    <div>Streamlining storytelling</div>
    <div><Link to='/about'>About Cruftbusters</Link></div>
    <div className='social-media'>
      <a href='https://medium.com/cruftbusters'>
        <FaMedium aria-hidden />
        <span className='sr-only'>Medium, Blog</span>
      </a>
      <a href='https://twitter.com/cruftbusters'>
        <FaTwitter aria-hidden />
        <span className='sr-only'>Twitter, Microblog</span>
      </a>
    </div>
    <div><a href='mailto:info@cruftbusters.com'>info@cruftbusters.com</a></div>
    <div className='copyright'>
      © 2018 Cruftbusters. All Rights Reserved
    </div>
  </footer>
)

export default Footer
