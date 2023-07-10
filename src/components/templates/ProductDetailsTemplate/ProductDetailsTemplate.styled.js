import styled from 'styled-components/native';

export const ProductDetailsTemplateStyled = styled.View`
  padding: ${({theme}) => theme.space[1]} ${({theme}) => theme.space[2]};
  flex: 1;
`;

export const ProductDetailsWrap = styled.View`
  padding: ${({theme}) => theme.space[2]} 0;
  flex: 1;
`;
