import OrderState from '../../interfaces/OrderState';
import {
  ORDER_RESET_DATA,
  ORDER_SET_DATA,
  ORDER_SET_ERROR,
  ORDER_UPDATE_IS_LOADING,
  ORDER_UPDATE_IS_REFRESHING,
  OrderAction,
} from './actionTypes';

const initialState: OrderState = {
  data: null,
  items: [],
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: OrderState = initialState,
  action: OrderAction,
): OrderState => {
  switch (action.type) {
    case ORDER_SET_DATA:
      return {
        ...state,
        data: {...action.payload.data},
        items: [...action.payload.items],
        error: null,
      };
    case ORDER_RESET_DATA:
      return {
        ...state,
        data: null,
        items: [],
        error: null,
      };
    case ORDER_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ORDER_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload};
    case ORDER_SET_ERROR:
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
