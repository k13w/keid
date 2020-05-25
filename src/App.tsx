import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from './contexts/theme';
import { AuthProvider } from './contexts/auth';
import { BoxProvider } from './contexts/boxes';
import { FileProvider } from './contexts/files';

import Routes from './routes';

const App: React.FC = () => {
  
  return (
    <ThemeProvider>
      <StatusBar barStyle="light-content" backgroundColor="#1c2434"  />
      <AuthProvider>
        <BoxProvider>
        <FileProvider>
        <Routes />
        </FileProvider>
        </BoxProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
