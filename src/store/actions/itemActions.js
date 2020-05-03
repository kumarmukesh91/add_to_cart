import { LOADING_ITEMS, SET_ITEMS } from '../types';
import axios from 'axios';

// Get all items
export const getItems = () => async (dispatch) => {
  dispatch({ type: LOADING_ITEMS });
  try {
    const { data } = await axios.get('./data/cart.json');

    dispatch({
      type: SET_ITEMS,
      payload: { items: data.items, error: null },
    });
  } catch (error) {
    dispatch({
      type: SET_ITEMS,
      payload: {
        items: [],
        error: error.message,
      },
    });
  }
};
