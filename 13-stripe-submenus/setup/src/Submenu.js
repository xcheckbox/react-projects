import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { openSubmenu, submenuPosition, submenuOptions: {page, links} } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = submenuPosition;

    setColumns('col-2');
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom};`;

    if(links.length === 3) setColumns('col-3');
    if(links.length > 3) setColumns('col-4');

  }, [submenuPosition, page, links])

  useEffect(() => {
    console.log(openSubmenu)

  }, [openSubmenu])
  return (
    <div className={`${openSubmenu ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <h4>{ page }</h4>
        <div className={`submenu-center ${columns}`}>
          {
            links.map((link, idx) => {
              const { url, icon, label } = link;
              return (
                <a key={idx} href={url}>
                  { icon }
                  { label }
                </a>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Submenu
