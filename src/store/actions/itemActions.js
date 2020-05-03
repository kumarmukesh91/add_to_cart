import { LOADING_ITEMS, SET_ITEMS } from '../types';
import axios from 'axios';

// Get all items
export const getItems = () => async (dispatch) => {
  dispatch({ type: LOADING_ITEMS });
  try {
    const { data } = await axios.get(
      'https://api.npoint.io/0c76acc63b2a5fa2d46b'
    );

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
