import React, {FC, useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  MainStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import Input from '../../atoms/Input';
import {
  useAppDispatch,
  useAppSelector,
  useAppThunkDispatch,
} from '../../../store/hooks';
import {signUpThunk} from '../../../store/account/thunk';
import {selectError} from '../../../store/account/selectors';
import {
  MODAL_OPTIONS,
  MODAL_TYPES,
  NOTIFICATIONS,
} from '../../../constants/shared';
import {setError} from '../../../store/account/actionCreators';
import {ButtonStyled, LinkStyled, SignUpFormStyled} from './SignUpForm.styled';

const SignUpForm: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const rootNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
  const dispatch = useAppDispatch();
  const thunkDispatch = useAppThunkDispatch();

  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      rootNavigation.navigate('Modal', {
        type: MODAL_TYPES.confirm,
        title: NOTIFICATIONS.selectColorModal.title,
        message: NOTIFICATIONS.selectColorModal.message,
        options: MODAL_OPTIONS.error,
      });
    }
    return () => {
      dispatch(setError(null));
    };
  }, [dispatch, error, rootNavigation]);

  const onPressSignUp = useCallback(() => {
    (async () => {
      thunkDispatch(signUpThunk({username, email, password}));
    })();
  }, [thunkDispatch, username, email, password]);

  const onPressSignIn = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }, [navigation]);

  return (
    <SignUpFormStyled>
      <Input value={username} onChange={setUsername} label="Full name" />
      <Input value={email} onChange={setEmail} label="Email address" />
      <Input
        value={password}
        onChange={setPassword}
        label="Password"
        isSecure={true}
      />
      <Input
        value={passwordConfirmation}
        onChange={setPasswordConfirmation}
        label="Confirm password"
        isSecure={true}
      />
      <ButtonStyled text="Sign Up" onPress={onPressSignUp} />
      <LinkStyled
        text="Already have account? Sign In"
        onPress={onPressSignIn}
      />
    </SignUpFormStyled>
  );
};

export default SignUpForm;
