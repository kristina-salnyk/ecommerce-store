import React, {FC, ReactNode} from 'react';
import {ViewProps} from 'react-native';

import {ShadowBoxStyled} from './ShadowBox.styled';

interface ShadowBoxProps extends ViewProps {
  children: ReactNode;
}

const ShadowBox: FC<ShadowBoxProps> = ({children, style}) => (
  <ShadowBoxStyled style={style}>{children}</ShadowBoxStyled>
);

export default ShadowBox;
