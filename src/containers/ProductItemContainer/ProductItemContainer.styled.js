import styled from 'styled-components/native';

export const ProductItemContainerStyled = styled.View`
  padding: ${({theme}) => theme.space[1]};
  width: ${({width}) => width}%;
`;
