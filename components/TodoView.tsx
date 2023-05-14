import { View, FlatList } from "react-native";
import TodoCard from "./TodoCard";
import { useTailwind } from "tailwind-rn";

export default function TodoView() {
  const tw = useTailwind();

  const todos = [
    { id: 1, content: "pranzare" },
    { id: 2, content: "bere" },
    { id: 3, content: "giocare" },
    { id: 4, content: "mangiare" },
    { id: 5, content: "accompagnare il cane" },
    { id: 6, content: "pranzare" },
    { id: 7, content: "pranzare" },
    { id: 8, content: "bere" },
    { id: 9, content: "giocare" },
    { id: 10, content: "mangiare" },
    { id: 11, content: "accompagnare il cane" },
    { id: 12, content: "pranzare" },
    { id: 13, content: "pranzare" },
    { id: 14, content: "bere" },
    { id: 15, content: "giocare" },
    { id: 16, content: "mangiare" },
    { id: 17, content: "accompagnare il cane" },
    { id: 18, content: "pranzare" },
  ];

  return (
    <View style={tw("w-full h-[80%] flex px-5 pt-2")}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoCard content={item.content} />}
        keyExtractor={(todo) => todo.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
