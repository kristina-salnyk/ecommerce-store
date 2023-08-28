import {
  PRODUCT_SET_DATA,
  PRODUCT_SET_ERROR,
  PRODUCT_UPDATE_IS_LOADING,
  PRODUCT_UPDATE_IS_REFRESHING,
  ProductAction,
} from './actionTypes';
import ProductState from '../../interfaces/ProductState';

const initialState: ProductState = {
  data: null,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: ProductState = initialState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case PRODUCT_SET_DATA:
      return {
        data: {...action.payload},
        isLoading: false,
        isRefreshing: false,
        error: null,
      };
    case PRODUCT_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload, error: null};
    case PRODUCT_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload, error: null};
    case PRODUCT_SET_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
