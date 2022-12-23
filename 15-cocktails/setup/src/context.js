import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { useFetch } from './hooks/useFetch'

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [ drinks, loading ] = useFetch(API_URL);
  const [ searchParam, setSearchParam] = useState('');

  return (
    <AppContext.Provider
      value={{
        drinks,
        loading
      }}
    >
      {children}
  </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
