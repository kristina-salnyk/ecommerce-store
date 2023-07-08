import React from 'react-native';
import PropTypes from 'prop-types';

import {ScreenContainerStyled} from './ScreenContainer.styled';

const ScreenContainer = ({children}) => (
  <ScreenContainerStyled>{children}</ScreenContainerStyled>
);

export default ScreenContainer;

ScreenContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
