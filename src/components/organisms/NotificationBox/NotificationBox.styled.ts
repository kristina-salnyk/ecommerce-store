import styled from 'styled-components/native';

import Button from '../../atoms/Button';
import {ORIENTATION_TYPES} from '../../../constants/shared';

export const NotificationBoxStyled = styled.View<{orientation: string}>`
  margin: 0 auto;
  width: 100%;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};

  ${({orientation, theme}) =>
    orientation === ORIENTATION_TYPES.PORTRAIT
      ? `padding-top: ${theme.space.x64}`
      : 'justify-content: center;'};
`;

export const ButtonStyled = styled(Button)`
  margin: ${({theme}) => theme.space.x16} ${({theme}) => theme.space.x8} 0;
  align-self: stretch;
`;
