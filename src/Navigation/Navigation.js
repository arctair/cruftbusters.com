import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => (
  <Fragment>
    <div className='logo'>
      <div>
        <div><Link to='/'>Recolada&nbsp;Group</Link></div>
      </div>
    </div>
    <header>
      <nav>
        <ul>
          <li><Link to='#software'>Software</Link></li>
          <li><Link to='#gis'>GIS</Link></li>
          <li><Link to='#cartography'>Cartography</Link></li>
        </ul>
      </nav>
    </header>
  </Fragment>
)

export default Navigation
