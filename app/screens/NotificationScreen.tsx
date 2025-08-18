// App/Screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>NotificationScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 24, fontWeight: "bold" },
});
