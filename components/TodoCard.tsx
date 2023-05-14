import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";

type Todo = {
  content: string;
};

export default function TodoCard({ content }: Todo) {
  const tw = useTailwind();

  return (
    <TouchableOpacity onPress={() => console.log("item pressed")}>
      <View
        style={tw(
          "w-full rounded-lg p-3 my-2 border-solid border bg-[#0085ff]"
        )}
      >
        <Text style={tw("text-white uppercase font-bold")}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
}
