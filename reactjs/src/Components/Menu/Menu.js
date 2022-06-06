import React from 'react'
import  '../Menu/Menu.css'
import  { AiOutlineHome } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import  { BiBook } from 'react-icons/bi'
import  { VscProject } from 'react-icons/vsc'
import { AiOutlineMessage } from 'react-icons/ai'

export const Menu = () => {
  return (
    <div>
      <a href='#'><AiOutlineHome/></a>
      <a href='#About'><FiUser/></a>
      <a href='#Experience'><BiBook/></a>
      <a href='#Projects'><VscProject/></a>
      <a href='#Contacts'><AiOutlineMessage/></a>
     
    </div>
  )
}

export default Menu