// React Imports
import { View, Text, StyleSheet } from "react-native";

// Local Imports
import { COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      marginTop: 20,
      color: COLORS.white,
      fontFamily: FONTS.bold,
      fontSize: SIZES.extraLarge,
      textAlign: "center",
      flexWrap: "nowrap",
    },
  });

  return (
    <View styles={styles.container}>
      <Text style={styles.text}>Choose your calculation....</Text>
    </View>
  );
};

export default HomeHeader;