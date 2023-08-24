import {AppDispatch, AppThunk, AppThunkDispatch} from '../index';
import {
  setError,
  updateIsLoading,
  updateLogin,
  updateSignUp,
  updateUser,
} from './actionCreators';
import {current, login, signUp} from '../../services/api/account';

export const signUpThunk =
  (data: {username: string; email: string; password: string}): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await signUp({
        email: data.email,
        first_name: data.username,
        password: data.password,
        password_confirmation: data.password,
      });
      const {
        data: {
          attributes: {email},
        },
      } = response.data;

      dispatch(updateSignUp(email));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

export const loginThunk =
  (
    data: {email: string; password: string},
    thunkDispatch: AppThunkDispatch,
  ): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await login(data.email, data.password);
      const {access_token: token} = response.data;

      thunkDispatch(currentThunk(token));

      dispatch(updateLogin(token));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

export const currentThunk =
  (data: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await current(data);
      const {
        data: {
          attributes: {email, first_name: username = 'Default'},
        },
      } = response.data;

      dispatch(updateUser({email, username}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };
