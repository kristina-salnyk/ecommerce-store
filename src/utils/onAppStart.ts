import Crashes from 'appcenter-crashes';

const onAppStart = async () => {
  try {
    if (await Crashes.hasCrashedInLastSession()) {
      const report = await Crashes.lastSessionCrashReport();
      console.log('Crash report: ', report);
    }
  } catch (error) {
    console.log('Error reporting crash: ', error);
  }
};

export default onAppStart;
