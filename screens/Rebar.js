// React Imports
import { StatusBar, View } from "react-native";
import React from "react";

// Component Imports
import CalculationHeaders from "../components/CalculationHeaders";
import UserInput from "../components/UserInput";
import TotalDisplay from "../components/TotalDisplay";

// Local Imports
import { COLORS } from "../constants";

// Main Component
const Rebar = () => {
  // Varaibles to hold the user input
  const [slabLength, setSlabLength] = React.useState();
  const [slabWidth, setSlabWidh] = React.useState();
  const [rebarGrid, setRebarGrid] = React.useState();
  const [rebarLength, setRebarLength] = React.useState(20);
  const [edgeGrid, setEdgeGrid] = React.useState(3);

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

  return (
    <View style={{ backgroundColor: COLORS.dark, height: "100%" }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.navymedium} />
      <CalculationHeaders title="Rebar Calculation" />
      <UserInput
        title="Slab Length (ft)"
        placeholder="0"
        onChangeText={(val) => setSlabLength(val)}
      />
      <UserInput
        title="Slab Width (ft)"
        placeholder="0"
        onChangeText={(val) => setSlabWidh(val)}
      />
      <UserInput
        title="Rebar Grid (inch)"
        placeholder="0"
        onChangeText={(val) => setRebarGrid(val)}
      />
      <UserInput
        title="Rebar Length (ft)"
        placeholder="20"
        onChangeText={(val) => setRebarLength(val)}
      />
      <UserInput
        title="Edge Grid (inch)"
        placeholder="3"
        onChangeText={(val) => setEdgeGrid(val)}
      />
      <View style={{ height: "1%", paddingTop: 3 }}>
        <TotalDisplay total={`Total sticks needed:  \n${calculate()}`} />
      </View>
    </View>
  );
};

export default Rebar;
