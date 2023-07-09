import React from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme/theme';
import MainScreen from './src/screens/MainScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import AppContainer from './src/containers/AppContainer';

const App = () => {
  const currentView = 'ProductDetails'; // 'ProductDetails' : 'Main'

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {currentView === 'Main' && <MainScreen />}
        {currentView === 'ProductDetails' && <ProductDetailsScreen />}
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
