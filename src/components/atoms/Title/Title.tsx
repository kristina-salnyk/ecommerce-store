import React, {FC} from 'react';

import {TitleStyled} from './Title.styled';

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({text}) => <TitleStyled>{text}</TitleStyled>;

export default Title;
