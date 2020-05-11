import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardRoutes from './dashboard.routes';

import Home from './../screens/Home';

const HomeStack = createStackNavigator();

const Stack: React.FC = ( {navigation} ) => (
  <HomeStack.Navigator >
    <HomeStack.Screen name="Dashboard" component={Home} options={{
        title: 'Dashboard',
        headerRight: () => (
          <Icon.Button name="home" size={25} backgroundColor="#009387" options={() => {navigation.toggleDrawer();}}></Icon.Button>
        )
      }} 
    />
  </HomeStack.Navigator>
);

export default Stack;