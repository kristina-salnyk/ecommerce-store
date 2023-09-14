import Crashes from 'appcenter-crashes';

const onAppStart = async () => {
  try {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      console.log('Crash report: ', report);
    }
  } catch (error) {
    console.log('Error reporting crash: ', error);
  }
};

export default onAppStart;
