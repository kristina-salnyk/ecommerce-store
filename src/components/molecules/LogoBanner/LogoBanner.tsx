import React, {FC} from 'react';

import useOrientation from 'hooks/useOrientation';
import {LogoBannerStyled, LogoStyled} from './LogoBanner.styled';

const LogoBanner: FC = () => {
  const orientation = useOrientation();

  return (
    <LogoBannerStyled testID="banner" orientation={orientation}>
      <LogoStyled />
    </LogoBannerStyled>
  );
};

export default LogoBanner;
