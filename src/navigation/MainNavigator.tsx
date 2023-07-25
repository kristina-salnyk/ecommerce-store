import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HeaderContainer from '../containers/HeaderContainer';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import DrawerNavigator from './DrawerNavigator';
import {MainStackParamList} from './types';

export const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => (
  <MainStack.Navigator
    initialRouteName="Drawer"
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
      name="Drawer"
      component={DrawerNavigator}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
      options={{headerTitle: ''}}
    />
    <MainStack.Screen
      name="Search"
      component={SearchScreen}
      options={{headerTitle: 'Search'}}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
