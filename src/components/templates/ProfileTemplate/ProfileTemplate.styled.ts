import styled from 'styled-components/native';

export const ProfileTemplateStyled = styled.View`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16};
  flex: 1;
`;

export const ProfileWrap = styled.KeyboardAvoidingView`
  flex: 1;
`;
