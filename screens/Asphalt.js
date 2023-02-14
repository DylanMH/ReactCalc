// React imports
import { View, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

// Component Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import TotalDisplay from "../components/TotalDisplay";

// Local Imports
import { COLORS } from "../constants";

// Main Component
const Asphalt = () => {
  const navigation = useNavigation();

  // Variables to hold the user input
  const [length, setLength] = React.useState();
  const [width, setWidth] = React.useState();
  const [density, setDensity] = React.useState();
  const [depth, setDepth] = React.useState();

  // Function to calculate total mix
  const calculate = () => {
    let area = length * width;
    let depthConvert = depth / 12;
    let cubicFeet = area * depthConvert;
    let mixDensity = density || 145;
    let mixTotal = {
      total: ((cubicFeet * mixDensity) / 2000).toFixed(2),
      default: "0",
    };
    if (isNaN(mixTotal.total)) {
      return mixTotal.default;
    } else {
      return mixTotal.total;
    }
  };

  return (
    <View style={{ backgroundColor: COLORS.dark, height: "100%" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark}/>
      <CalculationHeaders title="Asphalt Calculation" />
      <UserInput
        title="Length (ft)"
        placeholder="0"
        onChangeText={(val) => setLength(val)}
      />
      <UserInput
        title="Width (ft)"
        placeholder="0"
        onChangeText={(val) => setWidth(val)}
      />
      <UserInput
        title="Depth (inch)"
        placeholder="0"
        onChangeText={(val) => setDepth(val)}
      />
      <UserInput
        title="Density/Mix Weight"
        placeholder="145"
        onChangeText={(val) => setDensity(val)}
      />
      <TotalDisplay total={`Total mix needed: \n${calculate()} tons `} />
    </View>
  );
};

export default Asphalt;
