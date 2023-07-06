import {useState} from 'react';
import React, {Button, SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme/theme';
import MainScreen from './src/screens/MainScreen/MainScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen/ProductDetailsScreen';

const App = () => {
  const [currentView, setCurrentView] = useState('Main');

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
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
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
