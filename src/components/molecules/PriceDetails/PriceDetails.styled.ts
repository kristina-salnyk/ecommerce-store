import styled from 'styled-components/native';

import ShadowBox from '../../atoms/ShadowBox';

export const PriceDetailsWrap = styled.View`
  padding: ${({theme}) => theme.space.x8};
`;

export const PriceDetailsStyled = styled(ShadowBox)`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16}
    ${({theme}) => theme.space.x16};
  background-color: ${({theme}) => theme.color.white};
  border-radius: ${({theme}) => theme.shape.radius.xs};
`;
