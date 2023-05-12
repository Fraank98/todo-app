import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </TailwindProvider>
  );
}
