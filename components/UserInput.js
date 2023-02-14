// React Imports
import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useContext } from "react";

// Local Imports
import { ThemeContext } from "../ThemeContext"
import { COLORS, FONTS, SIZES } from "../constants";

const UserInput = ({ title, placeholder, onChangeText }) => {
  const { selectedTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
  container: {
    flexDirction: "column",
    alignItems: "center",
    margin: 15,
  },
  text: {
    textAlign: "center",
    padding: 4,
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
  },
  input: {
    height: 50,
    borderColor: COLORS.white,
    borderWidth: 2,
    width: 300,
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
    borderRadius: SIZES.medium,
    color: COLORS.white,
  },
});

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          keyboardType="numeric"
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default UserInput;