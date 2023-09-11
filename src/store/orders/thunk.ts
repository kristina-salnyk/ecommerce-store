import {AppDispatch, AppThunk, RootState} from '../index';
import {
  setError,
  setOrders,
  updateIsLoading,
  updateIsRefreshing,
} from './actionCreators';
import {authMiddleware} from '../middlewares/authMiddleware';
import {getOrderList} from '../../services/api/orders';

export const getOrdersThunk =
  (): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await authMiddleware(getOrderList, dispatch, getState);
      const {data: items} = response.data;

      dispatch(setOrders({items}));
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
