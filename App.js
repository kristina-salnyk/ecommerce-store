import {useState} from 'react';
import React, {Button} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme/theme';
import MainScreen from './src/screens/MainScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import AppContainer from './src/containers/AppContainer';

const App = () => {
  const [currentView, setCurrentView] = useState('Main');

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        {currentView === 'Main' && <MainScreen />}
        {currentView === 'ProductDetails' && <ProductDetailsScreen />}
        <Button
          title={
            currentView === 'Main' ? 'Go to Product Details' : 'Back to Main'
          }
          onPress={() => {
            setCurrentView(prevState =>
              prevState === 'Main' ? 'ProductDetails' : 'Main',
            );
          }}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
