import React, {FC} from 'react';

import SelectButton from '../SelectButton';
import ProductColor from '../../../interfaces/ProductColor';
import {ProductSelectStyled} from './ProductSelect.styled';

interface ProductSelectProps {
  variants: ProductColor[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ProductSelect: FC<ProductSelectProps> = ({
  variants,
  selectedId,
  onSelect,
}) => (
  <ProductSelectStyled>
    {variants.map(item => (
      <SelectButton
        key={item.id}
        text={item.name}
        selected={item.id === selectedId}
        onPress={() => onSelect(item.id)}
      />
    ))}
  </ProductSelectStyled>
);

export default ProductSelect;
