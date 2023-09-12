module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|native-base|react-native-geocoding|@react-navigation|react-native-reanimated|react-native-sensitive-info|react-native-vector-icons|react-native-share|react-native-maps|react-native-snap-carousel|react-native-image-picker|react-native-gesture-handler|appcenter-crashes)/).*/',
  ],
};
