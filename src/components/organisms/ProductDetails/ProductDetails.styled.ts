import styled from 'styled-components/native';

import ProductName from '../../atoms/ProductName';

export const ProductDetailsWrap = styled.View`
  padding: ${({theme}) => theme.space.x16} 0;
  flex: 1;
`;

export const ProductNameStyled = styled(ProductName)`
  margin: ${({theme}) => theme.space.x8} 0;
`;
