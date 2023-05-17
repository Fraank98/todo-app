import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";
import { Todo } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { toggleTodo } from "../redux/todosSlice/todosSlice";

export default function TodoCard({ id, content, completed }: Todo) {
  const tw = useTailwind();
  const dispatch = useAppDispatch();

  return (
    <Pressable
      onPress={() => dispatch(toggleTodo(id))}
      style={tw("w-full rounded-lg p-3 my-2 bg-[#0085ff]")}
    >
      <Text
        style={tw(
          `${
            completed ? "line-through decoration-[red]" : ""
          } text-white uppercase font-bold `
        )}
      >
        {content}
      </Text>
    </Pressable>
  );
}
