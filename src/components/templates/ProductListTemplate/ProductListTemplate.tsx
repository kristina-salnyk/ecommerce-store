import React, {FC} from 'react';

import ProductList from '../../organisms/ProductList';
import useOrientation from '../../../hooks/useOrientation';
import SearchBar from '../../molecules/SearchBar';
import Product from '../../../interfaces/Product';
import {
  LANDSCAPE_LIST_COLUMNS,
  ORIENTATION_TYPES,
  PERCENTAGE_FILLED_BY_PRODUCT_ITEMS,
  PORTRAIT_LIST_COLUMNS,
} from '../../../constants/shared';
import {
  ProductListTemplateStyled,
  ProductListWrap,
} from './ProductListTemplate.styled';

interface ProductListTemplateProps {
  products: Product[];
}

const ProductListTemplate: FC<ProductListTemplateProps> = ({products}) => {
  const orientation = useOrientation();
  const columnNum =
    orientation === ORIENTATION_TYPES.LANDSCAPE
      ? LANDSCAPE_LIST_COLUMNS
      : PORTRAIT_LIST_COLUMNS;
  const columnPercentWidth = Math.round(
    PERCENTAGE_FILLED_BY_PRODUCT_ITEMS / columnNum,
  );

  return (
    <ProductListTemplateStyled>
      <SearchBar />
      <ProductListWrap>
        <ProductList
          products={products}
          options={{columnNum, columnPercentWidth}}
        />
      </ProductListWrap>
    </ProductListTemplateStyled>
  );
};

export default ProductListTemplate;
