import React, { Component } from 'react'

const mergeContainerClassName = (className, noPadding) => {
  const base = noPadding ? 'container-fluid no-padding' : 'container-fluid'
  return className ? `${base} ${className}` : base
}

const mergeRowClassName = noPadding => noPadding ? 'row no-padding' : 'row'

class SingularRow extends Component {
  render() {
    const { className, children, noPadding, ...props } = this.props
    return (
      <div {...props} className={mergeContainerClassName(className, noPadding)}>
        <div className={mergeRowClassName(noPadding)}>
          {children}
        </div>
      </div>
    )
  }
}

export default SingularRow
