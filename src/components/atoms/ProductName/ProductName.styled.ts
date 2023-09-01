import styled from 'styled-components/native';

export const ProductNameStyled = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
`;
