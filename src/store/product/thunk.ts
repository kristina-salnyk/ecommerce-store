import {AppDispatch, AppThunk, RootState} from '../index';
import {
  setError,
  setProduct,
  updateIsLoading,
  updateIsRefreshing,
} from './actionCreators';
import {getProduct} from '../../services/api/products';
import {authMiddleware} from '../middlewares/authMiddleware';

export const getProductThunk =
  (slug: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch(updateIsLoading(true));

      const response = await authMiddleware(
        () => getProduct(slug),
        dispatch,
        getState,
      );
      const {data: item} = response.data;

      dispatch(setProduct(item));
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
