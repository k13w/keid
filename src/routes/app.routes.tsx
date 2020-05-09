import React from 'react';
import Dashboard from '../screens/Dashboard';

import { createStackNavigator } from '@react-navigation/stack';

const appStack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <appStack.Navigator>
        <appStack.Screen name="Dashboard" component={Dashboard} />
    </appStack.Navigator>
);

export default AppRoutes;