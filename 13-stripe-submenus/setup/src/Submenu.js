import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { openSubmenu, subMenuPosition } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = subMenuPosition;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom};`
  }, [subMenuPosition])

  return (
    <div className={`submenu ${openSubmenu && 'show'}`} ref={container}>
      Submenu
    </div>
  )
}

export default Submenu
