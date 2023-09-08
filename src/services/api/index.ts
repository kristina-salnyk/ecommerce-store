import axios from 'axios';

const REACT_APP_AUTH_URL = 'https://demo.spreecommerce.org/spree_oauth';

const REACT_APP_STOREFRONT_URL =
  'https://demo.spreecommerce.org/api/v2/storefront';

const REACT_APP_MOCK_STOREFRONT_V2_URL = 'https://9vkl6.wiremockapi.cloud';

const REACT_APP_MOCK_STOREFRONT_URL =
  'https://64f314f2edfa0459f6c64600.mockapi.io/api/v2/storefront';

export const auth = axios.create({
  baseURL: REACT_APP_AUTH_URL,
});

export const storefrontApi = axios.create({
  baseURL: REACT_APP_STOREFRONT_URL,
});

export const mockStorefrontV2Api = axios.create({
  baseURL: REACT_APP_MOCK_STOREFRONT_V2_URL,
});

export const mockStorefrontApi = axios.create({
  baseURL: REACT_APP_MOCK_STOREFRONT_URL,
});

export const setAuthHeader = (token: string): void => {
  storefrontApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = (): void => {
  storefrontApi.defaults.headers.common.Authorization = '';
};
