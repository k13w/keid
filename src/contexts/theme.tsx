import React, { createContext, useState, useContext } from 'react';

import {  DefaultTheme, DarkTheme } from '@react-navigation/native';

interface ThemeContextData {
  toogleTheme(): void;
  theme: object;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {

const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    }
}
  
const DarkDefaultTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

  const [darkTheme, setDarkTheme] = useState(true);

  const theme = darkTheme ? DarkDefaultTheme : CustomDefaultTheme;

  const toogleTheme = () => {
    setDarkTheme(darkTheme => !darkTheme)
  }

  return (
    <ThemeContext.Provider value={{ toogleTheme, theme }}>
      {children}
    </ThemeContext.Provider> 
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}