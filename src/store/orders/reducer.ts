import {
  ORDERS_RESET_ITEMS,
  ORDERS_SET_ERROR,
  ORDERS_SET_ITEMS,
  ORDERS_UPDATE_IS_LOADING,
  ORDERS_UPDATE_IS_REFRESHING,
  OrdersAction,
} from './actionTypes';
import OrdersState from 'interfaces/OrdersState';

const initialState: OrdersState = {
  items: [],
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: OrdersState = initialState,
  action: OrdersAction,
): OrdersState => {
  switch (action.type) {
    case ORDERS_SET_ITEMS:
      return {
        ...state,
        items: [...action.payload.items],
        error: null,
      };
    case ORDERS_RESET_ITEMS:
      return {
        ...state,
        items: [],
        error: null,
      };
    case ORDERS_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ORDERS_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload};
    case ORDERS_SET_ERROR:
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
