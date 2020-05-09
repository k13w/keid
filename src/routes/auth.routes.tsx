import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../screens/SingIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen options={{headerShown: false}} name="SingIn" component={SingIn} />
    </AuthStack.Navigator>
    
);

export default AuthRoutes;