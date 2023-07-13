import styled from 'styled-components/native';

export const ProductCostStyled = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.space.x8};
`;

export const ProductPrice = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.black};
`;

export const ProductCompareAtPrice = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.gray};
  text-decoration: line-through ${({theme}) => theme.color.gray};
`;

export const ProductDiscount = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.secondary};
`;
