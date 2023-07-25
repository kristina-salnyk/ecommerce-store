import React, {FC} from 'react';
import {useTheme} from 'styled-components';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import Title from '../../atoms/Title';
import Message from '../../atoms/Message';
import {RootStackParamList} from '../../../navigation/types';
import {MODAL_ICON_SIZE} from '../../../constants/shared';
import {ModalStyled} from './Modal.styled';
import Button from '../../atoms/Button';

const Modal: FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Modal'>>();
  const {title, message, options} = route.params;

  return (
    <ModalStyled>
      <AntDesignIcon
        name={options.iconName}
        size={MODAL_ICON_SIZE}
        color={theme.color[options.iconColor]}
      />
      <Title text={title} />
      {message && <Message text={message} />}
      <Button text="Ok" onPress={navigation.goBack} />
    </ModalStyled>
  );
};

export default Modal;
