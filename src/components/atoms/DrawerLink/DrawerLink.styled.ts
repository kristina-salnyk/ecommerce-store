import styled from 'styled-components/native';

export const DrawerLinkStyled = styled.TouchableOpacity`
  padding: ${({theme}) => theme.space.x16} 0;
  flex-direction: row;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};
`;

export const DrawerIconWrap = styled.View<{width: number}>`
  width: ${({width}) => width}px;
`;

export const DrawerLinkText = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.darkGray};
`;
