import React, {FC, JSX} from 'react';

import {IconWrap, InputStyled, InputWrap} from './Input.styled';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: JSX.Element;
}

const Input: FC<InputProps> = ({value, onChange, placeholder, icon}) => (
  <InputWrap>
    {icon && <IconWrap>{icon}</IconWrap>}
    <InputStyled
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      hasIcon={Boolean(icon)}
    />
  </InputWrap>
);
export default Input;
