import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChildScreen4() {
  const [children, setChildren] = useState([{ id: 1, value: "" }]);

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <SafeAreaView>
        <View id="image-box" className="h-[5rem] w-full ">
          <Image source={require("../assets/images/care.png")} />
        </View>
        <Text className="text-justify font-bold text-[20px] mt-5 p-4">
          Please enter the age of the child
        </Text>

        {children.map((child, index) => (
          <View key={child.id} className=" p-4">
            <Text className="text-sm font-medium mb-1">Child {index + 1}</Text>
            <TextInput
              className="border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Month and Year (MM/YYYY)"
              value={child.value}
              onChangeText={(t) =>
                setChildren(
                  children.map((c) =>
                    c.id === child.id ? { ...c, value: t } : c
                  )
                )
              }
              keyboardType="numeric"
            />
          </View>
        ))}

        <TouchableOpacity
          className="flex-row items-center  p-4"
          onPress={() =>
            setChildren([...children, { id: children.length + 1, value: "" }])
          }
        >
          <Ionicons name="add-circle" size={20} color="green" />
          <Text className="ml-1 text-green-600 font-medium ">
            Add another child
          </Text>
        </TouchableOpacity>
        <View className="items-center">
          <TouchableOpacity className="bg-green-500 mt-7 items-center h-[4rem] rounded-[20px] justify-center w-[300px] mb-5 ">
            <Text className="color-white font-semibold">Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
