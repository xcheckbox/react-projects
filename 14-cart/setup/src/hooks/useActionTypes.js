

import {
  INCREASE,
  DECREASE,
  REMOVE_ITEM,
  SHOW_ITEMS,
  LOADING
} from '../redux/types';

export const useActionTypes = (dispatch) => {

  const increase = () => {
    dispatch({
      type: INCREASE
    })
  }

  const decrease = () => {
    dispatch({
      type: DECREASE
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

  return  {
    increase,
    decrease,
    removeItem,
    showItems,
    loading
  }
}