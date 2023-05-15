import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setInputValue } from "../redux/inputTodoSlice/inputTodoSlice";
import { addTodo } from "../redux/todosSlice/todosSlice";
import { RootState } from "../redux/store";

export default function TodoInput() {
  const tw = useTailwind();

  const inputValue = useAppSelector((state) => state.inputTodoSlice);
  const todos = useAppSelector((state: RootState) => state.todosReducer.todos);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addTodo({ content: inputValue, id: todos.length + 1 }));
    dispatch(setInputValue(""));
  };

  return (
    <View style={tw("w-full p-5 flex items-center justify-center")}>
      <TextInput
        onChangeText={(c) => dispatch(setInputValue(c))}
        onSubmitEditing={handleSubmit}
        style={tw(
          "w-[80%] border border-solid border-[#0085ff] text-white rounded-lg p-3"
        )}
        placeholder="Text here..."
        placeholderTextColor={"white"}
        value={inputValue}
      />
    </View>
  );
}
