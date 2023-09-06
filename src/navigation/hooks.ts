import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {DrawerParamList, MainStackParamList, RootStackParamList} from './types';

export const useAppRootNavigation = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();
export const useAppMainNavigation = () =>
  useNavigation<StackNavigationProp<MainStackParamList>>();
export const useAppDrawerNavigation = () =>
  useNavigation<StackNavigationProp<DrawerParamList>>();
