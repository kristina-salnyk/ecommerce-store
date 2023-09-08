import React, {FC, ReactNode} from 'react';

import {
  PropertyRowStyled,
  PropertyRowText,
  PropertyRowValue,
} from './PropertyRow.styled';

interface PropertyRowProps {
  text: string;
  value: string | ReactNode;
  isHighlighted?: boolean;
}

const PropertyRow: FC<PropertyRowProps> = ({
  text,
  value,
  isHighlighted = false,
}) => (
  <PropertyRowStyled>
    <PropertyRowText>{text}</PropertyRowText>
    <PropertyRowValue isHighlighted={isHighlighted}>{value}</PropertyRowValue>
  </PropertyRowStyled>
);

export default PropertyRow;
