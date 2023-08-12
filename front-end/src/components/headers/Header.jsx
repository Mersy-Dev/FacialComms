import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={LOGO} alt="" />

        <span>Amazon</span>
      </div>

      <div className="right">
        <div className="menu">
          <ul className='menu'>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>

        </div>

        <input type="text" name="" id="" className="search"  placeholder='search'/>
        <CgShoppingBag className="" />

      </div>
    </div>
  )
}

export default Header