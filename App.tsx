import { View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <View style={{ backgroundColor: "#1d1d1d", height: "100%" }}>
        <HomeScreen />
      </View>
    </TailwindProvider>
  );
}
