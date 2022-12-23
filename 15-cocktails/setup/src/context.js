import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { useFetch } from './hooks/useFetch'

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [ searchParam, setSearchParam] = useState('');
  const [ drinks, loading, searchDrinks ] = useFetch();

  const memoizedSearchDrinks = useCallback(
    (url) => {
      searchDrinks(url)
    },
    // eslint-disable-next-line
    [searchParam],
  );

  useEffect(() => {
    memoizedSearchDrinks(`${API_URL}${searchParam}`)
  }, [searchParam, memoizedSearchDrinks])

  return (
    <AppContext.Provider
      value={{
        drinks,
        loading,
        setSearchParam
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
