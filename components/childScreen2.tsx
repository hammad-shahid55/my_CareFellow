import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChildScreen2() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView>
        <View id="image" className=" h-full w-full p-4">
          <View id="image-box" className="h-[5rem] w-full ">
            <Image source={require("../assets/images/care.png")} />
          </View>
          <View className=" p-2 top-[2rem]">
            <Text className="text-center font-bold text-[24.18px] ">
              When do you need care?
            </Text>
            <View className="h-[4rem] mt-7 rounded-[9px] bg-white justify-center border-[#868686] border p-2">
              <TextInput
                className="text-base "
                placeholder="Right Now"
                placeholderTextColor={"#707070"}
              ></TextInput>
            </View>
            <View className="border h-[4rem] mt-7 rounded-[9px] bg-white justify-center p-2 border-[#868686]">
              <TextInput
                className="text-base "
                placeholder="Within a week"
                placeholderTextColor={"#707070"}
              ></TextInput>
            </View>
            <View className="border h-[4rem] mt-7 rounded-[9px] bg-white justify-center p-2 border-[#868686]">
              <TextInput
                className="text-base "
                placeholder="In 1-2 months"
                placeholderTextColor={"#707070"}
              />
            </View>
            <View className="border h-[4rem] mt-7 rounded-[9px] bg-white justify-center p-2 border-[#868686]">
              <TextInput
                className="text-base "
                placeholder="Just Browsing"
                placeholderTextColor={"#707070"}
              ></TextInput>
            </View>
            <View className="items-center">
              <TouchableOpacity
                onPress={() => router.navigate("./care1")}
                className="bg-green-500 mt-7 items-center h-[4rem] rounded-[20px] justify-center w-[350px] "
              >
                <Text className="color-white font-semibold">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
