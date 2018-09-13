import React from 'react'

import './Technologies.css'

import angularLogo from './logos/angular.svg'
import reactLogo from './logos/react.svg'
import nodeLogo from './logos/node.svg'
import webpackLogo from './logos/webpack.svg'
import javaLogo from './logos/java.svg'
import scalaLogo from './logos/scala.svg'
import jettyLogo from './logos/jetty.svg'
import rLogo from './logos/r.svg'
import pythonLogo from './logos/python.svg'
import numpyLogo from './logos/numpy.svg'
import scipyLogo from './logos/scipy.svg'
import linuxLogo from './logos/tux.svg'
import bashLogo from './logos/bash.svg'
import gitLogo from './logos/git.svg'
import mikrotikLogo from './logos/mikrotik.svg'
import awsLogo from './logos/aws.svg'
import digitaloceanLogo from './logos/digitalocean.svg'

const injectClassName = props => ({ ...props, className: 'technologies ' + props.className })

const Technologies = props => (
  <div {...injectClassName(props)}>
    <img src={angularLogo} title='Angular' alt='Angular'/>
    <img src={reactLogo} title='React' alt='React'/>
    <img src={nodeLogo} title='NodeJS' alt='NodeJS'/>
    <img src={webpackLogo} title='Webpack' alt='Webpack'/>
    <img src={javaLogo} title='Java' alt='Java'/>
    <img src={scalaLogo} title='Scala' alt='Scala'/>
    <img src={jettyLogo} title='Jetty' alt='Jetty' />
    <img src={rLogo} title='R' alt='R'/>
    <img src={pythonLogo} title='Python' alt='Python'/>
    <img src={numpyLogo} title='NumPy' alt='NumPy'/>
    <img src={scipyLogo} title='SciPy' alt='SciPy'/>
    <img src={linuxLogo} title='GNU/Linux' alt='GNU/Linux'/>
    <img src={bashLogo} title='Bash' alt='Bash'/>
    <img src={gitLogo} title='Git' alt='Git'/>
    <img src={mikrotikLogo} title='Mikrotik' alt='Mikrotik'/>
    <img src={awsLogo} title='Amazon Web Services' alt='Amazon Web Services'/>
    <img src={digitaloceanLogo} title='Digital Ocean' alt='Digital Ocean'/>
  </div>
)

export default Technologies
