import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // expo install @expo/vector-icons

export const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            {/* Avatar */}
            <Image
                source={require("../../assets/images/profile1.png")} // 👈 local asset image
                style={styles.avatar}
            />

            {/* Info Section */}
            <View style={styles.info}>
                <Text style={styles.name}>Jake Vincent</Text>
                <Text style={styles.location}>New York City</Text>
                <Text style={styles.rate}>$25/Hour</Text>
                <Text style={styles.response}>
                    Response time {"\n"}
                    <Text style={{ fontWeight: "bold" }}>Within 1 hours</Text>
                </Text>
            </View>

            {/* Action Icons */}
            <View style={styles.icons}>
                <TouchableOpacity style={styles.iconWrapper}>
                    <Ionicons name="search" size={20} color="#43B0D8" />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconWrapper, { marginLeft: 5 }]}>
                    <Ionicons name="notifications-outline" size={20} color="#A36FD8" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    avatar: {
        width: 90,
        height: 95,
        borderRadius: 15,
        marginRight: 15,
    },
    info: { flex: 1 },
    name: { fontSize: 18, fontWeight: "600", color: "#000" },
    location: { fontSize: 14, color: "gray", marginBottom: 2 },
    rate: { fontSize: 14, color: "green", fontWeight: "600", marginBottom: 4 },
    response: { fontSize: 12, color: "gray" },
    icons: { flexDirection: "row" },
    iconWrapper: {
        backgroundColor: "#E1E1E1",
        width: 45,
        height: 45,
        borderRadius: 25,

        justifyContent: "center",
        alignItems: "center",
    },
});
