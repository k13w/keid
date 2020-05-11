import {  DefaultTheme, DarkTheme } from '@react-navigation/native';
import { DefaultTheme as DefaultThemePaper, DarkTheme as DarkThemePaper } from 'react-native-paper';

export const CustomDefaultTheme = {
    ...DefaultTheme,
    ...DefaultThemePaper,
    colors: {
      ...DefaultThemePaper.colors,
      ...DefaultTheme.colors,
    }
}
  
export const DarkDefaultTheme = {
  ...DarkTheme,
  ...DarkThemePaper,
  colors: {
    ...DarkThemePaper.colors,
    ...DarkTheme.colors,
    background: '#1c2434',
    text: '#FFFFFF',
    card: '#1c2434',
  },
};