import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { CustomDefaultTheme, DarkDefaultTheme } from '../utils/themes';

interface ThemeContextData {
  toogleTheme(): void;
  theme: object | any;
  darkTheme: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    async function loadStorageData() {

      const storagedTheme = await AsyncStorage.getItem('@KeidTheme:dark');

      if (storagedTheme) {
        setDarkTheme(JSON.parse(storagedTheme));
      } else if (!storagedTheme) {
        setDarkTheme(false);
      }
    }
    loadStorageData();
  }, [])

  const theme = darkTheme ? DarkDefaultTheme : CustomDefaultTheme;

  const toogleTheme = () => {
    console.log(darkTheme)
    setDarkTheme(!darkTheme)
    AsyncStorage.setItem('@KeidTheme:dark', JSON.stringify(!darkTheme));
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