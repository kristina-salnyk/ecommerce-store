import React from 'react-native';
import PropTypes from 'prop-types';

import {AppContainerStyled} from './AppContainer.styled';

const AppContainer = ({children}) => (
  <AppContainerStyled>{children}</AppContainerStyled>
);

export default AppContainer;

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
