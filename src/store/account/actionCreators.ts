import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  ACCOUNT_SET_ERROR,
  ACCOUNT_SIGN_UP,
  ACCOUNT_UPDATE_IS_LOADING,
  ACCOUNT_UPDATE_IS_REFRESHING,
  ACCOUNT_UPDATE_TOKEN,
  ACCOUNT_UPDATE_USER,
  AccountLoginAction,
  AccountLogoutAction,
  AccountSetErrorAction,
  AccountSignUpAction,
  AccountUpdateIsLoadingAction,
  AccountUpdateIsRefreshingAction,
  AccountUpdateTokenAction,
  AccountUpdateUserAction,
} from './actionTypes';

export const updateSignUp = (data: string): AccountSignUpAction => {
  return {
    type: ACCOUNT_SIGN_UP,
    payload: data,
  };
};

export const updateLogin = (data: {
  token: string;
  refreshToken: string;
}): AccountLoginAction => {
  return {
    type: ACCOUNT_LOGIN,
    payload: data,
  };
};

export const updateLogout = (): AccountLogoutAction => {
  return {
    type: ACCOUNT_LOGOUT,
  };
};

export const updateUser = (data: {
  username?: string;
  email?: string;
}): AccountUpdateUserAction => {
  return {
    type: ACCOUNT_UPDATE_USER,
    payload: data,
  };
};

export const updateToken = (data: {
  token: string;
  refreshToken: string;
}): AccountUpdateTokenAction => {
  return {
    type: ACCOUNT_UPDATE_TOKEN,
    payload: data,
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
