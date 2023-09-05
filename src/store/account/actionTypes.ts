export const ACCOUNT_SIGN_UP = 'account/signUp';

export const ACCOUNT_LOGIN = 'account/login';

export const ACCOUNT_LOGOUT = 'account/logout';

export const ACCOUNT_UPDATE_USER = 'account/updateUser';

export const ACCOUNT_UPDATE_TOKEN = 'account/updateToken';

export const ACCOUNT_UPDATE_IS_LOADING = 'account/updateIsLoading';

export const ACCOUNT_UPDATE_IS_REFRESHING = 'account/updateIsRefreshing';

export const ACCOUNT_SET_ERROR = 'account/setError';

export interface AccountSignUpAction {
  type: typeof ACCOUNT_SIGN_UP;
}

export interface AccountLoginAction {
  type: typeof ACCOUNT_LOGIN;
  payload: {token: string; refreshToken: string};
}

export interface AccountLogoutAction {
  type: typeof ACCOUNT_LOGOUT;
}

export interface AccountUpdateUserAction {
  type: typeof ACCOUNT_UPDATE_USER;
  payload: {
    email?: string;
    username?: string;
    phone?: string;
    city?: string;
    street?: string;
    build?: string;
    avatarURI?: string;
  };
}

export interface AccountUpdateTokenAction {
  type: typeof ACCOUNT_UPDATE_TOKEN;
  payload: {token: string; refreshToken: string};
}

export interface AccountUpdateIsLoadingAction {
  type: typeof ACCOUNT_UPDATE_IS_LOADING;
  payload: boolean;
}

export interface AccountUpdateIsRefreshingAction {
  type: typeof ACCOUNT_UPDATE_IS_REFRESHING;
  payload: boolean;
}

export interface AccountSetErrorAction {
  type: typeof ACCOUNT_SET_ERROR;
  payload: string | null;
}

export type AccountAction =
  | AccountSignUpAction
  | AccountLoginAction
  | AccountLogoutAction
  | AccountUpdateUserAction
  | AccountUpdateTokenAction
  | AccountUpdateIsLoadingAction
  | AccountUpdateIsRefreshingAction
  | AccountSetErrorAction;
