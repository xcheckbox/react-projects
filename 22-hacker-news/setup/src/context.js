import React, { useContext, useEffect, useReducer, useState } from 'react'

import {
  setLoading,
  setStories,
  handlePages,
  removeStory,
  handleSearch
} from './actions';
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  loading: false,
  news: [],
  page: 0,
  totalNews: 0,
  search: 'react'
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    setLoading(dispatch, true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setStories(dispatch, data);

    } catch (error) {
      setStories(dispatch, []);
    }
    setLoading(dispatch, false);
  }
  
  useEffect(() => {
    console.log('BUSCAR', {s: state.search, p: state.page})
    fetchData(`${API_ENDPOINT}query=${state.search}&page=${state.page}`)
  }, [state.page, state.search])

  return (
    <AppContext.Provider value={{
      ...state,
      dispatch,
      handlePages,
      removeStory,
      handleSearch
    }}>
      {children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
