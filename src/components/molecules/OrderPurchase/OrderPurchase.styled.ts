import styled from 'styled-components/native';

export const OrderPurchaseStyled = styled.View`
  padding-bottom: ${({theme}) => theme.space.x8};
`;

export const OrderPurchaseWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
`;

export const OrderPurchaseImageWrap = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;
