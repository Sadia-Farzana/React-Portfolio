import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/Home/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
      <h5>Heloo Im h5</h5>
      <h1>heloo 1</h1>
      <h5 className='text-light'>Full stack</h5>
      <CTA></CTA>
      <HeaderSocial></HeaderSocial>
      <div className='me'>
        <img src={ME} alt='me'/>
      </div>
     <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
    </header> 

   
  )
}

export default Header