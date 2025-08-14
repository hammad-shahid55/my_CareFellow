import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "./AppText";

export default function ChildScreen1() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView>
        <View className="h-full w-full p-4">
          {/* Image */}
          <View id="image-box" className="h-[5rem] w-full">
            <Image source={require("../assets/images/care.png")} />
          </View>

          {/* Input Box */}
          <View id="input-box" className="p-2 relative top-[40px]">
            <AppText className="text-center  text-[24.18px] ">
              Where do you need {"\n"}
              <Text>care?</Text>
            </AppText>

            {/* Fixed Input with Icon Alignment */}
            <View className="flex flex-row items-center border border-[#868686] rounded-[8.9px] h-[48px] bg-white px-3 mt-4">
              <FontAwesome
                name="map-marker"
                color="#828282"
                size={16}
                className="relative top-[-1px] left-[2px]"
              />
              <TextInput
                placeholder="ZIP code"
                placeholderTextColor="#828282"
                className="flex-1 ml-3 text-base"
              />
            </View>

            {/* Button */}
            <View className="flex items-center my-[10px]">
              <TouchableOpacity
                onPress={() => router.navigate("./care")}
                className="bg-green-500 w-[292.76922607421875px] h-[42px] rounded-[20px] flex items-center justify-center my-4"
              >
                <Text className="text-white font-semibold">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
