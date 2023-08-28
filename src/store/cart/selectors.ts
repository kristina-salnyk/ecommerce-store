import {RootState} from '../index';

export const selectCart = (state: RootState) => state.cart.data;

export const selectItems = (state: RootState) => state.cart.items;

export const selectIsLoading = (state: RootState) => state.cart.isLoading;

export const selectIsRefreshing = (state: RootState) => state.cart.isRefreshing;

export const selectError = (state: RootState) => state.cart.error;
