import type {PropsWithChildren} from 'react';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

import {HeaderContainerStyled} from './HeaderContainer.styled';

const HeaderContainer: FC<PropsWithChildren> = ({children}) => (
  <HeaderContainerStyled>
    <SafeAreaView>{children}</SafeAreaView>
  </HeaderContainerStyled>
);

export default HeaderContainer;
