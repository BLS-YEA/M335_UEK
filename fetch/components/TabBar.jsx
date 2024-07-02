import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AnIcon from "react-native-vector-icons/AntDesign";
import IoIcon from "react-native-vector-icons/Ionicons";

import RandomUsersScreen from "../app/RandomUsers/randomUsers";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "lime",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Person"
        component={RandomUsersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IoIcon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
