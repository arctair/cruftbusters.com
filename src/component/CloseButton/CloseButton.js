import React from 'react'

const CloseButton = ({ goBack }) => (
  <button className='close-button' onClick={goBack}>
    &times;
  </button>
)

export default CloseButton
