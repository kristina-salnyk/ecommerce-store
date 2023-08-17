import styled from 'styled-components/native';
import {Platform} from 'react-native';

import ProductName from '../../atoms/ProductName';

export const ProductItemWrap = styled.TouchableOpacity<{percentWidth: number}>`
  padding: ${({theme}) => theme.space.x8};
  width: ${({percentWidth}) => percentWidth}%;
`;

export const ProductItemStyled = styled.View`
  padding: ${({theme}) => theme.space.x8};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-grow: 1;

  ${({theme}) =>
    `shadow-color: ${theme.color.black};
    ${
      Platform.OS === 'ios'
        ? `
        shadow-offset: 0;
        shadow-opacity: 0.2;
        shadow-radius: 4px;
      `
        : `
        elevation: 4;
      `
    }`}
`;

export const ProductNameStyled = styled(ProductName)`
  margin: ${({theme}) => theme.space.x8} 0;
`;
