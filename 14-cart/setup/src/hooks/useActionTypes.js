import {
  DECREASE_INCREASE,
  REMOVE_ITEM,
  SHOW_ITEMS,
  LOADING,
  CLEAR_CART,
  TOTAL_CART,
} from '../redux/types';

export const useActionTypes = (dispatch) => {

  const decreaseIncrease = (payload) => {
    dispatch({
      type: DECREASE_INCREASE,
      payload
    })
  }

  const removeItem = (payload) => {
    dispatch({
      type: REMOVE_ITEM,
      payload
    })
  }

  const showItems = (payload) => {
    dispatch({
      type: SHOW_ITEMS,
      payload
    })
  }

  const loading = (payload) => {
    dispatch({
      type: LOADING,
      payload
    })
  }

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART
    })
  }

  const totalCart = () => {
    dispatch({
      type: TOTAL_CART
    })
  }

  return  {
    decreaseIncrease,
    removeItem,
    showItems,
    loading,
    clearCart,
    totalCart
  }
}