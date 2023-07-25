import type {PropsWithChildren} from 'react';
import React, {FC} from 'react';

import {ModalContainerStyled, ModalWrap} from './ModalContainer.styled';

const ModalContainer: FC<PropsWithChildren> = ({children}) => (
  <ModalContainerStyled>
    <ModalWrap>{children}</ModalWrap>
  </ModalContainerStyled>
);

export default ModalContainer;
