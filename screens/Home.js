// React Imports
import { View, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// Component Imports
import HomeHeader from "../components/HomeHeader";
import Buttons from "../components/Buttons";

// FontAwesome Imports
import {
  faRoad,
  faTrowelBricks,
  faLinesLeaning,
  faGripLinesVertical,
  faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";

// Local Imports
import { COLORS } from "../constants"

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.dark,
    heigh: "100%",
    flex: 1,
  },
});

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark}/>
      <HomeHeader />

      <Buttons
        title="Asphalt"
        onPress={() => navigation.navigate("Asphalt")}
        icon={faRoad}
        size={20}
      />
      <Buttons
        title="Concrete"
        onPress={() => navigation.navigate("Concrete")}
        icon={faTrowelBricks}
        size={20}
      />
      <Buttons
        title="Rebar"
        onPress={() => navigation.navigate("Rebar")}
        icon={faLinesLeaning}
        size={20}
      />
      <Buttons
        title="Dowels"
        onPress={() => navigation.navigate("Dowels")}
        icon={faGripLinesVertical}
        size={20}
      />
      <Buttons
        title="Themes"
        onPress={() => navigation.navigate("Themes")}
        icon={faWandMagicSparkles}
        size={20}
      />
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
        <LinearGradient colors={[COLORS.dark, COLORS.gray]} style={{ flex: 1 }}/>
      </View>
    </View>
  );
};

export default Home;
