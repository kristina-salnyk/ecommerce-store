import axios from 'axios';

const REACT_APP_URL = 'https://demo.spreecommerce.org/api/v2/storefront';

export const api = axios.create({
  baseURL: REACT_APP_URL,
});

export const setAuthHeader = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = (): void => {
  api.defaults.headers.common.Authorization = '';
};
