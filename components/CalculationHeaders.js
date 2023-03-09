// React Imports
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";

// FontAwesome Icon Imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Local Imports
import { FONTS, SIZES } from "../constants";
import { ThemeContext } from "../context/ThemeContext";

const CalculationHeaders = ({ title, titleFontSize }) => {
  const navigation = useNavigation();
  const { selectedTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    headerContainer: {
      height: 75,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      borderBottomWidth: 5,
      backgroundColor: selectedTheme.backgroundColor,
      borderColor: selectedTheme.iconColor,
    },
    arrowContainer: {
      flex: 1,
      alignItems: "flex-start",
    },
    titleContainer: {
      flex: 6,
      alignItems: "flex-start",
      alignItems: "center",
    },
    title: {
      fontFamily: FONTS.bold,
      fontSize: SIZES.extraLarge,
      color: selectedTheme.textColor,
    },
    arrow: {
      fontSize: SIZES.header,
      color: selectedTheme.iconColor,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesomeIcon style={styles.arrow} icon={faArrowLeft} size={30} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { fontSize: titleFontSize}]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CalculationHeaders;