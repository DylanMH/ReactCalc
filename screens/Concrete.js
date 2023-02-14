// React Imports
import { StatusBar, View } from "react-native";
import React from "react";

// Copmponent Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import  TotalDisplay  from "../components/TotalDisplay";

// Local Imports
import { COLORS } from "../constants";

const Concrete = () => {
  const [length, setLength] = React.useState();
  const [width, setWidth] = React.useState();
  const [thickness, setThickness] = React.useState();

  const calculate = () => {
    let area = length * width;
    let thicknessInch = thickness / 12;
    let cubicFeet = area * thicknessInch;
    const totalYards = { total: (cubicFeet * 0.037).toFixed(2), default: "0" };
    if (isNaN(totalYards.total)) {
      return totalYards.default;
    } else {
      return totalYards.total;
    }
  };

  return (
    <View style={{ backgroundColor: COLORS.dark, height: "100%" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark}/>
      <CalculationHeaders title="Concrete Calculation" />
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
        title="Thickness (inch)"
        placeholder="0"
        onChangeText={(val) => setThickness(val)}
      />
      <TotalDisplay total={`Total yards needed:  \n${calculate()}`} />
    </View>
  );
};

export default Concrete;
