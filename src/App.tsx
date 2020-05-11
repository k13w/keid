import 'react-native-gesture-handler';

import React from 'react';
import { AuthProvider } from './contexts/auth';

import { ThemeProvider } from './contexts/theme';

import Routes from './routes';

const App: React.FC = () => {
  
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
