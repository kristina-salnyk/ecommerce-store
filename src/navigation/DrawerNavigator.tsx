import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerParamList} from './types';
import ProfileScreen from '../screens/ProfileScreen';
import WishListScreen from '../screens/WishListScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import MainScreen from '../screens/MainScreen';
import HeaderContainer from '../containers/HeaderContainer';
import DrawerContainer from '../containers/DrawerContainer';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import DrawerContent from '../components/organisms/DrawerContent';
import {useAppSelector} from '../store/hooks';
import {selectToken} from '../store/account/selectors';
import {PERCENTAGE_FILLED_BY_DRAWER} from '../constants/shared';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  const token = useAppSelector(selectToken);

  return (
    <Drawer.Navigator
      drawerContent={() => (
        <DrawerContainer>
          <DrawerContent />
        </DrawerContainer>
      )}
      screenOptions={{
        header: ({navigation, route, options, layout}) => (
          <HeaderContainer>
            <HeaderTemplate
              navigation={navigation}
              route={route}
              options={options}
              layout={layout}
            />
          </HeaderContainer>
        ),
        drawerStyle: {width: `${PERCENTAGE_FILLED_BY_DRAWER}%`},
      }}>
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{headerTitle: 'Ecommerce Store'}}
      />
      {token && (
        <>
          <Drawer.Screen
            name="MyProfile"
            component={ProfileScreen}
            options={{headerTitle: 'My Profile'}}
          />
          <Drawer.Screen
            name="MyWishList"
            component={WishListScreen}
            options={{headerTitle: 'My Wish List'}}
          />
          <Drawer.Screen
            name="MyCart"
            component={CartScreen}
            options={{headerTitle: 'My Cart'}}
          />
          <Drawer.Screen
            name="MyOrders"
            component={OrdersScreen}
            options={{headerTitle: 'My Orders'}}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
