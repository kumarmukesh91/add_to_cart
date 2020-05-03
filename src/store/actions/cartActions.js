import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

export const addToCart = (itemId, count) => ({
  type: ADD_TO_CART,
  payload: {
    id: itemId,
    count,
  },
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});
