import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://via.placeholder.com/80" }}
                style={styles.avatar}
            />
            <View style={styles.info}>
                <Text style={styles.name}>Jake Vincent</Text>
                <Text style={styles.location}>New York City</Text>
                <Text style={styles.rate}>$25/Hour</Text>
                <Text style={styles.response}>Response time: Within 1 hours</Text>
            </View>
            <View style={styles.icons}>
                <Text>🔍</Text>
                <Text style={{ marginLeft: 10 }}>🔔</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: "row", alignItems: "center", padding: 15 },
    avatar: { width: 70, height: 70, borderRadius: 35, marginRight: 15 },
    info: { flex: 1 },
    name: { fontSize: 18, fontWeight: "600" },
    location: { fontSize: 14, color: "gray" },
    rate: { fontSize: 14, color: "green", fontWeight: "500" },
    response: { fontSize: 12, color: "gray" },
    icons: { flexDirection: "row" },
});
