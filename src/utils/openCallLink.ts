import {Linking} from 'react-native';

const openCallLink = async () => {
  const canOpen = await Linking.canOpenURL('tel:+1234567890');

  if (canOpen) {
    try {
      await Linking.openURL('tel:+1234567890');
    } catch (error) {
      console.log('Error calling: ', error);
    }
  } else {
    console.log('Device does not support calling phone numbers.');
  }
};

export default openCallLink;
