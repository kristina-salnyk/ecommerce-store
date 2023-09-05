import {AppDispatch, AppThunk} from '../index';
import {
  setError,
  updateIsLoading,
  updateLogin,
  updateSignUp,
  updateUser,
} from './actionCreators';
import {getUser, login, setUser, signUp} from '../../services/api/account';
import {getItem, setItem} from '../../services/storage';

export const signUpThunk =
  (
    data: {username: string; email: string; password: string},
    onSuccess: () => void,
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

      dispatch(updateSignUp());
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
      const {access_token, refresh_token} = response.data;

      dispatch(updateLogin({token: access_token, refreshToken: refresh_token}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };

export const getUserThunk = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(updateIsLoading(true));

    // TODO: backend doesn't support needed response. Added mocked request
    const response = await getUser();
    const {
      firstname: username,
      phone,
      city,
      address1: street,
      address2: build,
    } = response.data;

    const avatarURI = await getItem('avatarURI');

    dispatch(
      updateUser({
        username,
        phone,
        city,
        street,
        build,
        avatarURI,
      }),
    );
  } catch (error) {
    dispatch(
      setError(
        error instanceof Error ? error.message : 'Unknown error' + error,
      ),
    );
  }
};

export const setUserThunk =
  (data: {
    firstname: string;
    phone: string;
    city: string;
    address1: string;
    address2: string;
    avatarURI: string;
  }): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      // TODO: backend doesn't support needed response. Added mocked request
      await setUser(data);

      await setItem('avatarURI', data.avatarURI);

      dispatch(updateIsLoading(false));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };
