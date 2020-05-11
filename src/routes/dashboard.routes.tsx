import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../screens/Drawer'

import Home from '../screens/Home'
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

export default function DashboardRoutes() {
    return (
        <Drawer.Navigator initialRouteName="home" edgeWidth={300} drawerContent={props => <DrawerContent {...props} /> }>
          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="profile" component={Profile} />
          <Drawer.Screen name="settings" component={Settings} />
        </Drawer.Navigator>
    );
}