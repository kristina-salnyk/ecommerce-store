import {RootState} from '../index';

export const selectOrder = (state: RootState) => state.order.data;

export const selectItems = (state: RootState) => state.order.items;

export const selectIsLoading = (state: RootState) => state.order.isLoading;

export const selectIsRefreshing = (state: RootState) =>
  state.order.isRefreshing;

export const selectError = (state: RootState) => state.order.error;
