// React Imports
import React, { useContext } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

// FontAwesome Icon Imports
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Local Imports
import { FONTS, SHADOWS, SIZES, COLORS } from "../constants";
import { ThemeContext } from "../ThemeContext"

const Buttons = ({ onPress, title, icon, size }) => {
  const { selectedTheme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    button: {
      width: 300,
      height: 50,
      borderRadius: SIZES.medium,
      ...SHADOWS.dark,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 30,
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
      style={[styles.button, { backgroundColor: COLORS.gray }]}
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
