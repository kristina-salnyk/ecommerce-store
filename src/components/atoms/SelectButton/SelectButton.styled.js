import styled from 'styled-components/native';

export const SelectButtonStyled = styled.TouchableOpacity`
  padding: ${({theme}) => theme.space[1]};
  background-color: ${({theme, selected}) =>
    theme.color[selected ? 'primary' : 'light']};
`;

export const SelectButtonLabel = styled.Text`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme, selected}) => theme.color[selected ? 'white' : 'darkGray']};
`;
