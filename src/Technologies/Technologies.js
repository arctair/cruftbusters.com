import React from 'react'

import './Technologies.css'

import angularLogo from '../img/technologyLogos/angular.svg'
import reactLogo from '../img/technologyLogos/react.svg'
import nodeLogo from '../img/technologyLogos/node.svg'
import webpackLogo from '../img/technologyLogos/webpack.svg'
import javaLogo from '../img/technologyLogos/java.svg'
import scalaLogo from '../img/technologyLogos/scala.svg'
import jettyLogo from '../img/technologyLogos/jetty.svg'
import rLogo from '../img/technologyLogos/r.svg'
import pythonLogo from '../img/technologyLogos/python.svg'
import numpyLogo from '../img/technologyLogos/numpy.svg'
import scipyLogo from '../img/technologyLogos/scipy.svg'
import linuxLogo from '../img/technologyLogos/tux.svg'
import bashLogo from '../img/technologyLogos/bash.svg'
import gitLogo from '../img/technologyLogos/git.svg'
import mikrotikLogo from '../img/technologyLogos/mikrotik.svg'
import awsLogo from '../img/technologyLogos/aws.svg'
import digitaloceanLogo from '../img/technologyLogos/digitalocean.svg'

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
