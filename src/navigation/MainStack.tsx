import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import HeaderContainer from '../containers/HeaderContainer';
import {MainStackParamList} from './types';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => (
  <MainStack.Navigator
    initialRouteName="Main"
    screenOptions={{
      header: ({navigation, route, options}) => (
        <HeaderContainer>
          <HeaderTemplate
            navigation={navigation}
            route={route}
            options={options}
          />
        </HeaderContainer>
      ),
    }}>
    <MainStack.Screen
      name="Main"
      component={MainScreen}
      options={{title: 'Ecommerce Store'}}
    />
    <MainStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
      options={{
        title: '',
      }}
    />
  </MainStack.Navigator>
);
export default MainStackNavigator;
