import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';

import {SplashStyled} from './Splash.styled';

const Splash: FC = () => (
  <SplashStyled>
    <ActivityIndicator size="large" />
  </SplashStyled>
);

export default Splash;
