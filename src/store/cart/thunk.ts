import {AppDispatch, AppThunk, RootState} from '../index';
import {getCart} from '../../services/api/cart';
import {setCart, setError, updateIsLoading} from './actionCreators';
import {authMiddleware} from '../middlewares/authMiddleware';

export const getCartThunk =
  (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await authMiddleware(getCart, dispatch, getState);
      const {data, included: items = []} = response.data;

      dispatch(setCart({data, items}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };
