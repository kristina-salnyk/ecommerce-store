import React, {FC} from 'react';

import {ButtonStyled, ButtonText} from './Button.styled';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({text, onPress}) => (
  <ButtonStyled onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonStyled>
);

export default Button;
