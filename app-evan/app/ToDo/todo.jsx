import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const add = () => {
    if (newTask) {
      if (isEditing) {
        const updatedTasks = [...tasks];
        updatedTasks[currentTaskIndex] = newTask;
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask("");
      Keyboard.dismiss();
    }
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  return (
    <View className=" flex-1 justify-center items-center bg-purple-500 gap-10 px-5 pt-20 pb-2">
      <Text className=" flex text-4xl text-white ">To Do List</Text>
      <View className="flex-row gap-2">
        <TextInput
          className="w-3/4 h-12 border-b-2 text-white border-white rounded-md pl-2"
          placeholder="Enter a task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <Pressable
          className="w-1/4 h-12 bg-blue-500 text-white rounded-md flex justify-center items-center"
          onPress={add}
        >
          <Text className="text-white ">{isEditing ? "Update" : "Add"}</Text>
        </Pressable>
      </View>
      <ScrollView className="w-full h-full px-5">
        <View className="flex-col gap-2">
          {tasks.map((task, index) => (
            <View
              key={index}
              className="flex-row  justify-between items-center bg-white rounded-lg py-2 px-4"
            >
              <Text className="text-black pr-4 w-2/3">{task}</Text>
              <View className="flex flex-row">
                <Pressable
                  className="p-2 mr-2 bg-yellow-500 text-white rounded-md"
                  onPress={() => editTask(index)}
                >
                  <FaIcon size={32} name="pencil" />
                </Pressable>
                <Pressable
                  className="p-2 bg-red-500 text-white rounded-md"
                  onPress={() => {
                    setTasks(tasks.filter((_, i) => i !== index));
                  }}
                >
                  <FaIcon size={32} name="trash" />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
