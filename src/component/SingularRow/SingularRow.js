import React, { Component } from 'react'

const mergeContainerClassName = ({ className, flexStretch, noPadding, halfVerticalPadding }) => ([
  'container-fluid',
  ...className ? [className] : [],
  ...flexStretch ? ['flex-stretch'] : [],
  ...noPadding ? ['no-padding'] : [],
]).join(' ')

const mergeRowClassName = (noPadding, halfVerticalPadding) =>
  noPadding ? 'row no-padding' :
  halfVerticalPadding ? 'row half-vertical-padding' :
  'row'

class SingularRow extends Component {
  render() {
    const { className, children, noPadding, flexStretch, halfVerticalPadding, ...props } = this.props
    return (
      <div {...props} className={mergeContainerClassName({ className, flexStretch, noPadding })}>
        <div className={mergeRowClassName(noPadding, halfVerticalPadding)}>
          {children}
        </div>
      </div>
    )
  }
}

export default SingularRow
