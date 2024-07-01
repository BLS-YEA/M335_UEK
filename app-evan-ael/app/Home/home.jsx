import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export default function Home() {

  return (
    <View className="flex-1 justify-center items-center bg-purple-500 gap-10">
      <Text className="font-bold text-white text-3xl">Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}
