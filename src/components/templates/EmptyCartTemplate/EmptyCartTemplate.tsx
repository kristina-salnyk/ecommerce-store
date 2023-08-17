import React, {FC} from 'react';

import EmptyCart from '../../organisms/EmptyCart';
import useOrientation from '../../../hooks/useOrientation';
import {EmptyCartTemplateStyled} from './EmptyCartTemplate.styled';

const EmptyCartTemplate: FC = () => {
  const orientation = useOrientation();

  return (
    <EmptyCartTemplateStyled orientation={orientation}>
      <EmptyCart />
    </EmptyCartTemplateStyled>
  );
};
export default EmptyCartTemplate;
