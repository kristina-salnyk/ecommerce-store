import React, {FC} from 'react';
import {Image, ImageSourcePropType} from 'react-native';

import Title from '../../atoms/Title';
import Message from '../../atoms/Message';
import useOrientation from '../../../hooks/useOrientation';
import {ButtonStyled, NotificationBoxStyled} from './NotificationBox.styled';

interface NotificationBoxProps {
  imageSource: ImageSourcePropType;
  title: string;
  message: string;
  action: string;
  onPress: () => void;
}

const NotificationBox: FC<NotificationBoxProps> = ({
  imageSource,
  title,
  message,
  action,
  onPress,
}) => {
  const orientation = useOrientation();

  return (
    <NotificationBoxStyled orientation={orientation}>
      <Image source={imageSource} alt={title} />
      <Title text={title} />
      <Message text={message} />
      <ButtonStyled text={action} onPress={onPress} />
    </NotificationBoxStyled>
  );
};

export default NotificationBox;
