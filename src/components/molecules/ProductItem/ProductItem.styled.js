import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const ProductItemStyled = styled.View`
  padding: ${({theme}) => theme.space[1]};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
  flex-grow: 1;

  ${Platform.select({
    ios: css`
      shadow-color: ${({theme}) => theme.color.black};
      shadow-offset: 0px 0px;
      shadow-opacity: 0.2;
      shadow-radius: 8px;
    `,
    android: css`
      elevation: 5;
    `,
  })}
`;

export const ProductItemImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const ProductItemTitle = styled.Text`
  margin: ${({theme}) => theme.space[1]} 0;
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
`;

export const ProductItemCost = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.space[1]};
`;

export const ProductItemPrice = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.black};
`;

export const ProductItemCompareAtPrice = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.gray};
  text-decoration: line-through ${({theme}) => theme.color.gray};
`;

export const ProductItemDiscount = styled.Text`
  font-size: ${({theme}) => theme.font.size.s};
  font-weight: ${({theme}) => theme.font.weight.bold};
  color: ${({theme}) => theme.color.primary};
`;
