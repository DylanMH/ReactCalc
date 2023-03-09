// React Imports
import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";

// Local Imports
import { ThemeContext } from "../context/ThemeContext";
import CalculationHeaders from "../components/CalculationHeaders";
import { SIZES, FONTS, SHADOWS } from "../constants";

const ThemeSelector = () => {
  const { themes, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: '#071C21',
        height: "100%",
        alignItems: "center",
      }}
    >
      <CalculationHeaders titleFontSize={SIZES.medium} title={`Current theme: ${selectedTheme.name}`} />
      {themes.map((theme) => (
        <TouchableOpacity
          key={theme.name}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "85%",
            height: "8%",
            backgroundColor: theme.buttonColor,
            padding: 5,
            margin: 10,
            borderRadius: SIZES.extraLarge,
          }}
          onPress={() => {
            setSelectedTheme(theme);
          }}
        >
          <Text
            style={{
              color: theme.textColor,
              fontSize: SIZES.medium,
              fontFamily: FONTS.semiBold,
            }}
          >
            {theme.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ThemeSelector;
