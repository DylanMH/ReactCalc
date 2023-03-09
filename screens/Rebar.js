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


// Main Component
const Rebar = () => {
  // Varaibles to hold the user input
  const [slabLength, setSlabLength] = React.useState();
  const [slabWidth, setSlabWidh] = React.useState();
  const [rebarGrid, setRebarGrid] = React.useState();
  const [rebarLength, setRebarLength] = React.useState(20);
  const [edgeGrid, setEdgeGrid] = React.useState(3);
  const { selectedTheme } = useContext(ThemeContext);


  // Function to calculate the rebar total
  const calculate = () => {
    const edgeGridConvert = edgeGrid / 12;
    const gridLengthInch = (slabLength - 2 * edgeGridConvert) * 12;
    const gridWidthInch = (slabWidth - 2 * edgeGridConvert) * 12;
    const rebarColumns = gridLengthInch / rebarGrid;
    const rebarRows = gridWidthInch / rebarGrid;
    const totalRebarLength = rebarColumns * slabWidth + rebarRows * slabLength;
    const totalRebarNeeded = {
      total: Math.round(totalRebarLength / rebarLength),
      default: "0",
    };

    if (isNaN(totalRebarNeeded.total)) {
      return totalRebarNeeded.default;
    } else {
      return totalRebarNeeded.total;
    }
  };

  const inputFields = [
    {
      title: "Slab Length (ft)",
      placeholder: "0",
      onChangeText: (val) => setSlabLength(val),
    },
    {
      title: "Slab Width (ft)",
      placeholder: "0",
      onChangeText: (val) => setSlabWidh(val),
    },
    {
      title: "Rebar Grid (inch)",
      placeholder: "0",
      onChangeText: (val) => setRebarGrid(val),
    },
    {
      title: "Rebar Length (ft)",
      placeholder: "20",
      onChangeText: (val) => setRebarLength(val),
    },
    {
      title: "Edge Grid (inch)",
      placeholder: "3",
      onChangeText: (val) => setEdgeGrid(val),
    },
  ];

  const renderInputs = () => {
    return inputFields.map((field, index) => (
      <View
        style={{
          justifyContent: "space-between",
        }}
        key={index}
      >
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
      <StatusBar barStyle="light-content" backgroundColor={COLORS.navymedium} />
      <CalculationHeaders titleFontSize={SIZES.extraLarge} title="Rebar Calculation" />
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
      {renderInputs()}
      </View>
        <TotalDisplay total={`Total sticks needed:  \n${calculate()}`} />
    </View>
  );
};

export default Rebar;
