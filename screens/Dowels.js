// React Imports
import { StatusBar, View } from "react-native";
import React, { useContext } from "react";

// Component Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import TotalDisplay from "../components/TotalDisplay";

// Local Imports
import { COLORS, SIZES } from "../constants";
import { ThemeContext } from "../context/ThemeContext";

const Dowels = () => {
  const [length, setLength] = React.useState();
  const [width, setWidth] = React.useState();
  const [dowelSeperation, setDowelSeperation] = React.useState();
  const { selectedTheme } = useContext(ThemeContext);

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

  const inputFields = [
    {
      title: "Slab Length (ft)",
      placeholder: "0",
      onChangeText: (val) => setLength(val),
    },
    {
      title: "Slab Width (ft)",
      placeholder: "0",
      onChangeText: (val) => setWidth(val),
    },
    {
      title: "Dowel Seperation (inch)",
      placeholder: "0",
      onChangeText: (val) => setDowelSeperation(val),
    },
  ];

  const renderInputs = () => {
    return inputFields.map((fields, index) => (
      <View key={index}>
        <UserInput
          title={fields.title}
          placeholder={fields.placeholder}
          onChangeText={(val) => fields.onChangeText(val)}
        />
      </View>
    ));
  };

  return (
    <View style={{ backgroundColor: selectedTheme.backgroundColor, height: "100%" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />
      <CalculationHeaders titleFontSize={SIZES.extraLarge} title="Dowel Calculation" />
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
      {renderInputs()}
      </View>
      <TotalDisplay total={`Total dowels needed: \n${calculate()}`} />
    </View>
  );
};

export default Dowels;
