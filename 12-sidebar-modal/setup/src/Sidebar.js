import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const { showSidebar, toggleSidebar } = useContext(AppContext);

  return (
    <div className={`sidebar ${showSidebar && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='Coding Addict'/>
        <button className='close-btn' onClick={() => toggleSidebar()}>
          <FaTimes />
        </button>
      </div>
      <div className='links'>
        { 
          links.map(link => {
          const { text, icon, id, url } = link;

          return (<a key={id} href={url}>{icon} {text}</a>)
        })}
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

export default Sidebar
