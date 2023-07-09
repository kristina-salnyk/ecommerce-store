import styled from 'styled-components/native';

export const ProductNameStyled = styled.Text`
  margin: ${({theme}) => theme.space[1]} 0;
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
`;
