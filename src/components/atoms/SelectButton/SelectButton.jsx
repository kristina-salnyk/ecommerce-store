import React from 'react';
import PropTypes from 'prop-types';

import {SelectButtonLabel, SelectButtonStyled} from './SelectButton.styled';

const SelectButton = ({text, selected, onPress}) => (
  <SelectButtonStyled selected={selected} onPress={onPress}>
    <SelectButtonLabel selected={selected}>{text}</SelectButtonLabel>
  </SelectButtonStyled>
);

export default SelectButton;

SelectButton.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};
