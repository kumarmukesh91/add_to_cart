import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.id]: { count: action.payload.count },
      };

    case REMOVE_FROM_CART:
      const newCartItems = { ...state };
      delete newCartItems[action.payload];
      return newCartItems;

    default:
      return state;
  }
}
