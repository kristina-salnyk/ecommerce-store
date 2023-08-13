import {api} from './index';
import {PRODUCT_ITEMS_PER_PAGE} from '../constants/shared';

export const getProductsList = async (page: number) => {
  const params = {per_page: PRODUCT_ITEMS_PER_PAGE, page};
  return await api.get('/products', {params});
};
