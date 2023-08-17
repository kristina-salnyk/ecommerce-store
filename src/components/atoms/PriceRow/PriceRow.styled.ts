import styled from 'styled-components/native';

export const PriceRowStyled = styled.View`
  margin: ${({theme}) => theme.space.x4} 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceRowText = styled.Text<{color: string | undefined}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme, color}) => theme.color[color ?? 'gray']};
`;

export const PriceRowValue = styled.Text<{
  color: string | undefined;
  isHighlighted: boolean;
}>`
  font-size: ${({theme}) => theme.font.size.m};
  color: ${({theme, isHighlighted, color}) =>
    theme.color[isHighlighted ? 'secondary' : color ?? 'gray']};
`;
