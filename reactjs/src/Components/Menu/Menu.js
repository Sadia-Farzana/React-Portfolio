import React from 'react'
import '../Menu/Menu.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { BiBook } from 'react-icons/bi'
import { VscProject } from 'react-icons/vsc'
import { AiOutlineMessage } from 'react-icons/ai'
import { useState } from 'react'

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('#')

  return (
    <menu>
      <a href='#' onClick={() => setActiveMenu('#')} className={activeMenu === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#About' onClick={() => setActiveMenu('#About')} className={activeMenu === '#About' ? 'active' : ''}><FiUser /></a>
      <a href='#Experience' onClick={() => setActiveMenu('#Experience')} className={activeMenu === '#Experience' ? 'active' : ''}><BiBook /></a>
      <a href='#Services' onClick={() => setActiveMenu('#Services')} className={activeMenu === '#Services' ? 'active' : ''}><VscProject /></a>
      <a href='#Contacts' onClick={() => setActiveMenu('#Contacts')} className={activeMenu === '#Contacts' ? 'active' : ''}><AiOutlineMessage /></a>

    </menu>
  )
}

export default Menu