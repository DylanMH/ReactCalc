// React Imports
import React, { useContext } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

// FontAwesome Icon Imports
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Local Imports
import { FONTS, SIZES, SHADOWS } from "../constants";
import { ThemeContext } from "../context/ThemeContext"

const Buttons = ({ onPress, title, icon, size }) => {
  const { selectedTheme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    button: {
      width: 300,
      height: 50,
      borderRadius: SIZES.extraLarge,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 20,
      backgroundColor: selectedTheme.backgroundColor,
    },
    text: {
      fontFamily: FONTS.bold,
      fontSize: SIZES.large,
      textAlign: "center",
      color: selectedTheme.textColor,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: selectedTheme.buttonColor }]}
      onPress={onPress}
    >
      <FontAwesomeIcon
        style={{
          color: selectedTheme.iconColor,
          margin: 20,
        }}
        icon={icon}
        size={size}
      ></FontAwesomeIcon>
      <Text style={styles.text}>{title}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: 30,
        }}
      >
        <FontAwesomeIcon
          style={{
            color: selectedTheme.iconColor,
          }}
          icon={faArrowRight}
        ></FontAwesomeIcon>
      </View>
    </TouchableOpacity>
  );
};

export default Buttons;
