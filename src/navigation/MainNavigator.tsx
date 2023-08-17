import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import {MainStackParamList} from './types';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HeaderContainer from '../containers/HeaderContainer';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import {useAuth} from '../contexts/AuthContext';

export const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const {
    state: {token, isLoading},
  } = useAuth();

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <MainStack.Navigator
      initialRouteName={token ? 'Drawer' : 'Login'}
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
      {!token && (
        <>
          <MainStack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerTitle: '',
            }}
          />
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: '',
            }}
          />
          <MainStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{
              headerTitle: '',
            }}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
