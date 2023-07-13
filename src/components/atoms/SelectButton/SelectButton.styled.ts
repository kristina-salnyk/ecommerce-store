import styled from 'styled-components/native';

export const SelectButtonStyled = styled.TouchableOpacity<{selected: boolean}>`
  padding: ${({theme}) => theme.space.x8};
  background-color: ${({theme, selected}) =>
    theme.color[selected ? 'primary' : 'light']};
`;

export const SelectButtonLabel = styled.Text<{selected: boolean}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme, selected}) => theme.color[selected ? 'white' : 'darkGray']};
`;
