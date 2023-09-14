import Analytics from 'appcenter-analytics';

const onScreenOpen = async (screenName: string) => {
  try {
    await Analytics.trackEvent('Screen Open', {screenName});
  } catch (error) {
    console.log('Error tracking screen open: ', error);
  }
};

export default onScreenOpen;
