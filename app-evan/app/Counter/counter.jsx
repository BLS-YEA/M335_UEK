import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export default function Coutner() {
  const [counter, setCounter] = React.useState(0);

  return (
    <View className="flex-1 justify-center items-center bg-purple-500 gap-10">
      <Text className="font-bold text-white text-3xl">Counter</Text>
      <View className="flex flex-row gap-5">
        <Pressable
          className="bg-gray-800 rounded-xl p-1 "
          onPress={() => setCounter(counter - 1)}
        >
          <Text className="text-xl text-white p-2">Decrement</Text>
        </Pressable>
        <Text className="text-white text-3xl">{counter}</Text>
        <Pressable
          className="bg-gray-800 rounded-xl p-1 "
          onPress={() => setCounter(counter + 1)}
        >
          <Text className="text-xl text-white p-2">Incerement</Text>
        </Pressable>
      </View>
      <Pressable
        className="bg-red-500 rounded-xl p-1 "
        onPress={() => setCounter(0)}
      >
        <Text className="text-xl text-white p-2">Reset</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}