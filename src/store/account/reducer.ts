import {
  ACCOUNT_RESET_DATA,
  ACCOUNT_SET_DATA,
  ACCOUNT_SET_ERROR,
  ACCOUNT_UPDATE_IS_LOADING,
  ACCOUNT_UPDATE_IS_REFRESHING,
  AccountAction,
} from './actionTypes';
import AccountState from '../../interfaces/AccountState';

const initialState: AccountState = {
  data: {
    email: '',
    username: '',
    phone: '',
    city: '',
    street: '',
    build: '',
    avatarURI: '',
  },
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const reducer = (
  state: AccountState = initialState,
  action: AccountAction,
): AccountState => {
  switch (action.type) {
    case ACCOUNT_SET_DATA:
      return {
        data: {...state.data, ...action.payload},
        isLoading: false,
        isRefreshing: false,
        error: null,
      };
    case ACCOUNT_RESET_DATA:
      return {
        ...initialState,
      };
    case ACCOUNT_UPDATE_IS_LOADING:
      return {...state, isLoading: action.payload, error: null};
    case ACCOUNT_UPDATE_IS_REFRESHING:
      return {...state, isRefreshing: action.payload, error: null};
    case ACCOUNT_SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isRefreshing: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
