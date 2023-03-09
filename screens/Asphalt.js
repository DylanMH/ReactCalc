// React imports
import { View, StatusBar } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

// Component Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import TotalDisplay from "../components/TotalDisplay";

// Local Imports
import { COLORS, SIZES } from "../constants";
import { ThemeContext } from "../context/ThemeContext";

// Main Component
const Asphalt = () => {
  const { selectedTheme } = useContext(ThemeContext);
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

  const inputFields = [
    {
      title: "Lenght (ft)",
      placeholder: "0",
      onChangeText: (val) => setLength(val),
    },
    {
      title: "Width (ft)",
      placeholder: "0",
      onChangeText: (val) => setWidth(val),
    },
    {
      title: "Depth (inch)",
      placeholder: "0",
      onChangeText: (val) => setDepth(val),
    },
    {
      title: "Density/Mix Weight",
      placeholder: "145",
      onChangeText: (val) => setDensity(val),
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
    <View
      style={{ backgroundColor: selectedTheme.backgroundColor, height: "100%" }}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
      <CalculationHeaders
        titleFontSize={SIZES.extraLarge}
        title="Asphalt Calculation"
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {renderInputs()}
      </View>
      <TotalDisplay total={`Total mix needed: \n${calculate()} tons `} />
    </View>
  );
};

export default Asphalt;
