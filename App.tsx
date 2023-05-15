import { View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <Provider store={store}>
        <View style={{ backgroundColor: "#1d1d1d", height: "100%" }}>
          <HomeScreen />
        </View>
      </Provider>
    </TailwindProvider>
  );
}
