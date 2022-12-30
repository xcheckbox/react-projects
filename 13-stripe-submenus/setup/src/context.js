import React, { useState, useContext, createContext } from 'react'
import sublinks from './data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({});
  const [submenuOptions, setSubmenuOptions] = useState({page: '', links: []})

  const toggleSidebar = (isOpen = true) => {
    setOpenSidebar(isOpen)
  }

  const handleOpenSubmenu = (option, position) => {
    const submenu = sublinks.find(link => link.page === option);
    setSubmenuOptions(submenu);
    setSubmenuPosition(position)
    setOpenSubmenu(true);
  }

  const handleCloseSubmenu = () => {
    setOpenSubmenu(false);
  }

  return (
    <AppContext.Provider value={{
      sublinks,
      openSidebar,
      openSubmenu,
      toggleSidebar,
      handleOpenSubmenu,
      handleCloseSubmenu,
      submenuPosition,
      submenuOptions
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider}
