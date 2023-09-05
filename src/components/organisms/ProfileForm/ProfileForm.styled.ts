import styled from 'styled-components/native';
import Button from '../../atoms/Button';
import Splash from '../../molecules/Splash';

export const ProfileFormStyled = styled.View`
  padding: ${({theme}) => theme.space.x16} 0;
  gap: ${({theme}) => theme.space.x16};
  flex: 1;
`;

export const ProfileFormWrap = styled.View`
  position: relative;
  margin-bottom: ${({theme}) => theme.space.x32};
`;

export const ProfileFormFieldsWrap = styled.View`
  gap: ${({theme}) => theme.space.x16};
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x8};
`;

export const SplashStyled = styled(Splash)`
  position: absolute;
  height: 100%;
  align-self: center;
`;
