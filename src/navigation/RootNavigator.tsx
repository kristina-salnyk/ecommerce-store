import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HeaderContainer from '../containers/HeaderContainer';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import DrawerNavigator from './DrawerNavigator';
import {RootStackParamList} from './types';

export const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <NavigationContainer>
    <RootStack.Navigator
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
      <RootStack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{headerTitle: ''}}
      />
      <RootStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerTitle: 'Search'}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
