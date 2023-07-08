import React from 'react-native';
import PropTypes from 'prop-types';

import {IconWrap, InputStyled, InputWrap} from './Input.styled';

const Input = ({value, onChange, placeholder, icon}) => (
  <InputWrap>
    {icon && <IconWrap>{icon}</IconWrap>}
    <InputStyled
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      hasIcon={!!icon}
    />
  </InputWrap>
);
export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
};
