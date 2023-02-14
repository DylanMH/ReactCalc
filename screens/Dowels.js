// React Imports
import { StatusBar, View } from "react-native";
import React from "react";

// Component Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import TotalDisplay from "../components/TotalDisplay";

// Local Imports
import { COLORS } from "../constants";

const Dowels = () => {
  const [length, setLength] = React.useState();
  const [width, setWidth] = React.useState();
  const [dowelSeperation, setDowelSeperation] = React.useState();

  const calculate = () => {
    const perimeter = (2 * length + 2 * width) * 12;
    const totalDowels = {
      total: Math.round(perimeter / dowelSeperation),
      default: "0",
    };

    if (isNaN(totalDowels.total) || totalDowels.total === Infinity) {
      return totalDowels.default;
    } else {
      return totalDowels.total;
    }
  };

  return (
    <View style={{ backgroundColor: COLORS.dark, height: "100%" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
      <CalculationHeaders title="Dowel Calculation" />
      <UserInput
        title="Slab Length (ft)"
        placeholder="0"
        onChangeText={(val) => setLength(val)}
      />
      <UserInput
        title="Slab Width (ft)"
        placeholder="0"
        onChangeText={(val) => setWidth(val)}
      />
      <UserInput
        title="Dowel Seperation (inch)"
        placeholder="0"
        onChangeText={(val) => setDowelSeperation(val)}
      />
      <TotalDisplay total={`Total dowels needed: \n${calculate()}`} />
    </View>
  );
};

export default Dowels;
