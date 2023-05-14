import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Todo } from "../types";

export default function TodoCard({ id, content }: Todo) {
  const tw = useTailwind();

  return (
    <View style={tw("w-full rounded-lg p-3 my-2 bg-[#0085ff]")}>
      <Text style={tw("text-white uppercase font-bold")}>{content}</Text>
    </View>
  );
}
