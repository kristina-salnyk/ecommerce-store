import React, {FC} from 'react';
import {TextProps} from 'react-native';

import {TitleStyled} from './Title.styled';

interface TitleProps extends TextProps {
  text: string;
}

const Title: FC<TitleProps> = ({text, style}) => (
  <TitleStyled style={style}>{text}</TitleStyled>
);

export default Title;
