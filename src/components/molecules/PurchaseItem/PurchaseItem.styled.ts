import {Platform} from 'react-native';
import styled from 'styled-components/native';

import IconButton from '../../atoms/IconButton';

export const PurchaseItemWrap = styled.View`
  padding: ${({theme}) => theme.space.x8};
`;

export const PurchaseItemStyled = styled.View`
  padding: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};

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

export const PurchaseItemDetailsWrap = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
`;

export const PurchaseImageWrap = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const PurchaseItemDetails = styled.View`
  gap: ${({theme}) => theme.space.x8};
`;

export const PurchaseItemActions = styled.View`
  position: relative;
  padding-top: ${({theme}) => theme.space.x16};
  align-items: center;
`;

export const PurchaseQuantityWrap = styled.View`
  justify-self: center;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
`;

export const IconButtonStyled = styled(IconButton)`
  position: absolute;
  top: ${({theme}) => theme.space.x16};
  right: 0;
`;
