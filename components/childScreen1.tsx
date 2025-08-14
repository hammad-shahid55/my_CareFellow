import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChildScreen1() {
  const router = useRouter();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.ttf"),
      "AnonymousPro-Bold": require("../assets/fonts/AnonymousPro-Bold.ttf"),
      "AnonymousPro-Regular": require("../assets/fonts/AnonymousPro-Regular.ttf"),
      "ProximaNova-semibold": require("../assets/fonts/ProximaNova-semibold.otf"),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 bg-white">
      {/* Top-left image */}
      <Image
        source={require("../assets/images/left.png")}
        style={{
          position: "absolute",
          top: 70,
          left: -70,
          width: 300,
          height: 300,
          resizeMode: "contain",
          borderRadius: 6000,
        }}
      />

      {/* Bottom-right image */}
      <Image
        source={require("../assets/images/right.png")}
        style={{
          position: "absolute",
          bottom: 0,
          right: -120,
          width: 400,
          height: 450,
          resizeMode: "contain",
          borderRadius: 5000,
        }}
      />

      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View className="mt-[8px]">
            <Image
              source={require("../assets/images/care.png")}
              resizeMode="contain"
              className="w-[107px] h-[55px]"
            />
          </View>

          {/* Heading + Input */}
          <View className="mt-12 justify-center">
            <Text
              className="text-center text-[24.18px] leading-7"
              style={{ fontFamily: "AnonymousPro-Bold" }}
            >
              Where do you need {"\n"}care?
            </Text>

            {/* Input */}
            <View className="flex flex-row items-center left-[35px] border bordor[0.54px] border-[#868686] rounded-[8.9px] h-[48px] bg-white px-4 mt-4 w-[245px]">
              <FontAwesome name="map-marker" color="#707070" size={11} />
              <TextInput
                placeholder="ZIP code"
                placeholderTextColor="#707070"
                className="flex-1 ml-1 text-base"
                style={{
                  fontFamily: "ProximaNova-Regular",
                  fontWeight: "400",
                  fontSize: 11,
                }}
              />
            </View>

            {/* Button */}
            <View className="flex mt-6 left-[35px]">
              <TouchableOpacity
                onPress={() => router.navigate("./care")}
                className="bg-[#78C45E] w-full max-w-[245px] h-[42px] rounded-[20px] flex items-center justify-center"
              >
                <Text
                  className="text-white font-bold"
                  style={{
                    fontFamily: "ProximaNova-semibold",
                    fontWeight: "400",
                    fontSize: 14,
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Spacer */}
          <View className="flex-1" />

          {/* Footer */}
          <View className="mt-8 px-9 pb-6">
            <Text
              style={{
                fontFamily: "ProximaNova-Regular",
                fontWeight: "400",
                fontSize: 12,
                lineHeight: 25.39,
                color: "#000000",
                textAlign: "justify",
              }}
            >
              At CareFellows, we connect you with compassionate, experienced
              babysitters and childcare providers who create safe, nurturing
              environments for your little ones. Whether you need occasional
              babysitting, after-school care, or full-time support, CareFellows
              are here to help your family thrive.
            </Text>

            {/* Links */}
            <View className="flex flex-row px-3 mt-8 flex-wrap">
              {[
                { title: "Term of Use", url: "#" },
                { title: "Privacy Policy", url: "#" },
                { title: "Safety", url: "#" },
                { title: "Community Guidelines", url: "#" },
                { title: "Cookie Information", url: "#" },
              ].map((item, index) => (
                <Text
                  key={index}
                  className="font-semibold mx-1"
                  onPress={() => Linking.openURL(item.url)}
                  style={{
                    fontFamily: "ProximaNova-semibold",
                    fontWeight: "600",
                    fontSize: 8,
                    lineHeight: 10.26,
                    color: "#000000",
                  }}
                >
                  {item.title}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
