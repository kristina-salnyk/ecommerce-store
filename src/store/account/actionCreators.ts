import {
  ACCOUNT_RESET_DATA,
  ACCOUNT_SET_DATA,
  ACCOUNT_SET_ERROR,
  ACCOUNT_UPDATE_IS_LOADING,
  ACCOUNT_UPDATE_IS_REFRESHING,
  AccountResetDataAction,
  AccountSetDataAction,
  AccountSetErrorAction,
  AccountUpdateIsLoadingAction,
  AccountUpdateIsRefreshingAction,
} from './actionTypes';

export const setAccount = (data: {
  email?: string;
  username?: string;
  phone?: string;
  city?: string;
  street?: string;
  build?: string;
  avatarURI?: string;
}): AccountSetDataAction => {
  return {
    type: ACCOUNT_SET_DATA,
    payload: data,
  };
};

export const resetAccount = (): AccountResetDataAction => {
  return {
    type: ACCOUNT_RESET_DATA,
  };
};

export const updateIsLoading = (
  data: boolean,
): AccountUpdateIsLoadingAction => {
  return {
    type: ACCOUNT_UPDATE_IS_LOADING,
    payload: data,
  };
};

export const updateIsRefreshing = (
  data: boolean,
): AccountUpdateIsRefreshingAction => {
  return {
    type: ACCOUNT_UPDATE_IS_REFRESHING,
    payload: data,
  };
};

export const setError = (data: string | null): AccountSetErrorAction => {
  return {
    type: ACCOUNT_SET_ERROR,
    payload: data,
  };
};
