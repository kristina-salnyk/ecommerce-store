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
  options: {color: string};
}): Promise<AxiosResponse> => {
  const params = {include: 'line_items'};

  try {
    return await storefrontApi.post('/cart/add_item', item, {params});
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const deleteCartItem = async (id: string): Promise<AxiosResponse> => {
  const params = {include: 'line_items'};

  try {
    return await storefrontApi.delete(`/cart/remove_line_item/${id}`, {
      params,
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const changeQuantity = async (item: {
  line_item_id: string;
  quantity: number;
}): Promise<AxiosResponse> => {
  const params = {include: 'line_items'};

  try {
    return await storefrontApi.patch('/cart/set_quantity', item, {
      params,
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};
