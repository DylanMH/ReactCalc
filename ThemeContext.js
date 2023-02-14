// React Imports
import { View } from 'react-native';
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Imported Themes
import { defaultTheme, darkAltTheme } from "./constants/theme";

const THEME_KEY = "SELECTED_THEME";

export const ThemeContext = createContext({
  themes: [defaultTheme, darkAltTheme],
  selectedTheme: defaultTheme,
  setSelectedTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadSelectedTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme) {
          setSelectedTheme(JSON.parse(storedTheme));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadSelectedTheme();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(THEME_KEY, JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  if (isLoading) {
    return <View />;
  }

  return (
    <ThemeContext.Provider
      value={{
        themes: [defaultTheme, darkAltTheme],
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
