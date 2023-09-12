import React, {FC, useCallback} from 'react';
import {
  Keyboard,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import LogoBanner from '../../molecules/LogoBanner';
import LoginForm from '../../organisms/LoginForm';
import {useAppMainNavigation} from 'navigation/hooks';
import {
  ButtonStyled,
  LoginTemplateStyled,
  LoginWrap,
} from './LoginTemplate.styled';

const LoginTemplate: FC = () => {
  const navigation = useAppMainNavigation();

  const onPressSkipLogin = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Drawer'}],
      });
    }
  }, [navigation]);

  return (
    <LoginTemplateStyled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginWrap behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <LogoBanner />
            <LoginForm />
          </ScrollView>
          <ButtonStyled
            text="Skip login"
            onPress={onPressSkipLogin}
            IconComponent={MaterialCommunityIcon}
            iconName="arrow-right"
          />
        </LoginWrap>
      </TouchableWithoutFeedback>
    </LoginTemplateStyled>
  );
};

export default LoginTemplate;
