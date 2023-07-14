import React, {FC} from 'react';
import {ThemeProvider} from 'styled-components';

import theme from './src/theme/theme';
// import MainScreen from './src/screens/MainScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import AppContainer from './src/containers/AppContainer';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      {/*<MainScreen />*/}
      <ProductDetailsScreen />
    </AppContainer>
  </ThemeProvider>
);

export default App;
