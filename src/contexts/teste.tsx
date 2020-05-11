import {  DefaultTheme, DarkTheme } from '@react-navigation/native';

export const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };