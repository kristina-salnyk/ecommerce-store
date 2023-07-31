import React, {FC} from 'react';
import {StyleProp} from 'react-native';

import {LinkStyled, LinkText} from './Link.styled';

interface LinkProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<object>;
}

const Link: FC<LinkProps> = ({text, onPress, style}) => (
  <LinkStyled onPress={onPress} style={style}>
    <LinkText>{text}</LinkText>
  </LinkStyled>
);
export default Link;
