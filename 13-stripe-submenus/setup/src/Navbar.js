import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe logo' />
        </div>

    
          <ul className='nav-links'>
            <li><button className='link-btn'>Products</button></li>
            <li><button className='link-btn'>Developers</button></li>
            <li><button className='link-btn'>Company</button></li>
          </ul>
        

        <button type='button' className='btn signin-btn'>Sign In</button>
        
      </div>
    </div>
  )
}

export default Navbar
