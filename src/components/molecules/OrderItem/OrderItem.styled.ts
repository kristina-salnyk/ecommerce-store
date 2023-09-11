import styled from 'styled-components/native';

import ProductName from '../../atoms/ProductName';
import ShadowBox from '../../atoms/ShadowBox';

export const OrderItemWrap = styled.View`
  padding: ${({theme}) => theme.space.x8};
`;

export const OrderItemStyled = styled(ShadowBox)`
  padding: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-grow: 1;
`;

export const ProductNameStyled = styled(ProductName)`
  margin: ${({theme}) => theme.space.x8} 0;
`;
