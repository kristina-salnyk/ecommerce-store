import React, {FC} from 'react';
import {ActivityIndicator, ViewProps} from 'react-native';

import {SplashStyled} from './Splash.styled';

const Splash: FC<ViewProps> = ({style}) => (
  <SplashStyled style={style}>
    <ActivityIndicator size="large" />
  </SplashStyled>
);

export default Splash;
