import {Linking} from 'react-native';

const openEmailLink = async () => {
  const canOpen = await Linking.canOpenURL('mailto:commerce.store@mail.com');

  if (canOpen) {
    try {
      await Linking.openURL('mailto:kristina.salnyk@gmail.com');
    } catch (error) {
      console.log('Error opening email:', error);
    }
  } else {
    console.log('Device does not support opening email URLs.');
  }
};

export default openEmailLink;
