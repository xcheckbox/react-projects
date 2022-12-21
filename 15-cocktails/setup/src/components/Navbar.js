import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-center'>
        <img className='logo' src={logo} alt='TheCocktailDB' />
        <ul className='nav-links'>
          <li><a>Home</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
