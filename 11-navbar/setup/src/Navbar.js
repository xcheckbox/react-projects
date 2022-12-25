import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  const linksContainer = useRef(null);
  const linksList = useRef(null);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  useEffect(() => {
    if(showNavbar) {
      linksContainer.current.style.height = '250px';
    } else {
      linksContainer.current.style.height = '0px';
    }
  }, [showNavbar])

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img className='logo' src={logo} alt='Coding Addict' />
        <button className='nav-toggle' onClick={() => toggleNavbar()}>
          <FaBars />
        </button>
      </div>

      <div className='links-container' ref={linksContainer}>
        <ul className='links' ref={linksList}>
          {
            links.map( ({url, text, id}) => (
              <li key={id}><a href={url}>{text}</a></li>
            ))
          }
        </ul>
      </div>

      <div className='social-icons'>
        {
          social.map(({id, url, icon}) => (
            <a key={id} href={url}>{icon}</a>
          ))
        }
      </div>
    </div>

  )
}

export default Navbar
