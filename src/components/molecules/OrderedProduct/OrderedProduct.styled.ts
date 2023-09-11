import styled from 'styled-components/native';

import ShadowBox from '../../atoms/ShadowBox';

export const OrderedProductWrap = styled.View`
  padding: ${({theme}) => theme.space.x8};
`;

export const OrderedProductStyled = styled(ShadowBox)`
  padding: ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
`;

export const OrderedProductImageWrap = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const OrderedProductDetails = styled.View`
  gap: ${({theme}) => theme.space.x8};
`;
