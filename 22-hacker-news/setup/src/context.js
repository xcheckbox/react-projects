import React, { useContext, useEffect, useReducer, useState } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  setLoading,
  setStories
} from './actions';
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  loading: false,
  news: [],
  page: 0,
  totalNews: 0
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [ querySearch, setQuerySearch ] = useState('React')
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
    fetchData(API_ENDPOINT)
  }, [])

  return (
    <AppContext.Provider value={{
      ...state,
    }}>
      {children}
    </AppContext.Provider>)
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
