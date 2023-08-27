import React, {FC} from 'react';

import {SelectButtonLabel, SelectButtonStyled} from './SelectButton.styled';

interface SelectButtonProps {
  text: string;
  color: string;
  selected: boolean;
  onPress: () => void;
}

const SelectButton: FC<SelectButtonProps> = ({
  text,
  color,
  selected,
  onPress,
}) => (
  <SelectButtonStyled selected={selected} color={color} onPress={onPress}>
    <SelectButtonLabel selected={selected} buttonColor={color}>
      {text}
    </SelectButtonLabel>
  </SelectButtonStyled>
);

export default SelectButton;
