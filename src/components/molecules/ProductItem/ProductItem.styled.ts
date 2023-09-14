import styled from 'styled-components/native';

import ProductName from '../../atoms/ProductName';
import ShadowBox from '../../atoms/ShadowBox';

export const ProductItemWrap = styled.TouchableOpacity<{percentWidth: number}>`
  padding: ${({theme}) => theme.space.x8};
  width: ${({percentWidth}) => percentWidth}%;
`;

export const ProductItemStyled = styled(ShadowBox)<{testID?: string}>`
  padding: ${({theme}) => theme.space.x8};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-grow: 1;
`;

export const ProductNameStyled = styled(ProductName)`
  margin: ${({theme}) => theme.space.x8} 0;
`;
