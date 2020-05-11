import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './contexts/auth';

import { ThemeProvider } from './contexts/theme';

import Routes from './routes';

const App: React.FC = () => {

  
  return (
    <ThemeProvider>
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
