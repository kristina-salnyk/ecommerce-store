import {Share} from 'react-native';

const openShareLink = async () => {
  try {
    await Share.share({
      message: 'Check out Commerce Store app!',
      url: 'https://www.commerce-store.com',
    });
  } catch (error) {
    console.log('Error sharing:', error);
  }
};

export default openShareLink;
