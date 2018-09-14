import React from 'react'
import { FaWindowClose } from 'react-icons/fa'

const CloseButton = ({ goBack }) => (
  <button className='close-button' onClick={goBack}>
    &times;
  </button>
)

export default CloseButton
