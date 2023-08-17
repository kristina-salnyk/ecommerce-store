import styled from 'styled-components/native';

export const ForgotPasswordTemplateStyled = styled.View`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16};
  flex: 1;
`;

export const ForgotPasswordWrap = styled.KeyboardAvoidingView`
  flex: 1;
`;
