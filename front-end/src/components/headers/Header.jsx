import React, { useState } from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'
import { CgShoppingBag } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'


const Header = () => {

  const [ShowMenu, setShowMenu] = useState(true)
  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu)

  }

  return (
    <div className="container">
      <div className="logo">
        <img src={LOGO} alt="" />

        <span>Amazon</span>
      </div>

      <div className="ryt">

        <div className="bars" onClick={toggleMenu} >
          <FaBars />
        </div>

          <ul className='menu'style={{display: ShowMenu ? 'inherit' : 'none'}}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>

        <input type="text" name="" id="" className="search" placeholder='search' />
        <CgShoppingBag className="" />

      </div>
    </div>
  )
}

export default Header