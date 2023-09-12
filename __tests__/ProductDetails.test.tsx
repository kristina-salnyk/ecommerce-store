import React from 'react';
import {
  act,
  getDefaultNormalizer,
  userEvent,
  within,
} from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import App from '../App';
import {store} from 'store';
import {setLogout} from 'store/auth/actionCreators';
import {auth, storefrontApi} from 'services/api';
import renderWithTheme from 'utils/renderWithTheme';
import {
  ADD_TO_CART_SUCCESS_RESPONSE,
  LOGIN_SUCCESS_RESPONSE,
  PRODUCT_SUCCESS_RESPONSE,
  PRODUCTS_SUCCESS_RESPONSE,
} from 'constants/mocked';

describe('ProductDetails', () => {
  let mockAuth: MockAdapter;
  let mockStorefrontApi: MockAdapter;

  beforeAll(() => {
    mockAuth = new MockAdapter(auth);
    mockStorefrontApi = new MockAdapter(storefrontApi);
  });

  afterEach(async () => {
    await act(async () => {
      store.dispatch(setLogout());
    });
  });

  it('user can view the details of a product', async () => {
    mockStorefrontApi.onGet('/products').reply(200, PRODUCTS_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onGet(/\/products\/[a-zA-Z0-9-]+/)
      .reply(200, PRODUCT_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, getByText, findAllByRole, findByRole} = renderWithTheme(
      <App />,
    );

    expect(getByRole('banner')).toBeOnTheScreen();

    await user.press(getByRole('button', {name: 'Skip login'}));

    const listItems = await findAllByRole('listitem');

    const product = listItems.find(item => {
      const {queryByRole} = within(item);
      return queryByRole('text', {name: 'Denim Shirt'});
    });

    expect(product).toBeTruthy();

    if (product) {
      await user.press(product);
    }

    expect(await findByRole('scrollbar')).toBeOnTheScreen();

    expect(getByRole('slider')).toBeOnTheScreen();
    expect(
      getByText('Denim Shirt', {normalizer: getDefaultNormalizer()}),
    ).toBeOnTheScreen();
    expect(
      getByText('$60.99', {normalizer: getDefaultNormalizer()}),
    ).toBeOnTheScreen();
    expect(
      getByText(
        'Est cupiditate dolorem tempora cum. Pariatur facilis similique quidem doloremque nemo expedita provident inventore. Odit ratione in tempora consequatur a voluptatum. Nostrum possimus fugit tenetur delectus.',
        {normalizer: getDefaultNormalizer()},
      ),
    ).toBeOnTheScreen();
  });

  it('user can add a product to the cart with login', async () => {
    mockAuth.onPost('/token').reply(200, LOGIN_SUCCESS_RESPONSE);
    mockStorefrontApi.onGet('/products').reply(200, PRODUCTS_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onGet(/\/products\/[a-zA-Z0-9-]+/)
      .reply(200, PRODUCT_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onPost('/cart/add_item')
      .reply(200, ADD_TO_CART_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, getByLabelText, getByText, getAllByRole, findByRole} =
      renderWithTheme(<App />);

    expect(getByRole('form')).toBeOnTheScreen();

    await user.type(getByLabelText('Email'), 'user@example.com');
    await user.type(getByLabelText('Password'), 'password_example');

    await user.press(getByRole('button', {name: 'Sign In'}));

    expect(await findByRole('list')).toBeOnTheScreen();

    const listItems = getAllByRole('listitem');
    await user.press(listItems[0]);

    expect(await findByRole('scrollbar')).toBeOnTheScreen();

    const option = getByRole('option', {name: 'Blue'});

    await user.press(option);

    expect(option.props.style.backgroundColor).toBe('#0000FF');

    await user.press(getByRole('button', {name: 'Add to cart'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      getByText('Product added to your cart', {
        normalizer: getDefaultNormalizer(),
      }),
    ).toBeOnTheScreen();
  });

  it('user can not add a product to the cart without login', async () => {
    mockStorefrontApi.onGet('/products').reply(200, PRODUCTS_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onGet(/\/products\/[a-zA-Z0-9-]+/)
      .reply(200, PRODUCT_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onPost('/cart/add_item')
      .reply(200, ADD_TO_CART_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, getAllByRole, findByRole, getByText} = renderWithTheme(
      <App />,
    );

    expect(getByRole('banner')).toBeOnTheScreen();

    await user.press(getByRole('button', {name: 'Skip login'}));

    expect(await findByRole('list')).toBeOnTheScreen();

    const listItems = getAllByRole('listitem');
    await user.press(listItems[0]);

    expect(await findByRole('scrollbar')).toBeOnTheScreen();

    const option = getByRole('option', {name: 'Blue'});

    await user.press(option);

    expect(option.props.style.backgroundColor).toBe('#0000FF');

    await user.press(getByRole('button', {name: 'Add to cart'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      getByText('Login To Continue', {
        normalizer: getDefaultNormalizer(),
      }),
    ).toBeOnTheScreen();
  });

  it('user can not add a product to the cart if the color is not selected', async () => {
    mockAuth.onPost('/token').reply(200, LOGIN_SUCCESS_RESPONSE);
    mockStorefrontApi.onGet('/products').reply(200, PRODUCTS_SUCCESS_RESPONSE);
    mockStorefrontApi
      .onGet(/\/products\/[a-zA-Z0-9-]+/)
      .reply(200, PRODUCT_SUCCESS_RESPONSE);

    const user = userEvent.setup();
    const {getByRole, getByLabelText, getAllByRole, findByRole, getByText} =
      renderWithTheme(<App />);

    expect(getByRole('form')).toBeOnTheScreen();

    await user.type(getByLabelText('Email'), 'user@example.com');
    await user.type(getByLabelText('Password'), 'password_example');

    await user.press(getByRole('button', {name: 'Sign In'}));

    expect(await findByRole('list')).toBeOnTheScreen();

    const listItems = getAllByRole('listitem');
    await user.press(listItems[0]);

    expect(await findByRole('scrollbar')).toBeOnTheScreen();

    await user.press(getByRole('button', {name: 'Add to cart'}));

    expect(await findByRole('alert')).toBeOnTheScreen();

    expect(
      getByText('Select color', {
        normalizer: getDefaultNormalizer(),
      }),
    ).toBeOnTheScreen();
  });
});
