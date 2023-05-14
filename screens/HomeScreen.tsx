import { SafeAreaView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import TodoInput from "../components/TodoInput";
import TodoView from "../components/TodoView";

export default function HomeScreen() {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <View style={tw("w-full flex items-center justify-center p-3")}>
        <Text style={tw("text-[#ff1cf7] text-3xl font-bold")}>Todo App</Text>
      </View>
      <TodoInput />
      <TodoView />
    </SafeAreaView>
  );
}
