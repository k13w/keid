import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';
import { useTheme } from '../contexts/theme';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  const { theme } = useTheme();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#8A2BE2" />
      </View>
    )
  }
  
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {signed ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </PaperProvider>
  )
};

export default Routes;