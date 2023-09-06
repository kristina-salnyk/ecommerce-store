import React, {FC, useCallback} from 'react';

import Button from '../../atoms/Button';
import {useAppDrawerNavigation} from '../../../navigation/hooks';
import getImageFromLibrary from '../../../utils/getImageFromLibrary';
import getImageFromCamera from '../../../utils/getImageFromCamera';
import {AvatarModalActionsStyled} from './AvatarModalActions.styled';

const AvatarModalActions: FC = () => {
  const navigation = useAppDrawerNavigation();

  const chooseImage = useCallback(
    (callback: () => Promise<string | undefined>) => {
      callback().then(imageURI => {
        if (imageURI) {
          navigation.navigate('MyProfile', {
            profileImage: imageURI,
          });
          return;
        }
      });
      navigation.goBack();
    },
    [navigation],
  );
  const onPressChooseFromDevice = useCallback(() => {
    chooseImage(getImageFromLibrary);
  }, [chooseImage]);

  const onPressOpenCamera = useCallback(() => {
    chooseImage(getImageFromCamera);
  }, [chooseImage]);

  return (
    <AvatarModalActionsStyled>
      <Button text="From device" onPress={onPressChooseFromDevice} />
      <Button text="Open camera" onPress={onPressOpenCamera} />
    </AvatarModalActionsStyled>
  );
};

export default AvatarModalActions;
