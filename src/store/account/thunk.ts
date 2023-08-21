import {AppDispatch, AppThunk} from '../index';
import {
  setError,
  updateIsLoading,
  updateLogin,
  updateSignUp,
} from './actionCreators';
import {login, signUp} from '../../api/account';

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
  (data: {email: string; password: string}): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await login(data.email, data.password);
      const {access_token: token} = response.data;

      dispatch(updateLogin(token));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };
