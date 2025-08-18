import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ServicesSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Services 12</Text>
            <View style={styles.row}>
                <Text style={styles.tag}>Bronx CB 1</Text>
                <Text style={styles.tag}>Near Me: 20 miles</Text>
                <Text style={styles.tag}>Bronx CB 2</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15, borderWidth: 1, borderColor: "#ddd", margin: 15, borderRadius: 8 },
    title: { fontWeight: "bold", marginBottom: 10 },
    row: { flexDirection: "row", flexWrap: "wrap" },
    tag: {
        borderWidth: 1,
        borderColor: "skyblue",
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        marginRight: 6,
        marginBottom: 6,
    },
});
