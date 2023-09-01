import Share from 'react-native-share';

const openShareLink = async () => {
  try {
    await Share.open({
      message: 'Check out Commerce Store app!',
      url: 'https://www.commerce-store.com',
    });
  } catch (error) {
    console.log('Error sharing:', error);
  }
};

export default openShareLink;
