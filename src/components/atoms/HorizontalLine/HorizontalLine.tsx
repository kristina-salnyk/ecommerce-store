import React, {FC} from 'react';
import {ViewProps} from 'react-native';

import {HorizontalLineStyled} from './HorizontalLine.styled';

const HorizontalLine: FC<ViewProps> = ({style}) => {
  return <HorizontalLineStyled style={style} />;
};

export default HorizontalLine;
