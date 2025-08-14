import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="care/index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="care1/index"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="care2/index"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
