import type {PropsWithChildren} from 'react';
import React, {FC} from 'react';

import {AppContainerStyled} from './AppContainer.styled';

const AppContainer: FC<PropsWithChildren<{}>> = ({children}) => (
  <AppContainerStyled>{children}</AppContainerStyled>
);

export default AppContainer;
