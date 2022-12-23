import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from '../routes/routes'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-center'>
        <Link to={'/'}>
          <img className='logo' src={logo} alt='TheCocktailDB' />
        </Link>
        <ul className='nav-links'>
          {
            routes.map(({ to, name, display}) => display && (
              <li key={name}>
                <Link to={to}>{name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
