import React from 'react'
import { Link } from 'react-router-dom'

const Tile = ({ header, router }) => (
  <Link
    className='col-xs-12 col-sm-6 col-md-4 tile'
    to={`/contact?subject=${header}`}
  >
    <div className='tile-content'>
      <h3>{header}</h3>
    </div>
  </Link>
)

export default Tile
