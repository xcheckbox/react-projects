import {
  INCREASE,
  DECREASE,
  TOTAL_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  LOADING,
  SHOW_ITEMS
} from './types';

const cartReducer = (state, { type, payload }) => {

  switch (type) {
    case LOADING:
      return { ...state, loading: payload }
    case SHOW_ITEMS:
      return { ...state, cart: payload, loading: false }
    case INCREASE:
      console.log('INCREASE', state)
      return state;
      break;
    case DECREASE:
      console.log('DECREASE')
      return state;
      break;
    case REMOVE_ITEM:
      console.log('REmoving', payload)
      return state;
      break;
   
    default:
      return state;
  }
}

export default cartReducer;