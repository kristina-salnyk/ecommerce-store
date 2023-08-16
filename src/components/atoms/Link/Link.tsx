import React, {FC} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {LinkStyled, LinkText} from './Link.styled';

interface LinkProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
}

const Link: FC<LinkProps> = ({text, onPress, style}) => (
  <LinkStyled onPress={onPress} style={style}>
    <LinkText>{text}</LinkText>
  </LinkStyled>
);
export default Link;
