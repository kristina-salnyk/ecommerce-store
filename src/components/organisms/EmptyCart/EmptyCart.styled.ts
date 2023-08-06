import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const EmptyCartStyled = styled.View`
  margin: 0 auto;
  width: 100%;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x16};
  align-self: stretch;
`;
