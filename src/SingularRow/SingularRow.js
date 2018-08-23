import React, { Component } from 'react'

class SingularRow extends Component {
  render() {
    const { className, children, ...props } = this.props
    return (
      <div {...props} className={'container-fluid ' + className}>
        <div className='row'>
          {children}
        </div>
      </div>
    )
  }
}

export default SingularRow
