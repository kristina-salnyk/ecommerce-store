import React from 'react-native';
import PropTypes from 'prop-types';

import SelectButton from '../SelectButton';
import {ProductOptionsStyled} from './ProductOptions.styled';

const ProductOptions = ({options, selectedId, onSelect}) => (
  <ProductOptionsStyled>
    {options.map(item => (
      <SelectButton
        key={item.id}
        text={item.name}
        selected={item.id === selectedId}
        onPress={() => onSelect(item.id)}
      />
    ))}
  </ProductOptionsStyled>
);

export default ProductOptions;

ProductOptions.propTypes = {
  options: PropTypes.array.isRequired,
  selectedId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};
