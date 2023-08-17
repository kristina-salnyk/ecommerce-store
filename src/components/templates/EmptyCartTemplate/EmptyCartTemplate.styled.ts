import styled from 'styled-components/native';

import {ORIENTATION_TYPES} from '../../../constants/shared';

export const EmptyCartTemplateStyled = styled.View<{orientation: string}>`
  padding: ${({theme}) => theme.space.x8} ${({theme}) => theme.space.x16};
  flex: 1;

  ${({orientation, theme}) =>
    orientation === ORIENTATION_TYPES.PORTRAIT
      ? `padding-top: ${theme.space.x64}`
      : 'justify-content: center;'};
`;
