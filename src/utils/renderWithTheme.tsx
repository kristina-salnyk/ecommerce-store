import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useContext,
} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {render} from '@testing-library/react-native';

import {theme} from 'theme';

const ThemeContext = createContext(theme);

const renderWithTheme = (ui: ReactElement) => {
  const contextValue = theme;
  jest.spyOn(React, 'useContext').mockImplementation(context => {
    if (context === ThemeContext) {
      return contextValue;
    }
    return useContext(context);
  });

  const Wrapper: FC<PropsWithChildren> = ({children}) => (
    <ThemeProvider theme={contextValue}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );

  return render(ui, {wrapper: Wrapper});
};

export default renderWithTheme;
