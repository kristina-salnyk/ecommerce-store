import {api} from './index';

export const getCart = async () => {
  return await api.get('/cart');
};
