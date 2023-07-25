import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ModalScreen from '../screens/ModalScreen';
import MainNavigator from './MainNavigator';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    <RootStack.Screen name="Root" component={MainNavigator} />
    <RootStack.Screen
      name="Modal"
      component={ModalScreen}
      options={{presentation: 'containedTransparentModal'}}
    />
  </RootStack.Navigator>
);

export default RootNavigator;
