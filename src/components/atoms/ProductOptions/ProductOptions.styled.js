import styled from 'styled-components/native';

export const ProductOptionsStyled = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.space[1]};
`;
