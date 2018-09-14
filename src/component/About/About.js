import React from 'react'
import { Link } from 'react-router-dom'

import CloseButton from 'component/CloseButton'
import ScreenPage from 'component/ScreenPage'
import Technologies from 'component/Technologies'

const About = ({ history: { goBack }}) => (
  <ScreenPage>
    <div className='col-sm-12 col-md-offset-2 col-md-8 about'>
      <CloseButton goBack={goBack}/>
      <h2>About Cruftbusters</h2>
      <br />
      <p>
        Cruftbusters is a software company dedicated to getting jobs done well
        and making users feel good about it. Our work knows no geographical
        boundaries but we are based in beautifully flat Fargo, North Dakota
        (some prefer the phrase, "topographically challenged").
      </p>
      <p>
        We are professionals with experience in
        software engineering, network engineering, GIS engineering, UI/UX, and
        design. We love our professional craft and we appreciate when our
        clients push us to new levels. If you're interested in getting in touch
        or just want to say hi then please take a few seconds to fill out
        our <Link to='/contact'>contact form</Link>.
      </p>
      <br />
      <h3>Some of our favorites</h3>
      <Technologies />
    </div>
  </ScreenPage>
)

export default About
