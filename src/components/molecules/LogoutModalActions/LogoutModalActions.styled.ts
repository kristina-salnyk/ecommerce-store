import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const LogoutModalActionsStyled = styled.View`
  margin-top: ${({theme}) => theme.space.x16};
  flex-direction: row;
  gap: ${({theme}) => theme.space.x32};
`;

export const ButtonStyled = styled(Button)`
  background-color: ${({theme}) => theme.color.redAccent};
`;
