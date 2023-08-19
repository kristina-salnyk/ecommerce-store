import {AppDispatch, AppThunk} from '../index';
import {
  setError,
  setProducts,
  updateIsLoading,
  updateIsLoadingMore,
  updateProducts,
} from './actionCreators';
import {getProductsList} from '../../api/products';
import ProductOptionType from '../../interfaces/ProductOptionType';

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
    }
  };
