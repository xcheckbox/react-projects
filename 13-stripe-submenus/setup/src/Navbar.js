import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { toggleSidebar, handleOpenSubmenu, handleCloseSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const text = e.target.textContent.toLowerCase();
    const optionBtn = e.target.getBoundingClientRect();

    const center = (optionBtn.left + optionBtn.right) / 2;
    const bottom = optionBtn.bottom - 3;

    console.log('OPENs', text)
    handleOpenSubmenu(text, { center, bottom });
  }

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')){
      handleCloseSubmenu()
    }
  }

  return (
    <div className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='stripe logo' />
          <button className='btn toggle-btn' onClick={() => toggleSidebar()}>
            <FaBars />
          </button>
        </div>

        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>Products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>Developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>Company</button>
          </li>
        </ul>
        
        <button type='button' className='btn signin-btn'>Sign In</button>
        
      </div>
    </div>
  )
}

export default Navbar
