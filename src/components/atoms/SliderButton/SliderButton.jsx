import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {SliderButtonIcon} from './SliderButton.styled';

const SliderButton = ({name, onPress, disabled}) => (
  <TouchableOpacity disabled={disabled} onPress={onPress}>
    <SliderButtonIcon name={name} size={30} disabled={disabled} />
  </TouchableOpacity>
);

export default SliderButton;

SliderButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
