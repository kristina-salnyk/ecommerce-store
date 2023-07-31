import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {LogoStyled} from './Logo.styled';

interface LogoProps {
  style?: StyleProp<ViewStyle>;
}

const Logo: FC<LogoProps> = ({style}) => (
  <LogoStyled style={style}>{'Ecommerce\nStore'}</LogoStyled>
);

export default Logo;
