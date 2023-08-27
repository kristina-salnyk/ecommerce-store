import {
  PRODUCT_SET_ERROR,
  PRODUCT_SET_ITEM,
  PRODUCT_UPDATE_IS_LOADING,
  PRODUCT_UPDATE_IS_REFRESHING,
  PRODUCT_UPDATE_ITEM,
  ProductAction,
} from './actionTypes';
import ProductState from '../../interfaces/ProductState';

const initialState: ProductState = {
  item: null,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: ProductState = initialState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case PRODUCT_SET_ITEM:
      return {
        ...state,
        item: {...action.payload},
        isLoading: false,
        isRefreshing: false,
        error: null,
      };
    case PRODUCT_UPDATE_ITEM:
      return {
        ...state,
        item: {...state.item, ...action.payload},
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
