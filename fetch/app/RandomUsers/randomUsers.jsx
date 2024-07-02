import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, Image } from "react-native";

export default function RandomUsers() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=20");
    const json = await response.json();
    setData(json.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-green-400 pt-20">
      <FlatList
        data={data}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) => (
          <View className=" flex flex-row items-center pt-8 pb-2 border-b border-b-white">
            <Image
              className="rounded-full w-16 h-16 mr-4"
              source={{ uri: item.picture.large }}
            />
            <Text className="text-white text-lg">
              {item.name.first + " " + item.name.last}
            </Text>
            <Text className="absolute right-0 top-4 text-white opacity-75">{item.nat}</Text>
          </View>
        )}
      ></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}
