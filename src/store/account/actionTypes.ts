export const ACCOUNT_SET_DATA = 'account/setData';

export const ACCOUNT_RESET_DATA = 'account/resetData';

export const ACCOUNT_UPDATE_TOKEN = 'account/updateToken';

export const ACCOUNT_UPDATE_IS_LOADING = 'account/updateIsLoading';

export const ACCOUNT_UPDATE_IS_REFRESHING = 'account/updateIsRefreshing';

export const ACCOUNT_SET_ERROR = 'account/setError';

export interface AccountSetDataAction {
  type: typeof ACCOUNT_SET_DATA;
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

export interface AccountResetDataAction {
  type: typeof ACCOUNT_RESET_DATA;
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
  | AccountSetDataAction
  | AccountResetDataAction
  | AccountUpdateTokenAction
  | AccountUpdateIsLoadingAction
  | AccountUpdateIsRefreshingAction
  | AccountSetErrorAction;
