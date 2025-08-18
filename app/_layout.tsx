// app/_layout.tsx
import { Stack } from "expo-router";
import { useFonts } from "expo-font";


function AppLoading() {
    return null;
}

export default function Layout() {
    const [fontsLoaded] = useFonts({
        "ProximaNova-Regular": require("../assets/fonts/ProximaNova-Regular.ttf"),
        "ProximaNova-Bold": require("../assets/fonts/ProximaNova-semibold.otf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />; // fonts load hone tak splash
    }

    return <Stack screenOptions={{ headerShown: false }} />;
}
