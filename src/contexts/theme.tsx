import React, { createContext, useState, useContext } from 'react';

import {  CustomDefaultTheme, DarkDefaultTheme } from '../utils/themes';

import { Theme } from 'react-native-paper';

interface ThemeContextData {
  toogleTheme(): void;
  theme: object | any;
  darkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(false);

  const theme = darkTheme ? DarkDefaultTheme : CustomDefaultTheme;

  const toogleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme)
  }

  return (
    <ThemeContext.Provider value={{ toogleTheme, theme, darkTheme }}>
      {children}
    </ThemeContext.Provider> 
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}