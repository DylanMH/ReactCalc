// React Imports
import { View, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";

// Component Imports
import HomeHeader from "../components/HomeHeader";
import Buttons from "../components/Buttons";

// FontAwesome Imports
import {
  faRoad,
  faTrowelBricks,
  faLinesLeaning,
  faGripLinesVertical,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

// Local Imports
import { COLORS } from "../constants";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const navigation = useNavigation();
  const { selectedTheme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      alignItems: "center",
      backgroundColor: selectedTheme.backgroundColor,
      heigh: "100%",
      flex: 1,
    },
  });

  const inputFields = [
    {
      title: "Asphalt",
      onPress: () => navigation.navigate("Asphalt"),
      icon: faRoad,
      size: 20,
    },
    {
      title: "Concrete",
      onPress: () => navigation.navigate("Concrete"),
      icon: faTrowelBricks,
      size: 20,
    },
    {
      title: "Rebar",
      onPress: () => navigation.navigate("Rebar"),
      icon: faLinesLeaning,
      size: 20,
    },
    {
      title: "Dowels",
      onPress: () => navigation.navigate("Dowels"),
      icon: faGripLinesVertical,
      size: 20,
    },
    {
      title: "Themes",
      onPress: () => navigation.navigate("Themes"),
      icon: faWandMagicSparkles,
      size: 20,
    },
  ];

  const renderInputs = () => {
    return inputFields.map((field, index) => (
      <View key={index}>
        <Buttons
          title={field.title}
          onPress={field.onPress}
          icon={field.icon}
          size={field.size}
        ></Buttons>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
      <HomeHeader />
      {renderInputs()}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <LinearGradient
          colors={[selectedTheme.backgroundColor, selectedTheme.secondaryColor]}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

export default Home;
