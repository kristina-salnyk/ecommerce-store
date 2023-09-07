import {CameraOptions, launchCamera} from 'react-native-image-picker';

import {IMAGE_PICKER_OPTIONS} from '../constants/shared';

const getImageFromLibrary = async (): Promise<string | undefined> => {
  try {
    const response = await launchCamera(IMAGE_PICKER_OPTIONS as CameraOptions);
    if (response.assets) {
      return response.assets[0].uri;
    }
  } catch (error) {
    console.log('Error choosing image:', error);
  }
};

export default getImageFromLibrary;
