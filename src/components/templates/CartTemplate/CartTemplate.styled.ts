import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const CartTemplateStyled = styled.View`
  padding: ${({theme}) => theme.space.x8};
  flex: 1;
`;

export const ButtonStyled = styled(Button)`
  margin: 0 ${({theme}) => theme.space.x8};
`;
