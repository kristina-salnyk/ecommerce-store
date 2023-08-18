import {RootState} from '../index';

export const selectItems = (state: RootState) => state.products.items;

export const selectTotalPages = (state: RootState) => state.products.totalPages;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

export const selectIsLoadingMore = (state: RootState) =>
  state.products.isLoadingMore;

export const selectIsRefreshing = (state: RootState) =>
  state.products.isRefreshing;

export const selectError = (state: RootState) => state.products.error;
