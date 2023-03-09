// React Imports
import { StatusBar, View } from "react-native";
import React, { useContext } from "react";

// Copmponent Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import TotalDisplay from "../components/TotalDisplay";

// Local Imports
import { COLORS, SIZES } from "../constants";
import { ThemeContext } from "../context/ThemeContext";

const Concrete = () => {
  const [length, setLength] = React.useState();
  const [width, setWidth] = React.useState();
  const [thickness, setThickness] = React.useState();
  const { selectedTheme } = useContext(ThemeContext);

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

  const inputFields = [
    {
      title: "Length (ft)",
      placeholder: "0",
      onChangeText: (val) => setLength(val),
    },
    {
      title: "Width (ft)",
      placeholder: "0",
      onChangeText: (val) => setWidth(val),
    },
    {
      title: "Thickness (inch)",
      placeholder: "0",
      onChangeText: (val) => setThickness(val),
    },
  ];

  const renderInputs = () => {
    return inputFields.map((field, index) => (
      <View key={index}>
        <UserInput
          title={field.title}
          placeholder={field.placeholder}
          onChangeText={field.onChangeText}
        />
      </View>
    ));
  };

  return (
    <View style={{ backgroundColor: selectedTheme.backgroundColor, height: "100%" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
      <CalculationHeaders titleFontSize={SIZES.extraLarge} title="Concrete Calculation" />
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: 'center'}}>
      {renderInputs()}
      </View>
      <TotalDisplay total={`Total yards needed:  \n${calculate()}`} />
    </View>
  );
};

export default Concrete;
