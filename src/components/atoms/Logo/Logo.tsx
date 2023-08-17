import React, {FC} from 'react';
import {TextProps} from 'react-native';

import {LogoStyled} from './Logo.styled';

const Logo: FC<TextProps> = ({style}) => (
  <LogoStyled style={style}>{'Ecommerce\nStore'}</LogoStyled>
);

export default Logo;
