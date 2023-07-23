import type {PropsWithChildren} from 'react';
import React, {FC} from 'react';

import {ScreenContainerStyled} from './ScreenContainer.styled';

const ScreenContainer: FC<PropsWithChildren> = ({children}) => (
  <ScreenContainerStyled>{children}</ScreenContainerStyled>
);

export default ScreenContainer;
