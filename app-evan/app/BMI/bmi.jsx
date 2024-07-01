import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";

export default function BMI() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [bmi, setBmi] = useState(0);
  const [comment, setComment] = useState("");
  const [age, setAge] = useState("0");
  const [sex, setSex] = useState("male");

  const onChangeWeight = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    setWeight(newText);
  };

  const onChangeHeight = (text) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    setHeight(newText);
  };

  const calculate = () => {
    Keyboard.dismiss();
    let weightValue = parseFloat(weight);
    let heightValue = parseFloat(height);
    let calcBmi = weightValue / ((heightValue / 100) * (heightValue / 100));
    let rounded = Math.round(calcBmi * 10) / 10;
    setBmi(rounded);
    if (sex === "male") {
      if (calcBmi < 0) {
        setComment("Error");
        return;
      } else if (calcBmi === 0) {
        setComment("Error");
        return;
      } else if (calcBmi < 19.9) {
        setComment("Underweight");
      } else if (calcBmi >= 20 && calcBmi <= 24.9) {
        setComment("Normal weight");
      } else if (calcBmi >= 25 && calcBmi <= 29.9) {
        setComment("Overweight");
      } else if (calcBmi >= 30 && calcBmi <= 39.9) {
        setComment("Adipositas");
      } else if (calcBmi > 40) {
        setComment("Severe Adipositas");
      }
    } else {
      if (calcBmi < 0) {
        setComment("Error");
        return;
      } else if (calcBmi === 0) {
        setComment("Error");
        return;
      } else if (calcBmi < 18.9) {
        setComment("Underweight");
      } else if (calcBmi >= 19 && calcBmi <= 23.9) {
        setComment("Normal weight");
      } else if (calcBmi >= 24 && calcBmi <= 29.9) {
        setComment("Overweight");
      } else if (calcBmi >= 30 && calcBmi <= 39.9) {
        setComment("Adipositas");
      } else if (calcBmi > 40) {
        setComment("Severe Adipositas");
      }
    }
  };
  return (
    <View className="flex-1 justify-center items-center bg-purple-500 gap-8">
      <Text className="font-bold text-white text-3xl ">BMI Calculator</Text>
      <View className="flex flex-col gap-5">
        <View className="flex flex-row items-start">
          <Text className="font-bold text-white text-xl">Weight (kg): </Text>
          <TextInput
            selectionColor={"white"}
            className="text-xl text-white border-b-white border-b-2 w-16 text-center"
            value={weight}
            keyboardType="numeric"
            onChangeText={(text) => onChangeWeight(text)}
            maxLength={10}
            onPress={() => setWeight("")}
          />
        </View>
        <View className="flex flex-row items-start">
          <Text className="font-bold text-white text-xl">Height (cm): </Text>
          <TextInput
            selectionColor={"white"}
            className="text-xl text-white border-b-white border-b-2 w-16 text-center"
            value={height}
            keyboardType="numeric"
            onChangeText={(text) => onChangeHeight(text)}
            maxLength={10}
            onPress={() => setHeight("")}
          />
        </View>
        <View className="flex flex-row items-start">
          <Text className="font-bold text-white text-xl">Age: </Text>
          <TextInput
            selectionColor={"white"}
            className="text-xl text-white border-b-white border-b-2 w-16 text-center"
            value={age}
            keyboardType="numeric"
            onChangeText={(text) => setAge(text)}
            maxLength={10}
            onPress={() => setAge("")}
          />
        </View>

        <View className="flex flex-row items-center">
          <Text className="font-bold text-white text-xl pr-2">Male</Text>
          <Pressable
            className={
              " w-4 h-4 border-2 border-white rounded-full flex justify-center items-center " +
              (sex === "male" ? "bg-white p-1 rounded-full" : "bg-transparent")
            }
            onPress={() => setSex("male")}
          >
            <View className=" w-3 h-3 rounded-full border-2 border-purple-500" />
          </Pressable>
          <Text className="font-bold text-white text-xl pr-2 pl-6">Female</Text>
          <Pressable
            className={
              " w-4 h-4 border-2 border-white rounded-full flex items-center justify-center " +
              (sex === "female"
                ? "bg-white p-1 rounded-full"
                : "bg-transparent")
            }
            onPress={() => setSex("female")}
          >
            <View className=" w-3 h-3 rounded-full border-2 border-purple-500" />
          </Pressable>
        </View>
      </View>

      <Pressable className="bg-gray-800 rounded-xl p-1 " onPress={calculate}>
        <Text className="text-xl text-white p-2">Calculate</Text>
      </Pressable>

      <Text className="font-bold text-white text-xl">
        Your Bodymass index is: {bmi}
      </Text>
      <Text
        className={
          " font-bold text-3xl shadow-sm shadow-black " +
          (comment === "Overweight" ||
          comment === "Adipositas" ||
          comment === "Severe Adipositas" ||
          comment === "Underweight"
            ? "text-red-600"
            : "text-green-500")
        }
      >
        {comment}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
