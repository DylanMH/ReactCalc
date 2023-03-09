import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Asphalt from "./screens/Asphalt";
import Concrete from "./screens/Concrete";
import Dowels from "./screens/Dowels";
import Rebar from "./screens/Rebar";
import ThemeSelector from "./screens/ThemeSelector";

import { ThemeProvider } from "./context/ThemeContext";

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Asphalt" component={Asphalt} />
          <Stack.Screen name="Concrete" component={Concrete} />
          <Stack.Screen name="Dowels" component={Dowels} />
          <Stack.Screen name="Rebar" component={Rebar} />
          <Stack.Screen name="Themes" component={ThemeSelector} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
