// React Imports
import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";

// Local Imports
import { ThemeContext } from "../ThemeContext";
import { FONTS, SIZES, SHADOWS } from "../constants";

const TotalDisplay = ({ total }) => {
  const { selectedTheme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      backgroundColor: selectedTheme.secondaryColor,
      width: 325,
      height: 75,
      borderRadius: SIZES.medium,
      marginTop: 10,
      ...SHADOWS.dark
    },
    text: {
      textAlign: "center",
      textAlignVertical: "center",
      fontSize: SIZES.extraLarge,
      fontFamily: FONTS.bold,
      color: selectedTheme.textColor,
      zIndex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{total}</Text>
      </View>
    </View>
  );
};

export default TotalDisplay;