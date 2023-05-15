import { View, FlatList, Text } from "react-native";
import TodoCard from "./TodoCard";
import { useTailwind } from "tailwind-rn";
import { SwipeListView } from "react-native-swipe-list-view";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { deleteTodo } from "../redux/todosSlice/todosSlice";
import { useState } from "react";
import { RootState } from "../redux/store";

export default function TodoView() {
  const tw = useTailwind();

  const [todoKey, setTodoKey] = useState<number>(0);

  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.todosReducer.todos);

  function renderDeleteButton() {
    return (
      <View
        style={tw(
          "bg-red-600 rounded-lg flex items-center justify-center absolute p-3 my-2 right-0 w-[20%]"
        )}
      >
        <Text
          onPress={() => dispatch(deleteTodo(todoKey))}
          style={tw("text-white")}
        >
          Delete
        </Text>
      </View>
    );
  }

  return (
    <View style={tw("w-full h-[80%] flex px-5 pt-2")}>
      <SwipeListView
        data={todos}
        renderItem={({ item }) => (
          <TodoCard id={item.id} content={item.content} />
        )}
        disableRightSwipe
        renderHiddenItem={renderDeleteButton}
        onSwipeValueChange={({ key }) => {
          setTodoKey(+key);
        }}
        rightOpenValue={-75}
        keyExtractor={(todo) => todo.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
