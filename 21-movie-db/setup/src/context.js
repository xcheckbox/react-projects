import React, { useState, useContext, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchParam, setSearchParam] = useState('batman');
  const [movies, loading, error, searchMovies] = useFetch();

  useEffect(() => {
    searchMovies(`${API_ENDPOINT}&s=${searchParam}`);
  }, [searchParam])

  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        error,
        searchParam,
        setSearchParam
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
