import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import FaIcon from "react-native-vector-icons/FontAwesome";
import IoIcon from "react-native-vector-icons/Ionicons";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../app/Home/home";
import CounterScreen from "../app/Counter/counter";
import BMIScreen from "../app/BMI/bmi";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "violet",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FaIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Counter"
        component={CounterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaIcon name="counter" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BMI"
        component={BMIScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IoIcon name="calculator" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}