import {AppDispatch, AppThunk} from '../index';
import {
  setError,
  setProducts,
  updateIsLoading,
  updateIsLoadingMore,
  updateProducts,
} from './actionCreators';
import {getProductsList} from '../../api/products';

export const getProductsThunk =
  (page: number): AppThunk =>
  async (dispatch: AppDispatch) => {
    const isUpdating = page > 1;

    try {
      if (isUpdating) {
        dispatch(updateIsLoadingMore(true));
      } else {
        dispatch(updateIsLoading(true));
      }

      const response = await getProductsList(page);
      const {
        data: items,
        meta: {total_pages: totalPages},
      } = response.data;

      if (isUpdating) {
        dispatch(updateProducts(items));
        return;
      }

      dispatch(setProducts({items, totalPages}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    }
  };
