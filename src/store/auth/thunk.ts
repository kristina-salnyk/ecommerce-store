import {AppDispatch, AppThunk} from '../index';
import {setLogin, updateIsLoading} from './actionCreators';
import {login, signUp} from '../../services/api/auth';

export const signUpThunk =
  (
    data: {username: string; email: string; password: string},
    onSuccess: () => void,
    onError: (message: string) => void,
  ): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      await signUp({
        email: data.email,
        first_name: data.username,
        password: data.password,
        password_confirmation: data.password,
      });

      onSuccess();
    } catch (error) {
      onError(
        error instanceof Error ? error.message : 'Unknown error ' + error,
      );
    } finally {
      dispatch(updateIsLoading(false));
    }
  };

export const loginThunk =
  (
    data: {email: string; password: string},
    onError: (message: string) => void,
  ): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await login(data.email, data.password);
      const {access_token, refresh_token} = response.data;

      dispatch(setLogin({token: access_token, refreshToken: refresh_token}));
    } catch (error) {
      onError(
        error instanceof Error ? error.message : 'Unknown error ' + error,
      );
    } finally {
      dispatch(updateIsLoading(false));
    }
  };
