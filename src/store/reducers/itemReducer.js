import { LOADING_ITEMS, SET_ITEMS, APPLY_FILTER } from '../types';

const initialState = {
  items: [],
  loading: false,
  errors: null,
  filters: {
    sortBy: null,
    priceRange: [100, 100000],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_ITEMS:
      return {
        ...state,
        loading: true,
        errors: null,
      };

    case SET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
        loading: true,
        errors: action.payload.errors || null,
      };

    case APPLY_FILTER:
      const filters = {
        ...state.filters,
        ...action.payload,
      };

      return {
        ...state,
        filters,
      };

    default:
      return state;
  }
}
