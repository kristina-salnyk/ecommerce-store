import {AppDispatch, AppThunk} from '../index';
import {
  setAccount,
  setError,
  updateIsLoading,
  updateIsRefreshing,
} from './actionCreators';
import {getItem, setItem} from '../../services/storage';
import {getAccount, updateAccount} from '../../services/api/account';

export const getAccountThunk =
  (): AppThunk => async (dispatch: AppDispatch) => {
    try {
      dispatch(updateIsLoading(true));

      // TODO: backend doesn't support needed response. Added mocked request
      const response = await getAccount();
      const {username, phone, city, street, build} = response.data;

      const avatarURI = await getItem('avatarURI');

      dispatch(
        setAccount({
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
          error instanceof Error ? error.message : 'Unknown error ' + error,
        ),
      );
    } finally {
      dispatch(updateIsLoading(false));
      dispatch(updateIsRefreshing(false));
    }
  };

export const updateAccountThunk =
  (
    data: {
      username: string;
      phone: string;
      city: string;
      street: string;
      build: string;
      avatarURI: string;
    },
    onSuccess: () => void,
    onError: () => void,
  ): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      // TODO: backend doesn't support needed response. Added mocked request
      const response = await updateAccount({
        username: data.username,
        phone: data.phone,
        city: data.city,
        street: data.street,
        build: data.build,
      });
      const {username, phone, city, street, build} = response.data;

      onSuccess();

      dispatch(
        setAccount({
          username,
          phone,
          city,
          street,
          build,
          avatarURI: data.avatarURI,
        }),
      );

      await setItem('avatarURI', data.avatarURI);
    } catch (error) {
      onError();
    }
  };
