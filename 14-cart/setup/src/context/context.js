import React, { useContext, useReducer, useEffect } from 'react'
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
    decreaseIncrease,
    removeItem,
    showItems,
    loading,
    clearCart,
    totalCart
  } = useActionTypes(dispatch);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []); 

  useEffect(() => {
    totalCart();
    // eslint-disable-next-line
  }, [cartState.cart]) 


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
        decreaseIncrease,
        removeItem,
        clearCart
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
