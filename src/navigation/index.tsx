import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './MainStack';

const RootNavigator = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default RootNavigator;
