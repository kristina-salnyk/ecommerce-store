import {RootState} from '../index';

export const selectProduct = (state: RootState) => state.product.data;

export const selectIsLoading = (state: RootState) => state.product.isLoading;

export const selectIsRefreshing = (state: RootState) =>
  state.product.isRefreshing;

export const selectError = (state: RootState) => state.product.error;
