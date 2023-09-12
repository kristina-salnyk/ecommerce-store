import styled from 'styled-components/native';

export const SelectButtonStyled = styled.TouchableOpacity<{
  accessibilityRole: string;
  selected: boolean;
  color: string;
}>`
  padding: ${({theme}) => theme.space.x8};
  background-color: ${({theme, selected, color}) =>
    selected ? color : theme.color.light};
`;

export const SelectButtonLabel = styled.Text<{
  selected: boolean;
  buttonColor: string;
}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme, selected, buttonColor}) =>
    theme.color[
      selected && !['#FFFFFF', '#F4F2D6', '#AAF0D1'].includes(buttonColor)
        ? 'white'
        : 'darkGray'
    ]};
`;
