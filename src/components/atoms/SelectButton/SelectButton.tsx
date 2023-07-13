import React, {FC} from 'react';

import {SelectButtonLabel, SelectButtonStyled} from './SelectButton.styled';

interface SelectButtonProps {
  text: string;
  selected: boolean;
  onPress: () => void;
}

const SelectButton: FC<SelectButtonProps> = ({text, selected, onPress}) => (
  <SelectButtonStyled selected={selected} onPress={onPress}>
    <SelectButtonLabel selected={selected}>{text}</SelectButtonLabel>
  </SelectButtonStyled>
);

export default SelectButton;
