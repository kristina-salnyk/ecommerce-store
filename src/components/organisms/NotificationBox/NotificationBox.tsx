import React, {FC} from 'react';
import {Image, ImageSourcePropType} from 'react-native';

import Title from '../../atoms/Title';
import Message from '../../atoms/Message';
import useOrientation from '../../../hooks/useOrientation';
import {
  ButtonStyled,
  LinkStyled,
  NotificationBoxStyled,
} from './NotificationBox.styled';

interface NotificationBoxProps {
  imageSource: ImageSourcePropType;
  title: string;
  message: string;
  buttonText?: string;
  onPressButton?: () => void;
  linkText?: string;
  onPressLink?: () => void;
}

const NotificationBox: FC<NotificationBoxProps> = ({
  imageSource,
  title,
  message,
  buttonText,
  onPressButton,
  linkText,
  onPressLink,
}) => {
  const orientation = useOrientation();

  return (
    <NotificationBoxStyled orientation={orientation}>
      <Image source={imageSource} alt={title} />
      <Title text={title} />
      <Message text={message} />
      {buttonText && onPressButton && (
        <ButtonStyled text={buttonText} onPress={onPressButton} />
      )}
      {linkText && onPressLink && (
        <LinkStyled text={linkText} onPress={onPressLink} />
      )}
    </NotificationBoxStyled>
  );
};

export default NotificationBox;
