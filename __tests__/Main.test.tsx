import React from 'react';
import {userEvent} from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';
import {storefrontApi} from 'services/api';
import renderWithTheme from 'utils/renderWithTheme';
import {
  PRODUCT_SUCCESS_RESPONSE,
  PRODUCTS_SUCCESS_RESPONSE,
} from 'constants/mocked';

describe('Main', () => {
  let mockStorefrontApi: MockAdapter;

  beforeAll(() => {
    mockStorefrontApi = new MockAdapter(storefrontApi);
  });

  it('user can view the list of products', async () => {
    mockStorefrontApi.onGet('/products').reply(200, PRODUCTS_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, findAllByRole, findByRole} = renderWithTheme(<App />);

    expect(getByRole('banner')).toBeOnTheScreen();

    await user.press(getByRole('button', {name: 'Skip login'}));

    expect(await findByRole('list')).toBeOnTheScreen();

    const listItems = await findAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);
  });

  it('user can navigate to the details of a product', async () => {
    mockStorefrontApi.onGet('/products').reply(200, PRODUCTS_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onGet(/\/products\/[a-zA-Z0-9-]+/)
      .reply(200, PRODUCT_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, findAllByRole, findByRole} = renderWithTheme(<App />);

    expect(getByRole('banner')).toBeOnTheScreen();

    await user.press(getByRole('button', {name: 'Skip login'}));

    expect(await findByRole('list')).toBeOnTheScreen();

    const listItems = await findAllByRole('listitem');
    await user.press(listItems[0]);

    expect(await findByRole('scrollbar')).toBeOnTheScreen();
  });
});
