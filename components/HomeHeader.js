// React Imports
import { View, Text, StyleSheet, Image } from "react-native";
import { useContext } from "react";

// Local Imports
import { COLORS, FONTS, SIZES } from "../constants";
import { ThemeContext } from "../context/ThemeContext"; 

const HomeHeader = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    text: {
    ...FONTS.h1,
      color: COLORS.white,
      fontSize: SIZES.h1,
      opacity: 0.8,
      color: selectedTheme.textColor,
    },
    image: {
      width: 100,
      height: 100,
      marginTop: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/iconimage.png")}
      ></Image>
      <Text style={styles.text}>Choose your calculation...</Text>
    </View>
  );
};

export default HomeHeader;
