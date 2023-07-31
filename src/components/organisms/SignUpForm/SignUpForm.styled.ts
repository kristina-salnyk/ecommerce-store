import styled from 'styled-components/native';

import Link from '../../atoms/Link';
import Button from '../../atoms/Button';

export const SignUpFormStyled = styled.View`
  padding: ${({theme}) => theme.space.x16} 0;
  gap: ${({theme}) => theme.space.x24};
  flex: 1;
`;

export const LinkStyled = styled(Link)`
  align-self: center;
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x16};
`;
