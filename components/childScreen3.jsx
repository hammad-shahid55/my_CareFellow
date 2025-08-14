import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChildScreen3() {
     const router = useRouter();
    return (
      <>
        <SafeAreaView>
          <View id="image" className=" h-full w-full p-4">
            <View id="image-box" className="h-[5rem] w-full ">
              <Image source={require("../assets/images/care.png")} />
            </View>
            <View className=" p-2 top-[2rem]">
              <Text className="text-justify font-bold text-[24.18px] ">
                What type of support are 
you seeking?
              </Text>
              <View className="h-[4rem] mt-7 rounded-[9px] bg-white  border-[#868686] border p-2">
              <Text className="font-semibold text-[10px] text-[#868686]">Nannies</Text>
                <Text className=" text-[8px] mt-2 text-[#868686]">Professionals that have childcare training and provide care for children within the child&apos;s own home, often on a fixed schedule (daily or weekly)</Text>
              </View>
              <View className="h-[4rem] mt-7 rounded-[9px] bg-white  border-[#868686] border p-2">
              <Text className="font-semibold text-[10px] text-[#868686]">One-Time Sitters/ Babysitters</Text>
                <Text className=" text-[8px] mt-2 text-[#868686]">These caregivers provide short-term care, often for a few hours, in the child&apos;s home.</Text>
              </View>
               <View className="h-[4rem] mt-7 rounded-[9px] bg-white  border-[#868686] border p-2">
              <Text className="font-semibold text-[10px] text-[#868686]">After School care</Text>
                <Text className=" text-[8px] mt-2 text-[#868686]">This service is designed for school-aged children who need supervision and engagement after school hours</Text>
              </View>
               <View className="h-[4rem] mt-7 rounded-[9px] bg-white  border-[#868686] border p-2">
              <Text className="font-semibold text-[10px] text-[#868686]">In-Home Daycare/Childminders</Text>
                <Text className=" text-[8px] mt-2 text-[#868686]">Caregiver looking after a child in either the child&apos;s home or the caregiver&apos;s home for extended periods, from a full day to continuous care, which can include live-in arrangements</Text>
              </View>
              <View className="items-center">
                            <TouchableOpacity  onPress={() => router.navigate("./care2")}className="bg-green-500 mt-7 items-center h-[4rem] rounded-[20px] justify-center w-[375px] ">
                              <Text className="color-white font-semibold">Next</Text>
                            </TouchableOpacity>
                          </View>
            </View>
            
          </View>
        </SafeAreaView>
      </>
    );
}