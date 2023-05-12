import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

export default function HomeScreen() {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-red-500")}>Weee ziooo</Text>
    </SafeAreaView>
  );
}
