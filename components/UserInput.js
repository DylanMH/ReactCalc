// React Imports
import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useContext } from "react";

// Local Imports
import { ThemeContext } from "../context/ThemeContext"
import { FONTS, SIZES } from "../constants";

const UserInput = ({ title, placeholder, onChangeText }) => {
  const { selectedTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 15,
  },
  text: {
    textAlign: "left",
    padding: 4,
    color: selectedTheme.inputText,
    fontFamily: FONTS.bold,
    fontSize: SIZES.small,    
  },
  input: {
    height: 35,
    borderColor: selectedTheme.iconColor,
    borderWidth: 2,
    width: 150,
    textAlign: "center",
    fontFamily: FONTS.bold,
    fontSize: SIZES.extraLarge,
    borderRadius: SIZES.medium,
    backgroundColor: selectedTheme.secondaryColor,
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
          placeholderTextColor = {selectedTheme.inputText}
        />
      </View>
    </View>
  );
};

export default UserInput;