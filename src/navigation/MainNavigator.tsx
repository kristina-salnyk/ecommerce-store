import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import {MainStackParamList} from './types';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HeaderContainer from '../containers/HeaderContainer';
import Splash from '../components/molecules/Splash';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import {useAppSelector} from '../store/hooks';
import {selectIsRefreshing, selectToken} from '../store/auth/selectors';

export const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  const token = useAppSelector(selectToken);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Splash />;
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
