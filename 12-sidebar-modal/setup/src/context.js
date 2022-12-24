import React, { useState, createContext } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleModal = () => {
    setShowModal((prevModal) => !prevModal);
  }

  const toggleSidebar = () => {
    setShowSidebar((prevSidebar) => !prevSidebar);
  }

  return (
    <AppContext.Provider value={{
      showModal,
      showSidebar,
      toggleModal,
      toggleSidebar
    }}>
      { children }
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }