import {
  PRODUCT_SET_DATA,
  PRODUCT_SET_ERROR,
  PRODUCT_UPDATE_IS_LOADING,
  PRODUCT_UPDATE_IS_REFRESHING,
  ProductSetDataAction,
  ProductSetErrorAction,
  ProductUpdateIsLoadingAction,
  ProductUpdateIsRefreshingAction,
} from './actionTypes';
import Product from 'interfaces/Product';

export const setProduct = (data: Product): ProductSetDataAction => {
  return {
    type: PRODUCT_SET_DATA,
    payload: data,
  };
};

export const updateIsLoading = (
  data: boolean,
): ProductUpdateIsLoadingAction => {
  return {
    type: PRODUCT_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): ProductUpdateIsRefreshingAction => {
  return {
    type: PRODUCT_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string): ProductSetErrorAction => {
  return {
    type: PRODUCT_SET_ERROR,
    payload: data,
  };
};
