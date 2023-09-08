import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const OrderedProductWrap = styled.View`
  padding: ${({theme}) => theme.space.x8};
`;

export const OrderedProductStyled = styled.View`
  padding: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};

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

export const OrderedProductImageWrap = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const OrderedProductDetails = styled.View`
  gap: ${({theme}) => theme.space.x8};
`;
