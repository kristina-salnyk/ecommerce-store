import styled from 'styled-components/native';

export const ProductNameStyled = styled.Text<{accessibilityRole: string}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
`;
