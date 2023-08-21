import axios from 'axios';

const REACT_APP_AUTH_URL = 'https://demo.spreecommerce.org/spree_oauth';

const REACT_APP_STOREFRONT_URL =
  'https://demo.spreecommerce.org/api/v2/storefront';

export const auth = axios.create({
  baseURL: REACT_APP_AUTH_URL,
});

export const storefrontApi = axios.create({
  baseURL: REACT_APP_STOREFRONT_URL,
});

export const setAuthHeader = (token: string): void => {
  storefrontApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = (): void => {
  storefrontApi.defaults.headers.common.Authorization = '';
};
