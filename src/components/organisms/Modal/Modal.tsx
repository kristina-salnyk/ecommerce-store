import React, {FC} from 'react';
import {useTheme} from 'styled-components';
import {RouteProp, useRoute} from '@react-navigation/native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {RootStackParamList} from '../../../navigation/types';
import Title from '../../atoms/Title';
import Message from '../../atoms/Message';
import InfoModalActions from '../../molecules/InfoModalActions';
import LoginModalActions from '../../molecules/LoginModalActions';
import LogoutModalActions from '../../molecules/LogoutModalActions';
import {MODAL_ICON_SIZE, MODAL_TYPES} from '../../../constants/shared';
import {ModalStyled} from './Modal.styled';

const Modal: FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Modal'>>();
  const {type, title, message, options} = route.params;
  const theme = useTheme();

  return (
    <ModalStyled>
      <AntDesignIcon
        name={options.iconName}
        size={MODAL_ICON_SIZE}
        color={theme.color[options.iconColor]}
      />
      <Title text={title} />
      {message && <Message text={message} />}
      {type === MODAL_TYPES.INFO && <InfoModalActions />}
      {type === MODAL_TYPES.LOGIN && <LoginModalActions />}
      {type === MODAL_TYPES.LOGOUT && <LogoutModalActions />}
    </ModalStyled>
  );
};

export default Modal;