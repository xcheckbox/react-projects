import React, { useState, useContext, useReducer, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import reducer from '../redux/reducer'
import cartItems from '../data';
import { useActionTypes } from '../hooks/useActionTypes';

const API_URL = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  loading: false,
  total: 0,
  totalItems: 0
}

const AppProvider = ({ children }) => {
  const [ cartState, dispatch ] = useReducer(reducer, initialState);
  
  const {
    decrease,
    increase,
    removeItem,
    showItems,
    loading,
  } = useActionTypes(dispatch);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    loading(true)

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      showItems(data);

    } catch (error) {
      showItems(initialState.cart);
    }
    loading(false);
  }

  return (
    <AppContext.Provider
      value={{
        ...cartState,
        decrease,
        increase,
        removeItem
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
