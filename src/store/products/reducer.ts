import {
  PRODUCTS_SET_LIST,
  PRODUCTS_UPDATE_IS_LOADING,
  PRODUCTS_UPDATE_IS_LOADING_MORE,
  PRODUCTS_UPDATE_IS_REFRESHING,
  PRODUCTS_UPDATE_LIST,
  ProductsAction,
} from './actionTypes';
import ProductsState from '../../interfaces/ProductsState';

const initialState: ProductsState = {
  items: [],
  totalPages: 0,
  isLoading: false,
  isLoadingMore: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: ProductsState = initialState,
  action: ProductsAction,
): ProductsState => {
  switch (action.type) {
    case PRODUCTS_SET_LIST:
      const {items, totalPages} = action.payload;
      return {
        ...state,
        items: [...items],
        totalPages,
        isLoading: false,
        isRefreshing: false,
        error: null,
      };
    case PRODUCTS_UPDATE_LIST:
      return {
        ...state,
        items: [...state.items, ...action.payload],
        isLoadingMore: false,
        error: null,
      };
    case PRODUCTS_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload};
    case PRODUCTS_UPDATE_IS_LOADING_MORE:
      return {...state, isLoadingMore: action.payload};
    case PRODUCTS_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload};
    default:
      return state;
  }
};

export default reducer;
