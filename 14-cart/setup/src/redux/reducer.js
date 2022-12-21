import {
  DECREASE_INCREASE,
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
    case DECREASE_INCREASE:
      const { id, qty } = payload;

      const cart = state.cart.map( item => {
        if (item.id === id){
          return { ...item, amount: Math.max(item.amount + qty, 0) }
        }
        return item;
      }).filter( item => item.amount > 0)

      return { ...state, cart }
    case REMOVE_ITEM:
      const newCart = state.cart.filter( item => item.id !== payload)
      return { ...state, cart: newCart };
    case TOTAL_CART:
      const totalReducer = (acc, curr) => acc + (curr.price * curr.amount);
      const total = state.cart.reduce(totalReducer, 0);
      
      return {...state, total }
   case CLEAR_CART:
    return { ...state, cart: [], total: 0 }
    default:
      return state;
  }
}

export default cartReducer;