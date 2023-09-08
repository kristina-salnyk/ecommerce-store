import {AppDispatch, AppThunk, RootState} from '../index';
import {
  setError,
  setOrder,
  updateIsLoading,
  updateIsRefreshing,
} from './actionCreators';
import {authMiddleware} from '../middlewares/authMiddleware';
import {getOrder} from '../../services/api/orders';
import Purchase from '../../interfaces/Purchase';

export const getOrderThunk =
  (orderNumber: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await authMiddleware(
        () => getOrder(orderNumber),
        dispatch,
        getState,
      );
      const {data, included: items = []} = response.data;
      items.forEach(
        (item: Purchase) => (item.attributes.options_text = 'Color: black'),
      );

      dispatch(setOrder({data, items}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    } finally {
      dispatch(updateIsLoading(false));
      dispatch(updateIsRefreshing(false));
    }
  };
