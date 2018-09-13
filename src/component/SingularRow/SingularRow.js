import React, { Component } from 'react'

const mergeContainerClassName = ({ className, flexStretch, noPadding }) => ([
  'container-fluid',
  ...className ? [className] : [],
  ...flexStretch ? ['flex-stretch'] : [],
  ...noPadding ? ['no-padding'] : [],
]).join(' ')

const mergeRowClassName = noPadding => noPadding ? 'row no-padding' : 'row'

class SingularRow extends Component {
  render() {
    const { className, children, noPadding, flexStretch, ...props } = this.props
    return (
      <div {...props} className={mergeContainerClassName({ className, flexStretch, noPadding })}>
        <div className={mergeRowClassName(noPadding)}>
          {children}
        </div>
      </div>
    )
  }
}

export default SingularRow
