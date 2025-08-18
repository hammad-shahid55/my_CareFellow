import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Preferences = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Work Location Preferences</Text>
            <View style={styles.row}>
                <Text style={styles.tag}>Bronx CB 1</Text>
                <Text style={styles.tag}>Bronx CB 2</Text>
                <Text style={styles.tag}>Near Me: 20 miles</Text>
            </View>

            <Text style={styles.heading}>Service</Text>
            <Text style={styles.tag}>Child Care</Text>

            <Text style={styles.heading}>Language</Text>
            <Text style={styles.tag}>English (American)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15 },
    heading: { marginTop: 12, marginBottom: 5, fontWeight: "500" },
    row: { flexDirection: "row", flexWrap: "wrap" },
    tag: {
        backgroundColor: "#4FB3F6",
        color: "white",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
    },
});
