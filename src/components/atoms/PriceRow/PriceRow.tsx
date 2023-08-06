import React, {FC} from 'react';

import {PriceRowStyled, PriceRowText, PriceRowValue} from './PriceRow.styled';

interface ProductDescriptionProps {
  text: string;
  value: string;
  isHighlighted?: boolean;
  color?: string;
}

const PriceRow: FC<ProductDescriptionProps> = ({
  text,
  value,
  isHighlighted = false,
  color,
}) => (
  <PriceRowStyled>
    <PriceRowText color={color}>{text}</PriceRowText>
    <PriceRowValue color={color} isHighlighted={isHighlighted}>
      {value}
    </PriceRowValue>
  </PriceRowStyled>
);

export default PriceRow;
