import React, {FC} from 'react';

import Modal from '../../organisms/Modal';
import {ModalTemplateStyled} from './ModalTemplate.styled';

const ModalTemplate: FC = () => (
  <ModalTemplateStyled>
    <Modal />
  </ModalTemplateStyled>
);

export default ModalTemplate;
