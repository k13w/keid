import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardRoutes from './dashboard.routes';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={DashboardRoutes} />
    </Stack.Navigator>
  )
};

export default AppRoutes;