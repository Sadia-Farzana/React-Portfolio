import React from 'react'
import CV from '../../assests/Home/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#Contact' className='btn'>Contact Me</a>
    </div>
  )
}

export default CTA