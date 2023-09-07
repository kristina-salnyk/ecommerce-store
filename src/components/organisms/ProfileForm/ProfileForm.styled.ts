import styled from 'styled-components/native';

import Button from '../../atoms/Button';

export const ProfileFormWrap = styled.View`
  padding: ${({theme}) => theme.space.x16} 0;
  gap: ${({theme}) => theme.space.x16};
  flex: 1;
`;

export const ProfileFormFieldsWrap = styled.View`
  gap: ${({theme}) => theme.space.x16};
  margin-bottom: ${({theme}) => theme.space.x32};
`;

export const ProfileImageWrap = styled.TouchableOpacity`
  align-self: center;
`;

export const ProfileImageStyled = styled.Image`
  border-radius: ${({theme}) => theme.shape.radius.xl};
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x8};
`;
