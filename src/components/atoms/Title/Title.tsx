import React, {FC} from 'react';
import {StyleProp} from 'react-native';

import {TitleStyled} from './Title.styled';

interface TitleProps {
  text: string;
  style?: StyleProp<object>;
}

const Title: FC<TitleProps> = ({text, style}) => (
  <TitleStyled style={style}>{text}</TitleStyled>
);

export default Title;
