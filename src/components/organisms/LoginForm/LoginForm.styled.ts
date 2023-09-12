import styled from 'styled-components/native';

import Link from '../../atoms/Link';
import Button from '../../atoms/Button';
import Splash from '../../molecules/Splash';

export const LoginFormStyled = styled.View<{testID: string}>`
  padding: ${({theme}) => theme.space.x16} 0;
  gap: ${({theme}) => theme.space.x16};
  flex: 1;
`;

export const LoginFormWrap = styled.View`
  position: relative;
`;

export const LoginFormFieldsWrap = styled.View`
  gap: ${({theme}) => theme.space.x16};
`;

export const LinkStyled = styled(Link)`
  align-self: center;
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x16};
`;

export const SplashStyled = styled(Splash)`
  position: absolute;
  height: 100%;
  align-self: center;
`;
