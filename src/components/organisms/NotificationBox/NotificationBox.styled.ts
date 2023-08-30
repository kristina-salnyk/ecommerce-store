import styled from 'styled-components/native';

import Link from '../../atoms/Link';
import Button from '../../atoms/Button';
import {ORIENTATION_TYPES} from '../../../constants/shared';

export const NotificationBoxStyled = styled.View<{orientation: string}>`
  padding: 0 ${({theme}) => theme.space.x8};
  margin: 0 auto;
  width: 100%;
  align-items: center;
  gap: ${({theme}) => theme.space.x16};

  ${({orientation, theme}) =>
    orientation === ORIENTATION_TYPES.PORTRAIT
      ? `padding-top: ${theme.space.x64}`
      : 'justify-content: center;'};
`;

export const LinkStyled = styled(Link)`
  align-self: center;
`;

export const ButtonStyled = styled(Button)`
  margin-top: ${({theme}) => theme.space.x24};
  align-self: stretch;
`;
