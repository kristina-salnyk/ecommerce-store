import React, {FC} from 'react';

import SelectButton from '../SelectButton';
import formatColorOption from '../../../utils/formatColorOption';
import ProductOption from '../../../interfaces/ProductOption';
import {ProductSelectStyled} from './ProductSelect.styled';

interface ProductSelectProps {
  colorOptions: ProductOption[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ProductSelect: FC<ProductSelectProps> = ({
  colorOptions,
  selectedId,
  onSelect,
}) => (
  <ProductSelectStyled>
    {colorOptions.map(option => (
      <SelectButton
        key={option.id}
        text={formatColorOption(option.name)}
        color={option.presentation}
        selected={option.id === selectedId}
        onPress={() => onSelect(option.id)}
      />
    ))}
  </ProductSelectStyled>
);

export default ProductSelect;
