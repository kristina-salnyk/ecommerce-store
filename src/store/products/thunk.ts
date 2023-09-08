import {AppDispatch, AppThunk, RootState} from '../index';
import {
  setError,
  setProducts,
  updateIsLoading,
  updateIsLoadingMore,
  updateIsRefreshing,
  updateProducts,
} from './actionCreators';
import {getProductList} from '../../services/api/products';
import ProductOptionType from '../../interfaces/ProductOptionType';
import {authMiddleware} from '../middlewares/authMiddleware';

export const getProductsThunk =
  (page: number, filter: string): AppThunk =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const isUpdating = page > 1;

    try {
      if (isUpdating) {
        dispatch(updateIsLoadingMore(true));
      } else {
        dispatch(updateIsLoading(true));
      }

      const response = await authMiddleware(
        () => getProductList(page, filter),
        dispatch,
        getState,
      );
      const {
        data: items,
        meta: {
          total_pages: totalPages,
          filters: {option_types: optionTypes},
        },
      } = response.data;

      if (isUpdating) {
        dispatch(updateProducts(items));
        return;
      }

      const colorOptions = optionTypes.find(
        (type: ProductOptionType) => type.name === 'color',
      ).option_values;

      dispatch(setProducts({items, totalPages, colorOptions}));
    } catch (error) {
      dispatch(
        setError(
          error instanceof Error ? error.message : 'Unknown error' + error,
        ),
      );
    } finally {
      if (isUpdating) {
        dispatch(updateIsLoadingMore(false));
      } else {
        dispatch(updateIsLoading(false));
        dispatch(updateIsRefreshing(false));
      }
    }
  };
