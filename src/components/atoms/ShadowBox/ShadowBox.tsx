import React, {FC, ReactNode} from 'react';
import {ViewProps} from 'react-native';

import {ShadowBoxStyled} from './ShadowBox.styled';

interface ShadowBoxProps extends ViewProps {
  children: ReactNode;
}

const ShadowBox: FC<ShadowBoxProps> = ({
  accessibilityRole,
  testID,
  children,
  style,
}) => (
  <ShadowBoxStyled
    style={style}
    {...(accessibilityRole && {accessibilityRole, accessible: true})}
    {...(testID && {testID})}>
    {children}
  </ShadowBoxStyled>
);

export default ShadowBox;
