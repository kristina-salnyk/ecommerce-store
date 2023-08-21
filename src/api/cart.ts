import {AxiosResponse} from 'axios';
import {storefrontApi} from './index';

export const getCart = async (): Promise<AxiosResponse> => {
  return await storefrontApi.get('/cart');
};
