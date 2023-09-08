import styled from 'styled-components/native';

export const PropertyRowStyled = styled.View`
  margin: ${({theme}) => theme.space.x4} 0;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.space.x16};
`;

export const PropertyRowText = styled.Text`
  max-width: 150px;
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme}) => theme.color.gray};
`;

export const PropertyRowValue = styled.Text<{isHighlighted: boolean}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme, isHighlighted}) =>
    theme.color[isHighlighted ? 'greenAccent' : 'darkGray']};
`;
