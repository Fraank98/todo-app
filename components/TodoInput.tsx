import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

export default function TodoInput() {
  const tw = useTailwind();

  return (
    <View style={tw("w-full p-5 flex items-center justify-center")}>
      <TextInput
        style={tw(
          "w-[80%] border border-solid border-[#0085ff] text-white rounded-lg p-3"
        )}
        placeholder="Text here..."
        placeholderTextColor={"white"}
      ></TextInput>
    </View>
  );
}
