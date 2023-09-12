import React from 'react';
import '@testing-library/jest-native/extend-expect';

import App from '../App';
import renderWithTheme from 'utils/renderWithTheme';

describe('App', () => {
  it('renders correctly', () => {
    const {getByRole} = renderWithTheme(<App />);

    expect(getByRole('banner')).toBeOnTheScreen();
  });
});
