import React from 'react';
import PropTypes from 'prop-types';

import {ButtonStyled, ButtonText} from './Button.styled';

const Button = ({text, onPress}) => (
  <ButtonStyled onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonStyled>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
