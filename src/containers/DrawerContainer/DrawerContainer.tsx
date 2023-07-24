import type {PropsWithChildren} from 'react';
import React, {FC} from 'react';

import {DrawerContainerStyled} from './DrawerContainer.styled';

const DrawerContainer: FC<PropsWithChildren> = ({children}) => (
  <DrawerContainerStyled>{children}</DrawerContainerStyled>
);

export default DrawerContainer;
