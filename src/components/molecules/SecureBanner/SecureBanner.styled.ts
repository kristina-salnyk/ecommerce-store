import styled from 'styled-components/native';

export const SecureBannerStyled = styled.View`
  padding: ${({theme}) => theme.space.x16} 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({theme}) => theme.space.x8};
`;

export const SecureBannerText = styled.Text`
  color: ${({theme}) => theme.color.greenAccentLight};
`;
