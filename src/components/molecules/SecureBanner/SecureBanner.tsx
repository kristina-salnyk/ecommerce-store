import React, {FC} from 'react';
import {useTheme} from 'styled-components';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {DEFAULT_ICON_SIZE} from 'constants/shared';
import {SecureBannerStyled, SecureBannerText} from './SecureBanner.styled';

const SecureBanner: FC = () => {
  const theme = useTheme();

  return (
    <SecureBannerStyled>
      <MaterialIcon
        name="verified-user"
        size={DEFAULT_ICON_SIZE}
        color={theme.color.greenAccentLight}
      />
      <SecureBannerText>
        {'Safe and Secure Payments\n100% Authentic Products'}
      </SecureBannerText>
    </SecureBannerStyled>
  );
};

export default SecureBanner;
