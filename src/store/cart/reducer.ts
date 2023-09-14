import {
  CART_RESET_DATA,
  CART_SET_DATA,
  CART_SET_ERROR,
  CART_UPDATE_IS_LOADING,
  CART_UPDATE_IS_REFRESHING,
  CartAction,
} from './actionTypes';
import CartState from 'interfaces/CartState';

const initialState: CartState = {
  data: null,
  items: [],
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: CartState = initialState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    case CART_SET_DATA:
      return {
        ...state,
        data: {...action.payload.data},
        items: [...action.payload.items],
        error: null,
      };
    case CART_RESET_DATA:
      return {
        ...state,
        data: null,
        items: [],
        error: null,
      };
    case CART_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload};
    case CART_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload};
    case CART_SET_ERROR:
      return {
        ...state,
        data: null,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
