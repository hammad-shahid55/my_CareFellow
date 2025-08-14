// components/AppText.tsx
import { AnonymousPro_400Regular } from "@expo-google-fonts/anonymous-pro/400Regular";
import { AnonymousPro_400Regular_Italic } from "@expo-google-fonts/anonymous-pro/400Regular_Italic";
import { AnonymousPro_700Bold } from "@expo-google-fonts/anonymous-pro/700Bold";
import { AnonymousPro_700Bold_Italic } from "@expo-google-fonts/anonymous-pro/700Bold_Italic";
import { useFonts } from "@expo-google-fonts/anonymous-pro/useFonts";
import React, { ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

interface AppTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
  children: ReactNode;
}

export default function AppText({ style, children, ...props }: AppTextProps) {
  let [fontsLoaded] = useFonts({
    AnonymousPro_400Regular,
    AnonymousPro_400Regular_Italic,
    AnonymousPro_700Bold,
    AnonymousPro_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Text style={[styles.default, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "AnonymousPro_700Bold", // your font
  },
});
