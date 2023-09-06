import {launchImageLibrary} from 'react-native-image-picker';

const getImageFromLibrary = async (): Promise<string | undefined> => {
  try {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    });
    if (response.assets) {
      return response.assets[0].uri;
    }
  } catch (error) {
    console.log('Error choosing image:', error);
  }
};

export default getImageFromLibrary;
