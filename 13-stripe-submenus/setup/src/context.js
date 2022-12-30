import React, { useState, useContext, createContext } from 'react'
import sublinks from './data';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = (isOpen = true) => {
    setOpenSidebar(isOpen)
  }

  return (
    <AppContext.Provider value={{
      sublinks,
      openSidebar,
      toggleSidebar
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider}
