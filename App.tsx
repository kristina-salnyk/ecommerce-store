import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import RootNavigator from './src/navigation/RootNavigator';
import theme from './src/theme/theme';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <RootNavigator />
    <StatusBar barStyle="light-content" />
  </ThemeProvider>
);

export default App;
