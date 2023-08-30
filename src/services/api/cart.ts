import {AxiosError, AxiosResponse} from 'axios';

import {storefrontApi} from './index';

export const createCart = async (): Promise<AxiosResponse> => {
  const params = {include: 'line_items'};

  try {
    return await storefrontApi.post('/cart', null, {params});
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const getCart = async (): Promise<AxiosResponse> => {
  const params = {include: 'line_items'};

  try {
    return await storefrontApi.get('/cart', {params});
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const addCartItem = async (item: {
  variant_id: string;
  quantity: number;
  public_metadata?: {[key: string]: string};
  private_metadata?: {[key: string]: string};
  options?: {color: string};
}): Promise<AxiosResponse> => {
  const params = {include: 'line_items'};

  const body = {
    variant_id: item.variant_id,
    quantity: item.quantity,
    public_metadata: item.public_metadata,
    private_metadata: item.private_metadata,
  };
  try {
    return await storefrontApi.post('/cart/add_item', item, {params});
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};
