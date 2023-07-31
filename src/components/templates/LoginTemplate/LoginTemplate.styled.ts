import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const LoginTemplateStyled = styled.View`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16};
  flex: 1;
`;

export const LoginWrap = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ButtonStyled = styled(Button)`
  background-color: ${({theme}) => theme.color.gray};
`;
