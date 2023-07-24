import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {HorizontalLineStyled} from './HorizontalLine.styled';

interface HorizontalLineProps {
  style?: StyleProp<ViewStyle>;
}

const HorizontalLine: FC<HorizontalLineProps> = ({style}) => {
  return <HorizontalLineStyled style={style} />;
};

export default HorizontalLine;
