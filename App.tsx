import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import RootNavigator from './src/navigation/RootNavigator';
import theme from './src/theme/theme';
import {store} from './src/store';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </Provider>
  </ThemeProvider>
);

export default App;
