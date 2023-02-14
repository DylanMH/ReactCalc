// React Imports
import React, { useContext, useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

// Local Imports
import { ThemeContext } from "../ThemeContext";
import CalculationHeaders from "../components/CalculationHeaders";

const ThemeSelector = () => {
  const { themes, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <View>
      <CalculationHeaders title="Themes" />
      {themes.map((theme, index) => (
        <TouchableOpacity
          key={theme.name}
          style={{
            backgroundColor: theme.secondaryColor,
            padding: 10,
            margin: 10,
            borderRadius: 5,
          }}
          onPress={() => {
            setSelectedTheme(theme);
          }}
        >
          <Text style={{ color: theme.textColor }}>
            Switch to theme {theme.name}
          </Text>
        </TouchableOpacity>
      ))}
      <Text>Current theme: {selectedTheme.name}</Text>
    </View>
  );
};

export default ThemeSelector;