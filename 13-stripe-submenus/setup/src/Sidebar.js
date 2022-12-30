import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'


const Sidebar = () => {
  const { openSidebar, toggleSidebar } = useGlobalContext();

  return (
    <div className={`sidebar-wrapper ${openSidebar && 'show'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={() => toggleSidebar(false)}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {
            sublinks.map(({links, page}, idx) => {
              return (
                <article key={idx}>
                  <h4>{page}</h4>
                  <div className='sidebar-sublinks'>
                    {
                      links.map((link, idx) => {
                        const { url, icon, label } = link;
                        return (
                          <a key={idx} href={url}>
                            {icon}
                            {label}
                          </a>
                        )
                      })
                    }
                  </div>
                </article>
            )})
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar
