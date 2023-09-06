import {RootState} from '../index';

export const selectToken = (state: RootState) => state.auth.token;

export const selectIsLoading = (state: RootState) => state.auth.isLoading;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectError = (state: RootState) => state.auth.error;
