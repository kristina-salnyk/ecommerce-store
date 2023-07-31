import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const ForgotPasswordFormStyled = styled.View`
  padding: ${({theme}) => theme.space.x16} 0;
  gap: ${({theme}) => theme.space.x24};
  flex: 1;
`;

export const ForgotPasswordText = styled.Text`
  margin-bottom: ${({theme}) => theme.space.x32};
  max-width: 300px;
  align-self: center;
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
  text-align: center;
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x16};
`;
