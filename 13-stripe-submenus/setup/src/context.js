import React, { useState, useContext, createContext } from 'react'
import sublinks from './data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [subMenuPosition, setSubmenuPosition] = useState({});

  const toggleSidebar = (isOpen = true) => {
    setOpenSidebar(isOpen)
  }

  const handleOpenSubmenu = (option, position) => {
    setSubmenuPosition(position)
    setOpenSubmenu(true);
  }

  return (
    <AppContext.Provider value={{
      sublinks,
      openSidebar,
      openSubmenu,
      toggleSidebar,
      handleOpenSubmenu,
      subMenuPosition
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider}
