import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashboardRoutes from './dashboard.routes';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = ( {navigation} ) => {

  return (
  <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={DashboardRoutes} options={{
      headerRight: () => (
        <Icon.Button name="home" size={25} backgroundColor="#009387" onPress={() => {navigation.navigate('Settings')}}></Icon.Button>
      )
    }} />
  </Stack.Navigator>
  )
  };

export default AppRoutes;